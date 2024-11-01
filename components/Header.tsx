'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { SiVercel } from "react-icons/si";

const Header = () => {
  const [hobby, setHobby] = useState<boolean>(false);
  const hobbyRef = useRef<HTMLDivElement>(null);
  const [projectFind, setProjectFind] = useState<boolean>(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hobbyRef.current && !hobbyRef.current.contains(event.target as Node)) {
        console.log("aaa");
        setHobby(false);
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
              className={clsx('absolute left-0 top-10 translate-y-2 bg-[#000000] text-[#ededed] rounded-2xl border border-[#ffffff24] text-sm flex',
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
            <button className="border hover:bg-[#1f1f1f] border-[#ffffff24] rounded-full w-8 h-8 flex items-center justify-center">
              <IoNotificationsOutline className="w-5 h-auto text-[#a1a1a1] hover:text-[#ededed]" />
            </button>
            <button className="rounded-full border border-[#ffffff24] hover:bg-[#1f1f1f] text-[#a1a1a1] hover:text-[#ededed] w-8 h-8 flex justify-center items-center ">
              <Image
                src="/avatar1.svg"
                alt="User Avatar"
                width={32}
                height={32}
                className="hidden rounded-full lg:block"
              />
              <HiMenuAlt4 className="block w-5 h-auto lg:hidden" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
