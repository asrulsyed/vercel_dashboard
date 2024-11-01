import Link from "next/link"
import { FaGithub, FaXTwitter } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { LuMoonStar } from "react-icons/lu"
import { RiSaveFill, RiSunLine } from "react-icons/ri"
import { SiVercel } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="px-6 py-6 pt-7">
      <div className="flex items-center justify-center">
        <div className="max-w-[1080px] w-full">
          <nav className="h-[34px]">
            <Link href="">
              <SiVercel className="w-[25px] h-auto hidden sm:block mr-3" color="white" />
            </Link>
            <span>&copy;2024</span>
            <button>
              <GoDotFill />
              All systems normal
            </button>
            <button>
              Command Menu
              <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center">⌘</span>
              <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center" >K</span>
            </button>
            <div>
              <RiSaveFill />
              <RiSunLine />
              <LuMoonStar />
            </div>
          </nav>
          <div>
            <FaGithub />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer