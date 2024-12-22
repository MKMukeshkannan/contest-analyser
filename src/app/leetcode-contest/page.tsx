"use client";

import { csvToArr } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";

import DepartmentSheet from "@/components/DepartmentSheet";
import Link from "next/link";
import { ContestColumn, TContest } from "./ContestColumn";
import { DataTable } from "@/components/DataTable";


const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), Rank: z.string(), 'ProblemsSolved\r': z.string(), Year: z.string() }));
type TData = z.infer<typeof DataValidator>

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([]);
  const [err, setErr] = useState<string>("SELECT A CSV")

  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      try {
        console.log(e.target?.result as string)
      const csvArray = DataValidator.parse(csvToArr(e.target?.result as string, ","));
      setData(csvArray);
      } catch {
        setErr("not a leetcode CSV")
      };
    };
    if (file) fileReader.readAsText(file);
  };

  const IIIrdYear  = get_aggregates(data, "III");
  const IIrdYear  = get_aggregates(data, "II");

  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex font-bold p-10 flex-col">
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
        <h1 className="text-4xl pt-10">IIIrd YEARS</h1>
        <DataTable columns={ContestColumn} data={IIIrdYear} />

        <h1 className="text-4xl pt-10">IIrd YEARS</h1>
        <DataTable columns={ContestColumn} data={IIrdYear} />
      </> }
    </main>
  );
}

function get_aggregates(data: TData, year: string) {
  const all_department: TContest[] = [];

  const departmentGroups: { [key: string]: { Name: string, ProblemsSolved: number, Rank: number}[] } = {};
  for (const item of data) {
    if (item.Year !== `"${year}"`) continue;
    const { Department, Rank, "ProblemsSolved\r": ProblemsSolved } = item;
    const rank = parseInt(Rank, 10);
    const problems_solved = parseInt(ProblemsSolved, 10);

    if (!departmentGroups[Department]) departmentGroups[Department] = [];

    departmentGroups[Department].push({ Name: item.Name, ProblemsSolved: problems_solved, Rank: rank });
  }


  for (const [department, people] of Object.entries(departmentGroups)) {
    const department_contest_solved: TContest = {
      department,
      data: {
      'abs': [], '0': [], '1': [], '2': [], '3': [], '4': []
      }
    };

    for (const person of people) {
      if (person.Rank === 0) department_contest_solved.data['abs'].push({Name: person.Name, "Value": person.ProblemsSolved.toString() })
      else if (person.ProblemsSolved === 0) department_contest_solved.data['0'].push({Name: person.Name, "Value": person.Rank.toString() })
      else if (person.ProblemsSolved === 1) department_contest_solved.data['1'].push({Name: person.Name, "Value": person.Rank.toString() })
      else if (person.ProblemsSolved === 2) department_contest_solved.data['2'].push({Name: person.Name, "Value": person.Rank.toString() })
      else if (person.ProblemsSolved === 3) department_contest_solved.data['3'].push({Name: person.Name, "Value": person.Rank.toString() })
      else if (person.ProblemsSolved === 4) department_contest_solved.data['4'].push({Name: person.Name, "Value": person.Rank.toString() })
    }

    all_department.push(department_contest_solved);
  }

  return all_department;
};

