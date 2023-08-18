import { navigationItems } from "@/const/navigationItems";
import { HEADER_HEIGHT } from "@/const/util";
import { useContext, useState } from "react";
import { NavigationContext } from '@/hooks/navigationContext';
import Link from "next/link";

export const Navigation = () => {
  const {openList, setOpen} = useContext(NavigationContext)

  const onClickNavBtn = (index: number) => {
    setOpen(openList.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <aside className="w-[30%]">
      <nav className={`fixed top-[50px] py-16 pl-12 pr-[999px] mr-[-999px] overflow-y-auto bg-gray-500 h-[calc(100vh-50px)] bg-b-700 leading-10`}>
        <div className="flex flex-col gap-4 w-full text-left overflow-y-auto">
          {navigationItems.map((nav, i) => (
            <div key={nav.chapter}>
              <div className={`flex items-center text-[16px] font-bold cursor-pointer ${openList[i] ? 'text-white' : 'text-gray-900'} hover:text-white hover:opacity-80`} onClick={() => onClickNavBtn(i)}>
                {nav.chapter}
              </div>
              {openList[i] &&
                nav.list.map((list) => (
                  <Link key={list.title} href={`/docs/${list.link}`} className="hover:opacity-60 no-underline">
                    <p
                      className={`${openList[i] ? 'text-white' : 'text-black'} pl-2 text-[14px]`}
                    >
                      {list.title}
                    </p>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </nav>
      teest
    </aside>
  );
};
