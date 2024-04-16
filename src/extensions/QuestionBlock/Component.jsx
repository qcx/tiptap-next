import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import './styles.css'
import React from 'react'

export default props => {
  let questionId = props.node.attrs.questionId

  const updateQuestion = e => {
    questionId = e.target.value

    props.updateAttributes({
      questionId,
    })
  }

  return (
    <NodeViewWrapper className="react-component-with-content">
      <span className="label" contentEditable={false}>
        Componente de Questão
      </span>
      <input type="number" className="content" onChange={updateQuestion} value={questionId} />
      {/* <NodeViewContent className="content" /> */}
    </NodeViewWrapper>
  )
}
