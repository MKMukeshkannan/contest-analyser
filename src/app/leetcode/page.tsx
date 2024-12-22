"use client";

import { csvToArr } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import DepartmentSheet from "@/components/DepartmentSheet";
import { useNameListStore } from "@/lib/store";


const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), Total: z.string(), Hard: z.string(), "Top\r": z.string(), ContestRating: z.string() }));
type TData = z.infer<typeof DataValidator>
interface TNameList { Name: string; Value: string; }

export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([]);
  const [err, setErr] = useState<String>("SELECT A CSV")

  const { setNameList } = useNameListStore(s=>s);


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
      <DepartmentSheet />
      <h1 className="text-4xl w-fit font-mono cursor-pointer">ANALYSIS</h1>
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
            <TableCell><button onClick={() => setNameList(val.data['0-100'])}>{val.data['0-100'].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["101-200"])}>{val.data["101-200"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["201-300"])}>{val.data["201-300"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["301-400"])}>{val.data["301-400"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["401-500"])}>{val.data["401-500"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["501-600"])}>{val.data["501-600"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["601-700"])}>{val.data["601-700"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["701-800"])}>{val.data["701-800"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["801-900"])}>{val.data["801-900"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["901-1000"])}>{val.data["901-1000"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1001+"])}>{val.data["1001+"].length}</button></TableCell>
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
            <TableCell><button onClick={() => setNameList(val.data["0-100"])}>{val.data["0-100"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["101-200"])}>{val.data["101-200"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["201-300"])}>{val.data["201-300"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["301-400"])}>{val.data["301-400"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["401-500"])}>{val.data["401-500"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["501-600"])}>{val.data["501-600"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["601-700"])}>{val.data["601-700"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["701-800"])}>{val.data["701-800"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["801-900"])}>{val.data["801-900"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["901-1000"])}>{val.data["901-1000"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1001+"])}>{val.data["1001+"].length}</button></TableCell>
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
            <TableCell><button onClick={() => setNameList(val.data["0-1000"])}>{val.data["0-1000"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1000-1500"])}>{val.data["1000-1500"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1500-1600"])}>{val.data["1500-1600"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1600-1700"])}>{val.data["1600-1700"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1700-1800"])}>{val.data["1700-1800"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1800-1850"])}>{val.data["1800-1850"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["1850-2000"])}>{val.data["1850-2000"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["2000+"])}>{val.data["2000+"].length}</button></TableCell>
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
            <TableCell><button onClick={() => setNameList(val.data["0-10"])}>{val.data["0-10"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["10-20"])}>{val.data["10-20"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["20-30"])}>{val.data["20-30"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["30-40"])}>{val.data["30-40"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["40-50"])}>{val.data["40-50"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["50-60"])}>{val.data["50-60"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["60-70"])}>{val.data["60-70"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["70-80"])}>{val.data["70-80"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["80-90"])}>{val.data["80-90"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["90-100"])}>{val.data["90-100"].length}</button></TableCell>
            <TableCell><button onClick={() => setNameList(val.data["100"])}>{val.data["100"].length}</button></TableCell>
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
    data: { [key: string]: TNameList[]; } 
  }[] = [];
  const total_solved: { 
    department: string,
    data: { [key: string]: TNameList[]; } 
  }[] = [];
  const contest_rating: {
    department: string,
    data: { [key: string]: TNameList[]; } 
  }[] = []
  const top: {
    department: string,
    data: { [key: string]: TNameList[]; } 
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
    let department_hard: { department: string; data: {[key: string]: TNameList[];} } = {
      department,
      data: {
      '0-100': [], '101-200': [], '201-300': [], 
      '301-400': [], '401-500': [], '501-600': [], '601-700': [], 
      '701-800': [], '801-900': [], '901-1000': [], '1001+': [] }
    };
    const department_total: { department: string; data: {[key: string]: TNameList[];} } = {
      department,
      data: {
      '0-100': [], '101-200': [], '201-300': [], '301-400': [], 
      '401-500': [], '501-600': [], '601-700': [], '701-800': [], 
      '801-900': [], '901-1000': [], '1001+': [] }
    };
    const department_top: { department: string; data: {[key: string]: TNameList[];} } = { 
      department,
      data: {
      '0-10': [], '10-20': [], '20-30': [], '30-40': [],
      '40-50': [], '50-60': [], '60-70': [], '70-80': [],
      '80-90': [], '90-100': [], '100': [] }
    };
    const department_contest_rating: { department: string; data: {[key: string]: TNameList[];} } = {
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


