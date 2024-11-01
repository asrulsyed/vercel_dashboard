import Link from "next/link"

const SubMenu = () => {
  return (
    <div className="px-2 sm:px-4 h-[46px] flex items-center text-[#a1a1a1] bg-[#0a0a0a] border-b border-[#ffffff24]" >
      <Link href="/" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Overview</span>
      </Link>
      <Link href="/integrations" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Integrations</span>
      </Link>
      <Link href="/activity" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Activity</span>
      </Link>
      <Link href="/domains" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Domains</span>
      </Link>
      <Link href="/usage" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Usage</span>
      </Link>
      <Link href="/monitoring" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Monitoring</span>
      </Link>
      <Link href="/storage" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Storage</span>
      </Link>
      <Link href="/ai" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">AI</span>
      </Link>
      <Link href="/support" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Support</span>
      </Link>
      <Link href="/settings" className="border-b-2 border-transparent hover:border-[#ededed] h-[46px] flex items-center justify-center">
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Settings</span>
      </Link>
    </div>
  )
}

export default SubMenu