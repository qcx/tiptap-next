import MathematicsExtension from '@tiptap-pro/extension-mathematics';
import 'katex/dist/katex.min.css';

MathematicsExtension.configure({
  shouldRender: (state, pos, node) => {
    const $pos = state.doc.resolve(pos);
    return node.type.name === 'text' && $pos.parent.type.name !== 'codeBlock';
  },
});

export const Mathematics = MathematicsExtension;
