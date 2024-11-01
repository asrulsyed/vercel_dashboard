'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuInbox, LuLogOut, LuMoonStar, LuTriangle } from "react-icons/lu";
import { MdSearch } from "react-icons/md";
import { RiSaveFill, RiSunLine } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";
import { SiVercel } from "react-icons/si";

const Header = () => {
  const [hobby, setHobby] = useState<boolean>(false);
  const hobbyRef = useRef<HTMLDivElement>(null);
  const [notification, setNotification] = useState<boolean>(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [setting, setSetting] = useState<boolean>(false);
  const settingRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hobbyRef.current && !hobbyRef.current.contains(event.target as Node)) {
        setHobby(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingRef.current && !settingRef.current.contains(event.target as Node)) {
        setSetting(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sm:px-6 px-4 flex items-center h-16 bg-[#0a0a0a]">
      <Link href="">
        <SiVercel className="w-[25px] h-auto hidden sm:block mr-3" color="white" />
      </Link>
      <nav className="flex items-center justify-between grow">
        <div className="flex items-center gap-3">
          <RxSlash color="#333" className="w-auto h-[22px] sm:block hidden" />
          <div className="flex items-center text-[#ededed] text-sm font-semibold gap-3 cursor-pointer">
            <Image
              src="/avatar.svg"
              width={22}
              height={22}
              className="rounded-full w-[22px] h-[22px]"
              alt="User avatar"
            />
            <span>EDITH&apos;s projects</span>
            <div className="bg-[#1f1f1f] px-[6px] h-5 rounded-full text-[11px] lg:block hidden">
              Hobby
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setHobby(!hobby)}

              className={clsx('flex justify-center items-center hover:bg-[#1f1f1f] h-10 w-8 rounded-lg',
                {
                  'bg-[#1f1f1f]': hobby
                }
              )}
            >
              <HiMiniChevronUpDown color="#a1a1a1" className="w-[20px] h-auto" />
            </button>
            <div
              ref={hobbyRef}
              className={clsx('absolute left-0 top-10 translate-y-2 -translate-x-4 bg-[#000000] text-[#ededed] rounded-2xl border border-[#ffffff24] text-sm flex',
                {
                  'hidden': !hobby,

                })}
            >
              <div className="w-64 hover:bg-[#0a0a0a]">
                <div className="flex items-center justify-start h-12 px-4">
                  <MdSearch className="text-[#a1a1a1] w-[20px] h-auto" />
                  <input type="text" placeholder="Find Team..." className="grow ml-2 px-0.5 py-[1px] bg-transparent text-[#a1a1a1] placeholder:text-[#a1a1a1] text-sm outline-none" />
                </div>
                <div className="border-t border-b border-[#ffffff24] p-2 flex items-center justify-center">
                  <ul className="flex flex-col w-full gap-2">
                    <li className="h-10 px-2 hover:bg-[#1f1f1f] rounded-md w-full flex items-center">
                      <Link href="" className="flex items-center justify-start gap-2 ">
                        <Image
                          src="/avatar.svg"
                          width={22}
                          height={22}
                          className="rounded-full w-[20px] h-[20px]"
                          alt="User avatar"
                        />
                        <span className="text-[#ededed]">My Account</span>
                      </Link>
                    </li>
                    <li>
                      <p className="h-10 text-[13px] text-[#a1a1a1] px-2 flex items-center">Teams</p>
                      <ul>
                        <li className="h-10 px-2 bg-[#ffffff21] rounded-md w-full flex items-center">
                          <Link href="" className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start gap-2 ">
                              <Image
                                src="/avatar1.svg"
                                width={22}
                                height={22}
                                className="rounded-full w-[20px] h-[20px]"
                                alt="User avatar"
                              />
                              <span className="text-[#ededed] text-nowrap text-ellipsis overflow-hidden w-[160px]">EDITH's projects</span>
                            </div>
                            <FaCheck className="text-[#a1a1a1]" />
                          </Link>
                        </li>
                        <li className="h-10 px-2 hover:bg-[#1f1f1f] rounded-md w-full flex items-center">
                          <Link href="" className="flex items-center justify-start gap-2 ">
                            <FiPlusCircle className="text-[#52a8ff] w-5 h-4" />
                            <span className="text-[#ededed]">Create Team</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="p-2">
                  <div className="h-10 px-2 hover:bg-[#1f1f1f] rounded-md w-full flex items-center">
                    <Link href="" className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-start gap-2 ">
                        <Image
                          src="/avatar2.svg"
                          width={22}
                          height={22}
                          className="rounded-full w-[20px] h-[20px]"
                          alt="User avatar"
                        />
                        <span className="text-[#ededed]">Suggested Teams</span>
                      </div>
                      <GoArrowRight className="text-[#a1a1a1]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-64 hover:bg-[#0a0a0a] border-l border-[#ffffff24]">
                <div className="flex items-center justify-start h-12 px-4">
                  <MdSearch className="text-[#a1a1a1] w-[20px] h-auto" />
                  <input type="text" placeholder="Find Project..." className="grow ml-2 px-0.5 py-[1px] bg-transparent text-[#a1a1a1] placeholder:text-[#a1a1a1] text-sm outline-none" />
                </div>
                <div className="border-t  border-[#ffffff24] p-2 flex items-center justify-center">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ul className="items-center text-[#a1a1a1] text-sm leading-5 gap-4 lg:flex hidden">
            <li className="rounded-md hover:text-[#ededed] hover:bg-[#1f1f1f] px-3 h-8 border border-[#ffffff24] flex items-center">Feedback</li>
            <li className="hover:text-[#ededed]">Changelog</li>
            <li className="hover:text-[#ededed]">Help</li>
            <li className="hover:text-[#ededed]">Docs</li>
          </ul>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setNotification(!notification)}

                className={clsx('border hover:bg-[#1f1f1f] border-[#ffffff24] rounded-full w-8 h-8 flex items-center justify-center',
                  {
                    'bg-[#1f1f1f]': notification
                  }
                )}
              >
                <IoNotificationsOutline className="w-5 h-auto text-[#a1a1a1] hover:text-[#ededed]" />
              </button>
              <div
                ref={notificationRef}
                className={clsx('absolute right-0 top-10 z-50 translate-y-2 bg-[#000000] text-[#ededed] rounded-2xl border border-[#ffffff24] text-sm flex',
                  {
                    'hidden': !notification,

                  })}
              >
                <div className="w-[400px] h-[500px] hover:bg-[#0a0a0a] rounded-2xl flex flex-col">
                  <div className="flex items-center justify-start h-12 gap-6 px-4 text-[#a1a1a1]">
                    <Link href="" className={clsx("border-b-2 border-[#ededed] h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Inbox</span>
                    </Link>
                    <Link href="" className={clsx("border-b-2 hover:border-[#ededed] border-transparent h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Archive</span>
                    </Link>
                    <Link href="" className={clsx("border-b-2 hover:border-[#ededed] border-transparent h-[48px] flex items-center justify-center", {
                    })}>
                      <span className="px-1 leading-[14px] py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#ededed]">Comments</span>
                    </Link>
                  </div>
                  <div className="border-t  border-[#ffffff24] p-2 flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center">
                      <LuInbox className="text-[#a1a1a1] w-[20px] h-auto" />
                    </div>
                    <span className="text-[#a1a1a1] mt-4">No new notifications</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setSetting(!setting)}

                className={clsx('rounded-full border border-[#ffffff24] hover:bg-[#1f1f1f] text-[#a1a1a1] hover:text-[#ededed] w-8 h-8 flex justify-center items-center ',
                  {
                    'bg-[#1f1f1f]': setting
                  }
                )}
              >
                <Image
                  src="/avatar1.svg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="hidden rounded-full lg:block"
                />
                <HiMenuAlt4 className="block w-5 h-auto lg:hidden" />
              </button>
              <div
                ref={settingRef}
                className={clsx('absolute right-0 top-10 translate-y-2 z-50 bg-[#0a0a0a] text-[#ededed] rounded-2xl border border-[#ffffff24] text-sm flex',
                  {
                    'hidden': !setting,

                  })}
              >
                <div className="w-[256px] rounded-2xl p-2 text-[#a1a1a1]">
                  <div className="pt-4">
                  </div>
                  <Link href="" className="h-10 hover:bg-[#1f1f1f] w-full flex justify-start items-center rounded-md">
                    <span className="px-2 hover:text-[#ededed]">Dashboard</span>
                  </Link>
                  <Link href="" className="h-10 hover:bg-[#1f1f1f] w-full flex justify-start items-center rounded-md">
                    <span className="px-2 hover:text-[#ededed]">Account Settings</span>
                  </Link>
                  <Link href="" className="px-2 h-10 hover:bg-[#1f1f1f] hover:text-[#ededed] w-full flex justify-between items-center rounded-md">
                    <span className="">Create Team</span>
                    <FiPlusCircle className="w-5 h-5" />
                  </Link>
                  <div className="border-b border-[#ffffff24] my-2 -mx-2"></div>
                  <Link href="" className="px-2 h-10 hover:bg-[#1f1f1f] hover:text-[#ededed] w-full flex justify-between items-center rounded-md">
                    <span className="">Command Menu</span>
                    <div className="flex gap-1">
                      <p className="text-xs border border-[#ffffff24] p-1 rounded-md">Ctrl</p>
                      <p className="text-xs border border-[#ffffff24] p-1 rounded-md">K</p>
                    </div>
                  </Link>
                  <Link href="" className="px-2 h-10 hover:bg-[#1f1f1f] hover:text-[#ededed] w-full flex justify-between items-center rounded-md">
                    <span className="">Theme</span>
                    <div className="flex items-center justify-around w-24 h-8 gap-2 border border-[#ffffff24] rounded-full relative">
                      <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute left-0", { 'border-[#ffffff24]': theme === 0, 'border-transparent': theme !== 0 })} onClick={() => setTheme(0)}>
                        <RiSaveFill className="w-4 h-4" />
                      </button>
                      <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute ", { 'border-[#ffffff24]': theme === 1, 'border-transparent': theme !== 1 })} onClick={() => setTheme(1)}>
                        <RiSunLine className="w-4 h-4" />
                      </button>
                      <button className={clsx("w-8 h-8 rounded-full border flex items-center justify-center absolute right-0", { 'border-[#ffffff24]': theme === 2, 'border-transparent': theme !== 2 })} onClick={() => setTheme(2)}>
                        <LuMoonStar className="w-4 h-4" />
                      </button>
                    </div>
                  </Link>
                  <div className="border-b border-[#ffffff24] my-2 -mx-2"></div>
                  <Link href="" className="px-2 h-10 hover:bg-[#1f1f1f] hover:text-[#ededed] w-full flex justify-between items-center rounded-md">
                    <span className="">Home Page</span>
                    <LuTriangle className="w-5 h-5" />
                  </Link>
                  <Link href="" className="px-2 h-10 hover:bg-[#1f1f1f] hover:text-[#ededed] w-full flex justify-between items-center rounded-md">
                    <span className="">Log Out</span>
                    <LuLogOut className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
