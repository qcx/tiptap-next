'use client'

import 'iframe-resizer/js/iframeResizer.contentWindow'

export const runtime = 'edge'

import { BlockEditor } from '@/components/BlockEditor'

export default function Document() {
  return (
    <>
      <BlockEditor />
    </>
  )
}
