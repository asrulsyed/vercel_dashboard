import Image from "next/image"
import Link from "next/link"
import { BiGitMerge } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6"
import { IoTimeSharp } from "react-icons/io5"

const Card = ({item}: any) => {
  return (
    <div className="border border-[#ffffff24] rounded-md bg-[#0a0a0a] py-5 pl-6 pr-4 flex flex-col gap-3 text-[#a1a1a1]">
      <div className="flex items-center h-10 gap-4">
        <div className="flex items-center w-full gap-4">
          <Image
            src="/react.png"
            alt="Card"
            width={32}
            height={32}
            className="w-[32px] h-[32px] bg-white rounded-full"
          />
          <div>
            <Link href=""><p className="text-[#ededed] hover:underline overflow-hidden text-nowrap w-[180px] text-ellipsis">{item.project}</p></Link>
            <Link href="" className="flex items-center gap-2">
              <p className="overflow-hidden hover:underline peer text-ellipsis text-nowrap w-[180px]">{item.deploy}</p>
              <FaUpRightFromSquare className="text-transparent w-3 h-auto peer-[:hover]:text-[#a1a1a1]" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="border-[3px] border-[#ffffff24] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
            <Image
              src="/linechart.svg"
              alt="LineCloud"
              width={24}
              height={18}
              className="w-[24px] h-[20px]"
            />
          </div>
          <button className="hover:bg-[#1f1f1f] rounded-md w-6 h-6 flex justify-center items-center hover:text-[#ededed]">
            <BsThreeDots className="w-6 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center h-10 gap-2 px-4 justify-start text-[#ededed] bg-[#1f1f1f] rounded-full">
          <FaGithub color="#ededed" className="w-5 h-5" />
          <span>{item.repository}</span>
        </div>
      </div>
      <div className="h-10">
        <p className="leading-5 hover:underline">{item.commit}</p>
        <div className="flex items-center gap-1 leading-5">
          <span>{item.days}d ago on</span>
          <BiGitMerge color="#ededed" className="w-4 h-4" />
          <span className="text-[#ededed] hover:underline">master</span>
        </div>
      </div>
    </div>
  )
}

export default Card