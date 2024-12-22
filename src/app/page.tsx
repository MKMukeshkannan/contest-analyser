"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex font-bold p-10 flex-col select-none">
      <h1 onContextMenu={() => console.log("lkjd")} className="text-4xl w-fit font-mono cursor-pointer">ANALYSIS</h1>

      <div className="flex flex-col text-9xl pt-16 w-fit" >
        <Link className="py-4 hover:bg-black hover:text-white" href="/leetcode">LEETCODE</Link>
        <Link className="py-4 hover:bg-black hover:text-white" href="/codechef">CODECHEF</Link>
        <Link className="py-4 hover:bg-black hover:text-white" href="/leetcode-contest">LEETCODE CONTEST</Link>
      </div>
    </main>
  );
}

