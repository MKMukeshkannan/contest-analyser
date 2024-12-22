"use client";

import { z } from "zod";
import { csvToArr } from "@/lib/utils";
import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { TopColumn, TTop } from "./TopColumn";
import { ContestColumn, TContest } from "./ContestColumn";
import { LeetTotalProblemColumn, TLeetTotalProblems } from "./TotalProblemColumn";

import Link from "next/link";
import DepartmentSheet from "@/components/DepartmentSheet";


const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), Total: z.string(), Hard: z.string(), "Top\r": z.string(), ContestRating: z.string() }));
type TData = z.infer<typeof DataValidator>

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([]);
  const [err, setErr] = useState<string>("SELECT A CSV")

  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      try {
      const csvArray = DataValidator.parse(csvToArr(e.target?.result as string, ","));
      setData(csvArray);
      } catch {
        setErr("not a leetcode CSV")
      };
    };
    if (file) fileReader.readAsText(file);
  };

  const {total_solved, hard_solved, top, contest_rating}  = get_aggregates(data);

  return (
    <main className="font-mono min-h-screen w-full bg-[#E7E2CB] flex font-bold p-10 flex-col">
      <DepartmentSheet />
      <Link href="/" className="text-4xl w-fit font-mono cursor-pointer">ANALYSIS</Link>
      <input
        type="file"
        accept=".csv"
        className="mt-10 w-fit"
        onChange={(e) => e.target.files && handleFileChosen(e.target.files[0])}
      />

      {data.length === 0 ? <h1 className="text-8xl pt-48">{err}</h1>: 
      <>
      <h1 className="text-4xl pt-10 pb-5">TOTAL PROBLEMS SOLVED</h1>
      <DataTable columns={LeetTotalProblemColumn} data={total_solved}/>

      <h1 className="text-4xl pt-10">TOTAL HARD PROBLEMS SOLVED</h1>
      <DataTable columns={LeetTotalProblemColumn} data={hard_solved} />

      <h1 className="text-4xl pt-10">CONTEST RATING</h1>
      <DataTable columns={ContestColumn} data={contest_rating}/>

      <h1 className="text-4xl pt-10">Top</h1>
      <DataTable columns={TopColumn} data={top}/>
      </>
    }
    </main>
  );
}

function get_aggregates(data: TData) {
  const hard_solved: TLeetTotalProblems[] = [];
  const total_solved: TLeetTotalProblems[] = [];
  const contest_rating: TContest[] = []
  const top: TTop[] = [];


  const departmentGroups: { [key: string]: { Name: string, Total: number, Hard: number, Top: number, ContestRating: number }[] } = {};
  for (const item of data) {
    const { Department, Total, Hard, ContestRating, 'Top\r': Top } = item;
    const total = parseInt(Total, 10);
    const hard = parseInt(Hard, 10);
    const contest_rating = parseInt(ContestRating, 10);
    const top = parseInt(Top, 10);

    if (!departmentGroups[Department]) {
      departmentGroups[Department] = [];
    }

    departmentGroups[Department].push({ Name: item.Name, Total: total, Hard: hard, ContestRating: contest_rating, Top: top });
  }


  for (const [department, people] of Object.entries(departmentGroups)) {
    const department_hard: TLeetTotalProblems = {
      department,
      data: {
      '0-100': [], '101-200': [], '201-300': [], 
      '301-400': [], '401-500': [], '501-600': [], '601-700': [], 
      '701-800': [], '801-900': [], '901-1000': [], '1001+': [] }
    };
    const department_total: TLeetTotalProblems = {
      department,
      data: {
      '0-100': [], '101-200': [], '201-300': [], '301-400': [], 
      '401-500': [], '501-600': [], '601-700': [], '701-800': [], 
      '801-900': [], '901-1000': [], '1001+': [] }
    };
    const department_top: TTop = { 
      department,
      data: {
      '0-10': [], '10-20': [], '20-30': [], '30-40': [],
      '40-50': [], '50-60': [], '60-70': [], '70-80': [],
      '80-90': [], '90-100': [], '100': [] }
    };
    const department_contest_rating: TContest = {
      department,
      data: {
      '0-1000': [], '1000-1500': [], '1500-1600': [], '1600-1700': [],
      '1700-1800': [], '1800-1850': [], '1850-2000': [],
      '2000+': []}
    };

    for (const person of people) {
      if (person.Total <= 100) department_total.data['0-100'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 200) department_total.data['101-200'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 300) department_total.data['201-300'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 400) department_total.data['301-400'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 500) department_total.data['401-500'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 600) department_total.data['501-600'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 700) department_total.data['601-700'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 800) department_total.data['701-800'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 900) department_total.data['801-900'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else if (person.Total <= 1000) department_total.data['901-1000'].push({ "Name": person.Name, "Value": person.Total.toString() });
      else department_total.data['1001+'].push({ "Name": person.Name, "Value": person.Total.toString() });

      if (person.Hard <= 100) department_hard.data['0-100'].push({ Name: person.Name, "Value": person.Hard.toString() })
      else if (person.Hard <= 200) department_hard.data['101-200'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 300) department_hard.data['201-300'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 400) department_hard.data['301-400'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 500) department_hard.data['401-500'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 600) department_hard.data['501-600'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 700) department_hard.data['601-700'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 800) department_hard.data['701-800'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 900) department_hard.data['801-900'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else if (person.Hard <= 1000) department_hard.data['901-1000'].push({ Name: person.Name, "Value": person.Hard.toString() });
      else department_hard.data['1001+'].push({ Name: person.Name, "Value": person.Hard.toString() });

      if (person.ContestRating <= 1000) department_contest_rating.data['0-1000'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 1500) department_contest_rating.data['1000-1500'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 1600) department_contest_rating.data['1500-1600'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 1700) department_contest_rating.data['1600-1700'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 1800) department_contest_rating.data['1700-1800'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 1850) department_contest_rating.data['1800-1850'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else if (person.ContestRating <= 2000) department_contest_rating.data['1850-2000'].push({Name: person.Name, "Value": person.ContestRating.toString() })
      else department_contest_rating.data['2000+'].push({Name: person.Name, "Value": person.ContestRating.toString() })

      if (person.Top <= 10) department_top.data['0-10'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 20) department_top.data['10-20'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 30) department_top.data['20-30'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 40) department_top.data['30-40'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 50) department_top.data['40-50'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 60) department_top.data['50-60'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 70) department_top.data['60-70'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 80) department_top.data['70-80'].push({Name: person.Name, "Value": person.Top.toString() })
      else if (person.Top <= 90) department_top.data['80-90'].push({Name: person.Name, "Value": person.Top.toString() })
      else department_top.data['100'].push({Name: person.Name, "Value": person.Top.toString() })

    }

    total_solved.push(department_total);
    hard_solved.push(department_hard);
    contest_rating.push(department_contest_rating);
    top.push(department_top);
  }

  return { total_solved, hard_solved, contest_rating, top };
};


