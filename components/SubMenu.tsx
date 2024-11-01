'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SubMenu = () => {
  const pathname = usePathname();

  return (
    <div className="px-2 sm:px-4 h-[46px] flex items-center text-[#a1a1a1] bg-[#0a0a0a] border-b border-[#ffffff24]" >
      <Link href="/" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/",
        'border-transparent': pathname !== "/",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Overview</span>
      </Link>
      <Link href="/integrations" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/integrations",
        'border-transparent': pathname !== "/integrations",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Integrations</span>
      </Link>
      <Link href="/activity" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/activity",
        'border-transparent': pathname !== "/activity",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Activity</span>
      </Link>
      <Link href="/domains" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/domains",
        'border-transparent': pathname !== "/domains",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Domains</span>
      </Link>
      <Link href="/usage" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/usage",
        'border-transparent': pathname !== "/usage",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Usage</span>
      </Link>
      <Link href="/monitoring" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/monitoring",
        'border-transparent': pathname !== "/monitoring",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Monitoring</span>
      </Link>
      <Link href="/storage" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/storage",
        'border-transparent': pathname !== "/storage",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Storage</span>
      </Link>
      <Link href="/ai" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/ai",
        'border-transparent': pathname !== "/ai",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">AI</span>
      </Link>
      <Link href="/support" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/support",
        'border-transparent': pathname !== "/support",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Support</span>
      </Link>
      <Link href="/settings" className={clsx("border-b-2 hover:border-[#ededed] h-[46px] flex items-center justify-center", {
        'border-[#ededed]': pathname === "/settings",
        'border-transparent': pathname !== "/settings",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Settings</span>
      </Link>
    </div>
  )
}

export default SubMenu