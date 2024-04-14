import { Editor, useEditor } from '@tiptap/react'

import { ExtensionKit } from '@/extensions/extension-kit'
import { useSidebar } from './useSidebar'
import { initialContent } from '@/lib/data/initialContent'

declare global {
  interface Window {
    editor: Editor | null
  }
}

export const useBlockEditor = () => {
  const leftSidebar = useSidebar()

  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands.setContent(initialContent)
        }
      },
      extensions: [...ExtensionKit()],
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
    },
    [],
  )

  const characterCount = editor?.storage.characterCount || { characters: () => 0, words: () => 0 }

  window.editor = editor

  return { editor, characterCount, leftSidebar }
}
