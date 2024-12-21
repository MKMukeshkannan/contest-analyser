"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex font-bold p-10 flex-col">
      <h1 className="text-4xl font-mono">ANALYSIS</h1>

      <div className="flex flex-col pt-10 w-fit" >
        <Link href="/leetcode">LEETCODE</Link>
        <Link href="/codechef">CODECHEF</Link>
        <Link href="/codeforces">CODEFORCES</Link>
        <Link href="/leetcode-contest">LEETCODE CONTEST</Link>
      </div>
    </main>
  );
}

