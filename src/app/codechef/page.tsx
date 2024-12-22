"use client";

import { csvToArr } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), 'Problems Solved\r': z.string(), "Star Rating": z.string(),  "Current Rating": z.string() }));
type TData = z.infer<typeof DataValidator>

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([]);
  const [err, setErr] = useState<String>("SELECT A CSV")

  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      try {
        if (typeof e.target?.result !== 'string') return;
        const csvArray = DataValidator.parse(csvToArr(e.target?.result, ","));
        setData(csvArray);
      } catch (e) {
        console.log(e);
        setErr("not a leetcode CSV")
      };
    };
    if (file) fileReader.readAsText(file);
  };

  const {total_solved, contest_rating, star_rating}  = get_aggregates(data);

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

      <h1 className="text-4xl pt-10">STAR</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Department</TableHead>
            <TableHead>0</TableHead>
            <TableHead>1</TableHead>
            <TableHead>2</TableHead>
            <TableHead>3</TableHead>
            <TableHead>4</TableHead>
            <TableHead>5</TableHead>
            <TableHead>6</TableHead>
            <TableHead>7</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
        {star_rating.map((val,i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.department}</TableCell>
            <TableCell>{val["0"]}</TableCell>
            <TableCell>{val["1"]}</TableCell>
            <TableCell>{val["2"]}</TableCell>
            <TableCell>{val["3"]}</TableCell>
            <TableCell>{val["4"]}</TableCell>
            <TableCell>{val["5"]}</TableCell>
            <TableCell>{val["6"]}</TableCell>
            <TableCell>{val["7"]}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
      </> }
    </main>
  );
}

function get_aggregates(data: TData) {
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
  const star_rating: {
    department: string,
      '0': number,
      '1': number,
      '2': number,
      '3': number,
      '4': number,
      '5': number,
      '6': number,
      '7': number,
  }[] = [];

  const departmentGroups: { [key: string]: { Name: string, "Problems Solved": number, "Star Rating": number, "Current Rating": number }[] } = {};
  for (const item of data) {
    const { Department, "Current Rating": CurrentRating, "Star Rating": StarRating, "Problems Solved\r": ProblemsSolved } = item;
    const cleanedTotal = ProblemsSolved.trim().replace(/[^0-9]/g,'')
    const cleanedConestRating = CurrentRating.trim().replace(/[^0-9]/g,'')
    const cleanedStarRating = StarRating.trim().replace(/[^0-9]/g,'')
    const total = parseInt(cleanedTotal, 10);
    const contest_rating = parseInt(cleanedConestRating, 10);
    const star_rating = parseInt(cleanedStarRating, 10);

    if (!departmentGroups[Department]) {
      departmentGroups[Department] = [];
    }
    departmentGroups[Department].push({ Name: item.Name, "Problems Solved": total, "Star Rating": star_rating, "Current Rating": contest_rating });
  }

  for (const [department, people] of Object.entries(departmentGroups)) {
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
    const department_star = { 
      department,
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
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
      if (person["Problems Solved"] <= 100) department_total['0-100'] += 1;
      else if (person["Problems Solved"] <= 200) department_total['101-200'] += 1;
      else if (person["Problems Solved"] <= 300) department_total['201-300'] += 1;
      else if (person["Problems Solved"] <= 400) department_total['301-400'] += 1;
      else if (person["Problems Solved"] <= 500) department_total['401-500'] += 1;
      else if (person["Problems Solved"] <= 600) department_total['501-600'] += 1;
      else if (person["Problems Solved"] <= 700) department_total['601-700'] += 1;
      else if (person["Problems Solved"] <= 800) department_total['701-800'] += 1;
      else if (person["Problems Solved"] <= 900) department_total['801-900'] += 1;
      else if (person["Problems Solved"] <= 1000) department_total['901-1000'] += 1;
      else department_total['1001+'] += 1;

      if (person["Current Rating"] <= 1000) department_contest_rating['0-1000'] += 1;
      else if (person["Current Rating"] <= 1500) department_contest_rating['1000-1500'] += 1;
      else if (person["Current Rating"] <= 1600) department_contest_rating['1500-1600'] += 1;
      else if (person["Current Rating"] <= 1700) department_contest_rating['1600-1700'] += 1;
      else if (person["Current Rating"] <= 1800) department_contest_rating['1700-1800'] += 1;
      else if (person["Current Rating"] <= 1850) department_contest_rating['1800-1850'] += 1;
      else if (person["Current Rating"] <= 2000) department_contest_rating['1850-2000'] += 1;
      else department_contest_rating['2000+'] += 1;

      if (person["Star Rating"] === 0) department_star['0'] += 1;
      else if (person["Star Rating"] === 1) department_star['1'] += 1;
      else if (person["Star Rating"] === 2) department_star['2'] += 1;
      else if (person["Star Rating"] === 3) department_star['3'] += 1;
      else if (person["Star Rating"] === 4) department_star['4'] += 1;
      else if (person["Star Rating"] === 5) department_star['5'] += 1;
      else if (person["Star Rating"] === 6) department_star['6'] += 1;
      else department_star['7'] += 1;

    }

    total_solved.push(department_total);
    contest_rating.push(department_contest_rating);
    star_rating.push(department_star);
  }

  return { total_solved, contest_rating, star_rating };
};
