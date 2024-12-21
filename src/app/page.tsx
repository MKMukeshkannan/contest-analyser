"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex font-bold p-10 flex-col">
      <h1 className="text-4xl font-mono">ANALYSIS</h1>

      <div className="flex flex-col text-9xl pt-10 w-fit" >
        <Link className="py-2 hover:bg-black hover:text-white" href="/leetcode">LEETCODE</Link>
        <Link className="py-2 hover:bg-black hover:text-white" href="/codechef">CODECHEF</Link>
        <Link className="py-2 hover:bg-black hover:text-white" href="/codeforces">CODEFORCES</Link>
        <Link className="py-2 hover:bg-black hover:text-white" href="/leetcode-contest">LEETCODE CONTEST</Link>
      </div>
    </main>
  );
}

