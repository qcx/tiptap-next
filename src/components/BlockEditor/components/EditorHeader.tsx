import { Icon } from '@/components/ui/Icon'
import { EditorInfo } from './EditorInfo'
import { Toolbar } from '@/components/ui/Toolbar'

export type EditorHeaderProps = {
  characters: number
  words: number
}

export const EditorHeader = ({ characters, words }: EditorHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <EditorInfo characters={characters} words={words} />
    </div>
  )
}
