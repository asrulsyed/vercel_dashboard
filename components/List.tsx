'use client'

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { BiGitMerge } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaGithub, FaPlus, FaRegStar, FaUpRightFromSquare } from "react-icons/fa6"
import { SlSettings } from "react-icons/sl"

const List = ({ item }: any) => {
  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [addition, setAddition] = useState<boolean>(false);
  const additionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (additionRef.current && !additionRef.current.contains(event.target as Node)) {
        setAddition(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  })

  return (
    <div className="flex flex-col gap-3 text-[#a1a1a1]">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 px-2">
          <FaGithub color="#ededed" className="w-5 h-5" />
          <span className="text-[#ededed] font-semibold">{item.repository}</span>
        </div>
        <div className="relative">
          <button
            className="hover:bg-[#1f1f1f] rounded-md w-6 h-6 flex justify-center items-center hover:text-[#ededed]"
            onClick={() => setMenu(!menu)}
          >
            <BsThreeDots className="w-6 h-4" />
          </button>
          <div
            ref={menuRef}
            className={clsx('absolute w-[315px] bg-[#0a0a0a] border z-50 border-[#1f1f1f] p-2 rounded-xl transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
              'invisible opacity-0': menu === false,
              'visible opacity-1': menu === true,
            })}
          >
            <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
              <FaPlus />
              <span>Import Directory</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
              <FaUpRightFromSquare />
              <span>View Git Repository</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
              <SlSettings />
              <span>Manage Shared Environment Variables</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border border-[#ffffff24] bg-[#0a0a0a] p-4 flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-4 grow ">
          <Image
            src="/react.png"
            alt="Card"
            width={32}
            height={32}
            className="w-[32px] h-[32px] bg-white rounded-full"
          />
          <div className="basis-[40%]">
            <Link href="">
              <p className="text-[#ededed] hover:underline overflow-hidden text-nowrap w-[180px] text-ellipsis">
                {item.project}
              </p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <p className="hover:underline peer">{item.deploy}</p>
              <FaUpRightFromSquare className="text-transparent w-3 h-auto peer-[:hover]:text-[#a1a1a1]" />
            </Link>
          </div>
          <div className="grow">
            <p className="leading-5 hover:underline">{item.commit}</p>
            <div className="flex items-center gap-1 leading-5">
              <span>{item.days}d ago on</span>
              <BiGitMerge color="#ededed" className="w-4 h-4" />
              <span className="text-[#ededed] hover:underline">master</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="border-[3px] border-[#ffffff24] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
            <Image
              src="/linechart.svg"
              alt="LineCloud"
              width={24}
              height={18}
              className="w-[24px] h-[20px]"
            />
          </div>
          <div className="relative">
            <button className="hover:bg-[#1f1f1f] rounded-md w-6 h-6 flex justify-center items-center hover:text-[#ededed]"
              onClick={() => setAddition(!addition)}>
              <BsThreeDots className="w-6 h-4" />
            </button>
            <div
              ref={additionRef}
              className={clsx('absolute w-[184px] bg-[#0a0a0a] border border-[#1f1f1f] p-2 rounded-xl z-50 transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
                'invisible opacity-0': addition === false,
                'visible opacity-1': addition === true,
              })}
            >
              <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
                <span>Add Favorite</span>
                <FaRegStar />
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
                <span>View Logs</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
                <span>Manage Domains</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
                <span>Transfer Project</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 hover:bg-[#1f1f1f] rounded-md">
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List