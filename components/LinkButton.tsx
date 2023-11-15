import React from 'react'
import Link from '@/node_modules/next/link'

type propTypes = {
  href: string;
  text: string;
}

const LinkButton = ({ href, text, }: propTypes) => {
  return (
    <a 
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className= "font_primary text-gray-300 border border-gray-300 py-1 px-4 rounded-sm 
                hover:text-black hover:border-black hover:bg-gray-100"
      >
        {text}
      </a>
  )
}

export default LinkButton