'use client'

import { ArrowLeft } from '@phosphor-icons/react'
import { useState } from 'react'

interface DuvidasProps {
  title: string
  faq: string
}

export default function FaqComponent({ title, faq }: DuvidasProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer w-full bg-[#2e2a41] transition-all duration-200 px-4 py-2 rounded-lg flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-white font-bold text-lg">{title}</h4>

        <ArrowLeft
          className={`transition-all duration-200 ${
            open && '-rotate-90'
          } text-white`}
          size={20}
        />
      </div>

      {open && <p className="text-gray-400 text-base">{faq}</p>}
    </div>
  )
}
