import { Group } from './types'

export const GROUPS: Group[] = [
  {
    name: 'format',
    title: 'Formatação',
    commands: [
      {
        name: 'heading1',
        label: 'Título 1',
        iconName: 'Heading1',
        description: 'High priority section title',
        aliases: ['h1'],
        action: editor => {
          editor.chain().focus().setHeading({ level: 1 }).run()
        },
      },
      {
        name: 'heading2',
        label: 'Título 2',
        iconName: 'Heading2',
        description: 'Medium priority section title',
        aliases: ['h2'],
        action: editor => {
          editor.chain().focus().setHeading({ level: 2 }).run()
        },
      },
      {
        name: 'heading3',
        label: 'Título 3',
        iconName: 'Heading3',
        description: 'Low priority section title',
        aliases: ['h3'],
        action: editor => {
          editor.chain().focus().setHeading({ level: 3 }).run()
        },
      },
      {
        name: 'bulletList',
        label: 'Lista não ordenada',
        iconName: 'List',
        description: 'Unordered list of items',
        aliases: ['ul'],
        action: editor => {
          editor.chain().focus().toggleBulletList().run()
        },
      },
      {
        name: 'numberedList',
        label: 'Lista ordenada',
        iconName: 'ListOrdered',
        description: 'Ordered list of items',
        aliases: ['ol'],
        action: editor => {
          editor.chain().focus().toggleOrderedList().run()
        },
      },
      {
        name: 'blockquote',
        label: 'Citação',
        iconName: 'Quote',
        description: 'Element for quoting',
        action: editor => {
          editor.chain().focus().setBlockquote().run()
        },
      },
      {
        name: 'codeBlock',
        label: 'Bloco de código',
        iconName: 'SquareCode',
        description: 'Code block with syntax highlighting',
        shouldBeHidden: editor => editor.isActive('columns'),
        action: editor => {
          editor.chain().focus().setCodeBlock().run()
        },
      },
    ],
  },
  {
    name: 'insert',
    title: 'Inserir',
    commands: [
      {
        name: 'table',
        label: 'Tabela',
        iconName: 'Table',
        description: 'Insert a table',
        shouldBeHidden: editor => editor.isActive('columns'),
        action: editor => {
          editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false }).run()
        },
      },
      {
        name: 'image',
        label: 'Imagem',
        iconName: 'Image',
        description: 'Insert an image',
        aliases: ['img'],
        action: editor => {
          editor.chain().focus().setImageUpload().run()
        },
      },
      {
        name: 'columns',
        label: 'Divisão de colunas',
        iconName: 'Columns',
        description: 'Add two column content',
        aliases: ['cols'],
        shouldBeHidden: editor => editor.isActive('columns'),
        action: editor => {
          editor
            .chain()
            .focus()
            .setColumns()
            .focus(editor.state.selection.head - 1)
            .run()
        },
      },
      {
        name: 'horizontalRule',
        label: 'Linha horizontal',
        iconName: 'Minus',
        description: 'Insert a horizontal divider',
        aliases: ['hr'],
        action: editor => {
          editor.chain().focus().setHorizontalRule().run()
        },
      },
      {
        name: 'question',
        label: 'Question',
        iconName: 'Book',
        description: 'Insert a question block',
        action: editor => {
          editor.chain().focus().insertQuestionBlock().run()
        },
      },
      {
        name: 'video',
        label: 'Video',
        iconName: 'Book',
        description: 'Insert a video block',
        action: editor => {
          editor.chain().focus().insertVideoLessonBlock().run()
        },
      },
    ],
  },
  {
    name: 'qconcursos',
    title: 'Qconcursos',
    commands: [
      {
        name: 'question',
        label: 'Inserir questão',
        iconName: 'Book',
        description: 'Insert a question block',
        action: editor => {
          editor.chain().focus().insertQuestionBlock().run()
        },
      },
      {
        name: 'video',
        label: 'Inserir vídeo',
        iconName: 'Book',
        description: 'Insert a video block',
        action: editor => {
          editor.chain().focus().insertVideoLessonBlock().run()
        },
      },
    ],
  },
]

export default GROUPS
