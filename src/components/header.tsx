import { MAX_WIDTH, TITLE } from "@/const/util";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 w-full h-[50px] bg-slate-700 shadow-md z-30">
      <div className={`flex w-full h-full max-w-[${MAX_WIDTH}] items-center justify-end mx-auto`}>
        <Link href="/">
          <h2 className="text-xl pr-4 text-white">{TITLE}</h2>
        </Link>
      </div>
    </header>
  );
};
