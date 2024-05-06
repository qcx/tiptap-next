import { useEffect } from 'react'
import type { Editor } from '@tiptap/react'

export const MessageHandler = ({ editor }: { editor: Editor }) => {
  // Define the message handler function inside the useEffect to capture the latest state
  useEffect(() => {
    const messageHandler = event => {
      if (event) {
        const messageReceived = event.data

        const { action, data } = messageReceived

        if (action === 'askContent') {
          window.parent.postMessage(editor.getJSON(), '*')
        }

        if (action === 'setValue') {
          editor.commands.setContent(data)
        }
      }
    }

    // Add the event listener when the component mounts
    window.addEventListener('message', messageHandler)

    // Return a function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', messageHandler)
    }
  }) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <div></div>
}
