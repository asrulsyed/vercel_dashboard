'use client'

import clsx from "clsx"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaGithub, FaXTwitter } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { LuMoonStar } from "react-icons/lu"
import { RiSaveFill, RiSunLine } from "react-icons/ri"
import { SiVercel } from "react-icons/si"

const Footer = () => {
  const [legal, setLegal] = useState<boolean>(false);
  const legalRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if ()
  // })

  return (
    <footer className="px-6 py-6 pt-7 bg-[#0a0a0a] border-t border-[#ffffff24] text-[#a1a1a1] text-sm">
      <div className="flex items-center justify-center">
        <div className="max-w-[1080px] w-full">
          <nav className="h-[34px] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/">
                <SiVercel className="w-[25px] h-auto hidden sm:block mr-3" color="white" />
              </Link>
              <span>&copy;&nbsp;2024</span>
              <button className="flex items-center ml-2 text-blue-700 cursor-pointer hover:bg-[#1f1f1f] p-2 rounded-md">
                <GoDotFill />
                <span>All systems normal</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center hover:bg-[#1f1f1f] p-2 rounded-md px-4">
                <span className="pr-2">Command Menu</span>
                <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center">⌘</span>
                <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center" >K</span>
              </button>
              <div className="flex items-center justify-around w-24 h-8 gap-2 border border-[#ffffff24] rounded-full relative">
                <button className="w-8 h-8 rounded-full border border-[#ffffff24] flex items-center justify-center absolute left-0">
                  <RiSaveFill className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-[#ffffff24] flex items-center justify-center absolute">
                  <RiSunLine className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-[#ffffff24] flex items-center justify-center absolute right-0">
                  <LuMoonStar className="w-4 h-4" />
                </button>
              </div>
            </div>
          </nav>
          <ul className="flex items-center justify-between h-8 mt-6">
            <li className="pl-1.5 flex items-center">
              <FaGithub className="w-4 h-4 mr-5" />
              <FaXTwitter className="w-4 h-4 mr-5" />
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Home</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Documentation</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Guides</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Help</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Contact Sales</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Blog</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Changelog</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Pricing</Link>
            </li>
            <li className="hover:text-[#ededed] cursor-pointer">
              <Link href="">Enterprise</Link>
            </li>
            <li className="relative">
              <button
                className="hover:text-[#ededed] cursor-pointer flex items-center gap-2"
                onClick={() => {
                  setLegal(!legal);
                }}>
                <span>Legal</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                ref={legalRef}
                className={clsx('absolute -top-4 -translate-y-full border border-[#ffffff24] rounded-md w-[230px] right-0 bg-[#0a0a0a] p-2 flex flex-col items-center', {
                  'hidden': legal === false,
                  'flex': legal === true,
                })}
              >
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Privacy Policy</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Cookie Policy</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Terms of Service</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Trademark Policy</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Inactivity Policy</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">DMCA Policy</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Support Terms</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">DPA</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">DRA</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">SLA</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Sub-processors</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Event Terms and Conditions</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Event Code of Conduct</Link>
                <Link href="" className="flex items-center justify-start h-10 px-2 hover:bg-[#1f1f1f] w-full rounded-md">Job Applicant Privacy Notice</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer