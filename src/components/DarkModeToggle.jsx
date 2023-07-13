"use client"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function DarkModeToggle() {

const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className='flex w-[42px] h-[24px] rounded-[30px] border-2 border-[#53c28b70] items-center justify-between p-[2px] relative cursor-pointer'
    onClick={toggle}
    >
        <div className='text-[11px]'>🌜</div>
        <div className='text-[12px]'>🌞</div>
        <div className='w-[16px] h-[16px] absolute bg-green1 rounded-full'
        style={mode ==="dark" ? {left:"2px"} : {right:"2px"}}
        />
    </div>
  )
}

export default DarkModeToggle