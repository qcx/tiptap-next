import { useEffect } from 'react'

function MessageHandlerComponent() {
  // Define the message handler function inside the useEffect to capture the latest state
  useEffect(() => {
    const messageHandler = event => {
      if (event) {
        const messageReceived = event.data
        console.log(messageReceived)
        alert(messageReceived);
        // Add additional code to manipulate the received message here
      }
    }

    // Add the event listener when the component mounts
    window.addEventListener('message', messageHandler)

    // Return a function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', messageHandler)
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <div>Listening for messages...</div>
}

export default MessageHandlerComponent
