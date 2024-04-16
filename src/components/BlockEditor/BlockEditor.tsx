'use client'

import { EditorContent, PureEditorContent } from '@tiptap/react'
import React, { useMemo, useRef } from 'react'

import { LinkMenu } from '@/components/menus'

import { useBlockEditor } from '@/hooks/useBlockEditor'

import '@/styles/index.css'

import { EditorContext } from '@/context/EditorContext'
import ImageBlockMenu from '@/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/extensions/Table/menus'
import { EditorHeader } from './components/EditorHeader'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import { MessageHandler } from './components/MessageHandler'

export const BlockEditor = () => {
  const menuContainerRef = useRef(null)
  const editorRef = useRef<PureEditorContent | null>(null)

  const { editor, characterCount } = useBlockEditor()

  const providerValue = useMemo(() => {
    return {}
  }, [])

  if (!editor) {
    return null
  }

  return (
    <EditorContext.Provider value={providerValue}>
      <div className="flex h-full" ref={menuContainerRef}>
        <div className="relative flex flex-col flex-1 h-full overflow-hidden">
          <EditorHeader
            characters={characterCount.characters()}
            words={characterCount.words()}
          />
          <EditorContent editor={editor} ref={editorRef} className="flex-1 overflow-y-auto" />
          <ContentItemMenu editor={editor} />
          <LinkMenu editor={editor} appendTo={menuContainerRef} />
          <TextMenu editor={editor} />
          <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
          <TableRowMenu editor={editor} appendTo={menuContainerRef} />
          <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
          <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
        </div>
      </div>
      <MessageHandler editor={editor} />
    </EditorContext.Provider>
  )
}

export default BlockEditor
