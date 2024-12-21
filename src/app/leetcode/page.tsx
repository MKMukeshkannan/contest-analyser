"use client";

import { csvToArr } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"


const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), Total: z.string(), Hard: z.string(), "Top\r": z.string(), ContestRating: z.string() }));
type TData = z.infer<typeof DataValidator>

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([]);
  const [err, setErr] = useState<String>("SELECT A CSV")

  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      try {
      const csvArray = DataValidator.parse(csvToArr(e.target?.result as string, ","));
      setData(csvArray);
      } catch (e) {
        setErr("not a leetcode CSV")
      };
    };
    if (file) fileReader.readAsText(file);
  };

  const {total_solved, hard_solved, top, contest_rating}  = get_aggregates(data);

  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex font-bold p-10 flex-col">
      <h1 onContextMenu={() => console.log("lkjd")} className="text-4xl w-fit font-mono cursor-pointer">ANALYSIS</h1>
      <input
        type="file"
        accept=".csv"
        className="pt-10"
        onChange={(e) => e.target.files && handleFileChosen(e.target.files[0])}
      />

      {data.length === 0 ? <h1 className="text-8xl pt-48">{err}</h1>: 
      <>
      <h1 className="text-4xl pt-10">TOTAL PROBLEMS SOLVED</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Department</TableHead>
            <TableHead>0-100</TableHead>
            <TableHead>101-200</TableHead>
            <TableHead>201-300</TableHead>
            <TableHead>301-400</TableHead>
            <TableHead>401-500</TableHead>
            <TableHead>501-600</TableHead>
            <TableHead>601-700</TableHead>
            <TableHead>701-800</TableHead>
            <TableHead>801-900</TableHead>
            <TableHead>901-1000</TableHead>
            <TableHead>1000+</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
        {total_solved.map((val,i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.department}</TableCell>
            <TableCell>{val["0-100"]}</TableCell>
            <TableCell>{val["101-200"]}</TableCell>
            <TableCell>{val["201-300"]}</TableCell>
            <TableCell>{val["301-400"]}</TableCell>
            <TableCell>{val["401-500"]}</TableCell>
            <TableCell>{val["501-600"]}</TableCell>
            <TableCell>{val["601-700"]}</TableCell>
            <TableCell>{val["701-800"]}</TableCell>
            <TableCell>{val["801-900"]}</TableCell>
            <TableCell>{val["901-1000"]}</TableCell>
            <TableCell>{val["1001+"]}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>

      <h1 className="text-4xl pt-10">TOTAL HARD PROBLEMS SOLVED</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Department</TableHead>
            <TableHead>0-100</TableHead>
            <TableHead>101-200</TableHead>
            <TableHead>201-300</TableHead>
            <TableHead>301-400</TableHead>
            <TableHead>401-500</TableHead>
            <TableHead>501-600</TableHead>
            <TableHead>601-700</TableHead>
            <TableHead>701-800</TableHead>
            <TableHead>801-900</TableHead>
            <TableHead>901-1000</TableHead>
            <TableHead>1000+</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
        {hard_solved.map((val,i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.department}</TableCell>
            <TableCell>{val["0-100"]}</TableCell>
            <TableCell>{val["101-200"]}</TableCell>
            <TableCell>{val["201-300"]}</TableCell>
            <TableCell>{val["301-400"]}</TableCell>
            <TableCell>{val["401-500"]}</TableCell>
            <TableCell>{val["501-600"]}</TableCell>
            <TableCell>{val["601-700"]}</TableCell>
            <TableCell>{val["701-800"]}</TableCell>
            <TableCell>{val["801-900"]}</TableCell>
            <TableCell>{val["901-1000"]}</TableCell>
            <TableCell>{val["1001+"]}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>

      <h1 className="text-4xl pt-10">CONTEST RATING</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Department</TableHead>
            <TableHead>0-1000</TableHead>
            <TableHead>1000-1500</TableHead>
            <TableHead>1500-1600</TableHead>
            <TableHead>1600-1700</TableHead>
            <TableHead>1700-1800</TableHead>
            <TableHead>1800-1850</TableHead>
            <TableHead>1850-2000</TableHead>
            <TableHead>2000+</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
        {contest_rating.map((val,i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.department}</TableCell>
            <TableCell>{val["0-1000"]}</TableCell>
            <TableCell>{val["1000-1500"]}</TableCell>
            <TableCell>{val["1500-1600"]}</TableCell>
            <TableCell>{val["1600-1700"]}</TableCell>
            <TableCell>{val["1700-1800"]}</TableCell>
            <TableCell>{val["1800-1850"]}</TableCell>
            <TableCell>{val["1850-2000"]}</TableCell>
            <TableCell>{val["2000+"]}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>

      <h1 className="text-4xl pt-10">Top</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Department</TableHead>
            <TableHead>0-10</TableHead>
            <TableHead>10-20</TableHead>
            <TableHead>20-30</TableHead>
            <TableHead>30-40</TableHead>
            <TableHead>40-50</TableHead>
            <TableHead>50-60</TableHead>
            <TableHead>60-70</TableHead>
            <TableHead>70-80</TableHead>
            <TableHead>80-90</TableHead>
            <TableHead>90-10</TableHead>
            <TableHead>100+</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
        {top.map((val,i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.department}</TableCell>
            <TableCell>{val["0-10"]}</TableCell>
            <TableCell>{val["10-20"]}</TableCell>
            <TableCell>{val["20-30"]}</TableCell>
            <TableCell>{val["30-40"]}</TableCell>
            <TableCell>{val["40-50"]}</TableCell>
            <TableCell>{val["50-60"]}</TableCell>
            <TableCell>{val["60-70"]}</TableCell>
            <TableCell>{val["70-80"]}</TableCell>
            <TableCell>{val["80-90"]}</TableCell>
            <TableCell>{val["90-100"]}</TableCell>
            <TableCell>{val["100"]}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
      </>
}
    </main>
  );
}

function get_aggregates(data: TData) {
  const hard_solved: { 
    department: string, 
    '0-100': number, 
    '101-200': number, 
    '201-300': number, 
    '301-400': number, 
    '401-500': number, 
    '501-600': number, 
    '601-700': number, 
    '701-800': number, 
    '801-900': number, 
    '901-1000': number,
    '1001+': number,
  }[] = [];
  const total_solved: { 
    department: string,
    '0-100': number, 
    '101-200': number, 
    '201-300': number, 
    '301-400': number, 
    '401-500': number, 
    '501-600': number, 
    '601-700': number, 
    '701-800': number, 
    '801-900': number, 
    '901-1000': number,
    '1001+': number,
  }[] = [];
  const contest_rating: {
    department: string,
    '0-1000': number,
    '1000-1500': number,
    '1500-1600': number,
    '1600-1700': number,
    '1700-1800': number,
    '1800-1850': number,
    '1850-2000': number,
    '2000+': number,
  }[] = []
  const top: {
    department: string,
    '0-10': number,
    '10-20': number,
    '20-30': number,
    '30-40': number,
    '40-50': number,
    '50-60': number,
    '60-70': number,
    '70-80': number,
    '80-90': number,
    '90-100': number,
    '100': number,
  }[] = [];


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
    const department_hard = {
      department,
      '0-100': 0,
      '101-200': 0,
      '201-300': 0, 
      '301-400': 0, 
      '401-500': 0, 
      '501-600': 0, 
      '601-700': 0, 
      '701-800': 0, 
      '801-900': 0, 
      '901-1000': 0, 
      '1001+': 0, 
    };
    const department_total = {
      department,
      '0-100': 0,
      '101-200': 0,
      '201-300': 0, 
      '301-400': 0, 
      '401-500': 0, 
      '501-600': 0, 
      '601-700': 0, 
      '701-800': 0, 
      '801-900': 0, 
      '901-1000': 0, 
      '1001+': 0, 
    };
    const department_top = { 
      department,
      '0-10': 0,
      '10-20': 0,
      '20-30': 0,
      '30-40': 0,
      '40-50': 0,
      '50-60': 0,
      '60-70': 0,
      '70-80': 0,
      '80-90': 0,
      '90-100': 0,
      '100': 0,
    };
    const department_contest_rating = {
      department,
      '0-1000': 0,
      '1000-1500': 0,
      '1500-1600': 0,
      '1600-1700': 0,
      '1700-1800': 0,
      '1800-1850': 0,
      '1850-2000': 0,
      '2000+': 0,
    };

    for (const person of people) {
      if (person.Total <= 100) department_total['0-100'] += 1;
      else if (person.Total <= 200) department_total['101-200'] += 1;
      else if (person.Total <= 300) department_total['201-300'] += 1;
      else if (person.Total <= 400) department_total['301-400'] += 1;
      else if (person.Total <= 500) department_total['401-500'] += 1;
      else if (person.Total <= 600) department_total['501-600'] += 1;
      else if (person.Total <= 700) department_total['601-700'] += 1;
      else if (person.Total <= 800) department_total['701-800'] += 1;
      else if (person.Total <= 900) department_total['801-900'] += 1;
      else if (person.Total <= 1000) department_total['901-1000'] += 1;
      else department_total['1001+'] += 1;

      if (person.Hard <= 100) department_hard['0-100'] += 1;
      else if (person.Hard <= 200) department_hard['101-200'] += 1;
      else if (person.Hard <= 300) department_hard['201-300'] += 1;
      else if (person.Hard <= 400) department_hard['301-400'] += 1;
      else if (person.Hard <= 500) department_hard['401-500'] += 1;
      else if (person.Hard <= 600) department_hard['501-600'] += 1;
      else if (person.Hard <= 700) department_hard['601-700'] += 1;
      else if (person.Hard <= 800) department_hard['701-800'] += 1;
      else if (person.Hard <= 900) department_hard['801-900'] += 1;
      else if (person.Hard <= 1000) department_hard['901-1000'] += 1;
      else department_hard['1001+'] += 1;

      if (person.ContestRating <= 1000) department_contest_rating['0-1000'] += 1;
      else if (person.ContestRating <= 1500) department_contest_rating['1000-1500'] += 1;
      else if (person.ContestRating <= 1600) department_contest_rating['1500-1600'] += 1;
      else if (person.ContestRating <= 1700) department_contest_rating['1600-1700'] += 1;
      else if (person.ContestRating <= 1800) department_contest_rating['1700-1800'] += 1;
      else if (person.ContestRating <= 1850) department_contest_rating['1800-1850'] += 1;
      else if (person.ContestRating <= 2000) department_contest_rating['1850-2000'] += 1;
      else department_contest_rating['2000+'] += 1;

      if (person.Top <= 10) department_top['0-10'] += 1;
      else if (person.Top <= 20) department_top['10-20'] += 1;
      else if (person.Top <= 30) department_top['20-30'] += 1;
      else if (person.Top <= 40) department_top['30-40'] += 1;
      else if (person.Top <= 50) department_top['40-50'] += 1;
      else if (person.Top <= 60) department_top['50-60'] += 1;
      else if (person.Top <= 70) department_top['60-70'] += 1;
      else if (person.Top <= 80) department_top['70-80'] += 1;
      else if (person.Top <= 90) department_top['80-90'] += 1;
      else department_top['100'] += 1;

    }

    total_solved.push(department_total);
    hard_solved.push(department_hard);
    contest_rating.push(department_contest_rating);
    top.push(department_top);
  }

  return { total_solved, hard_solved, contest_rating, top };
};


