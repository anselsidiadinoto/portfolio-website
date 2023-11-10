import React from 'react'

type propTypes = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  critic: string;
  critic_email: string;
}


const ProjectHeader = ({ date, title, subtitle, description, critic, critic_email}: propTypes ) => {
  return (
    <div className="w_col_main flex flex-col" >
      <div className="font_primary text-[14px] text-gray-300">{date}</div>
      <div className="font_secondary text-[40px]">{title}</div>
      <div className="font_primary text-[20px] mb-3 mt-[-8px]">{subtitle}</div>
      <div className="font_primary text-[12px] mb-4">{description}</div>
      <div className=" border-b-[3px] border-gray-600 pb-4 flex gap-1 font_primary text-gray-300 text-[14px]">
        Studio critic: <span className="text-black">{critic}</span> {critic_email}
      </div>
  </div>
  )
}

export default ProjectHeader



