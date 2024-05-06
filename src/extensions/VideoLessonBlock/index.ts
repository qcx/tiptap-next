import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import VideoLesson from './VideoLesson'

declare module '@tiptap/core' {
  // eslint-disable-next-line no-unused-vars
  interface Commands<ReturnType> {
    videoLesson: {
      insertVideoLessonBlock: () => ReturnType
    }
  }
}

export const VideoLessonBlock = Node.create({
  name: 'videoLesson',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'video-custom-component',
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
    return ['video-custom-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(VideoLesson)
  },

  addCommands() {
    return {
      insertVideoLessonBlock:
        () =>
        ({ commands }) => {
          return commands.insertContent([
            {
              type: 'videoLesson',
              attrs: {
                videoId: '1242',
              },
              content: [],
            },
          ])
        },
    }
  },

  addAttributes() {
    return {
      videoId: {
        default: 1234,
      },
    }
  },
})

export default VideoLessonBlock
