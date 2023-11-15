import React from 'react'

type propTypes = {
  text: string;
  className?: string;
}

const ProjectParagraph = ({text, className}: propTypes) => {
  return (
    <div className="flex justify-end">
      <div className={`font_secondary font-thin text-[17px] w_col_main mb-3 ${className}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ProjectParagraph