'use client'

import { useState } from "react";
interface TData { [key: string]: string; }

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData[]>()


  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const csvArray = csvToArr(e.target?.result as string, ',');
      setData(csvArray);
    };
    fileReader.readAsText(file);
  };

  const csvToArr = (stringVal: string, splitter: string) => {
    const [keys, ...rest] = stringVal
      .trim()
      .split("\n")
      .map((item) => item.split(splitter));

    const formedArr = rest.map((item) => {
      const object: { [key: string]: string } = {};
      keys.forEach((key, index) => {
        object[key] = item[index];
      });
      return object;
    });
    return formedArr;
  };

  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex items-center justify-center font-bold">
      <input
        type='file'
        accept='.csv'
        onChange={e => e.target.files && handleFileChosen(e.target.files[0])}
      />
      {JSON.stringify(data)}
    </main>
  );
}
