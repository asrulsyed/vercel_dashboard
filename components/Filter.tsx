import { FaSearch } from "react-icons/fa"
import { FaAngleDown, FaListUl } from "react-icons/fa6"
import { PiSquaresFour } from "react-icons/pi"

const Filter = () => {
  return (
    <div className="flex gap-3">
      <div className="grow bg-[#0a0a0a] flex items-center h-10 justify-between rounded-md border border-[#ffffff24]  text-[#a1a1a1] pr-2.5">
        <div className="flex items-center justify-center w-10 h-10">
          <FaSearch />
        </div>
        <input type="text" className="w-full h-full bg-[#0a0a0a] outline-none" placeholder="Search Repositories and Projects..." />
        <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center">⌘</span>
        <span className="px-1 py-1 w-[26px] border border-[#ffffff24] ml-1 rounded-md text-xs flex items-center justify-center" >K</span>
      </div>
      <div className="flex items-center min-w-[180px] max-w-[180px] justify-between rounded-md border border-[#ffffff24] h-10 px-2.5  text-[#ededed] bg-[#0a0a0a]">
        <span className="font-semibold px-1.5">Sort by activity</span>
        <FaAngleDown className="w-5 h-4" />
      </div>
      <div className="flex items-center justify-between rounded-md border border-[#ffffff24] p-1 h-10 min-w-[88px] max-w-[88px] bg-[#0a0a0a]">
        <div className="w-full h-full flex justify-center items-center bg-[#1f1f1f] rounded-sm">
          <PiSquaresFour className="w-5 h-5 text-[#a1a1a1] hover:text-[#ededed] " />
        </div>
        <div className="flex items-center justify-center w-full h-full rounded-sm">
          <FaListUl className="w-4 h-4 text-[#a1a1a1] hover:text-[#ededed]" />
        </div>
      </div>
      <button className="flex px-2.5 h-10 items-center rounded-md bg-[#ededed] min-w-32 max-w-32 font-semibold text-nowrap">
        <span className="px-1.5 mr-1.5">Add New...</span>
        <FaAngleDown className="w-5 h-4" />
      </button>
    </div>
  )
}

export default Filter