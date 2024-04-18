import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './Component'

declare module '@tiptap/core' {
  // eslint-disable-next-line no-unused-vars
  interface Commands<ReturnType> {
    reactComponent: {
      insertQuestionBlock: () => ReturnType
    }
  }
}

export const QuestionBlock = Node.create({
  name: 'reactComponent',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'react-component',
      },
    ]
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Enter': () => {
        return this.editor
          .chain()
          .insertContentAt(this.editor.state.selection.head, { type: this.type.name })
          .focus()
          .run()
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },

  addCommands() {
    return {
      insertQuestionBlock:
        () =>
        ({ commands }) => {
          return commands.insertContent([
            {
              type: 'reactComponent',
              attrs: {
                questionId: '1242',
              },
              content: [],
            },
          ])
        },
    }
  },

  addAttributes() {
    return {
      questionId: {
        default: 1234,
      },
    }
  },
})

export default QuestionBlock
