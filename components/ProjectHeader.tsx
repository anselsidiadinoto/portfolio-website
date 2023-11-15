import React from 'react'

type propTypes = {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  critic?: string;
  critic_email?: string;
}


const ProjectHeader = ({ date, title, subtitle, description, critic, critic_email}: propTypes ) => {

  return (
    <div className="w_col_main flex flex-col border-b-[3px] border-gray-600 pb-0 " >
      <div className="font_primary text-[16px] text-gray-400">{date}</div>
      <div className="font_secondary text-[40px]">{title}</div>
      <div className="font_primary text-[20px] mb-3 mt-[-8px]">{subtitle}</div>

      {description ? (
        <div className="font_primary text-[15px] mb-3">{description}</div>
      ) : (
        <></>
      )}

      {critic ? (
        <div className=" flex gap-1 font_primary text-gray-400 text-[14px] mb-3">
            Course instructor: <span className="text-black">{critic}</span> {critic_email}
        </div>
      ) : (
        <></>
      )}
     
  </div>
  )
}

export default ProjectHeader



