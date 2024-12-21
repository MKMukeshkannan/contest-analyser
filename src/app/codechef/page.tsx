'use client'

import { useState } from "react";
import { z } from "zod";

const DataValidator = z.array(z.object({ Name: z.string(), Department: z.string(), 'Current Rating': z.string(), 'Star Rating': z.string(), 'Problems Solved': z.string() }));
type TData = z.infer<typeof DataValidator>

// interface TData { [key: string]: string; }
export default function Leetcode() {
  let fileReader: FileReader;
  const [data, setData] = useState<TData>([])


  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const csvArray = DataValidator.parse(csvToArr(e.target?.result as string, ","));
      console.log(csvArray);
      setData(csvArray)
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
        object[key.trim()] = item[index];
      });
      return object;
    });
    return formedArr;
  };

  var d = total_problem_solved(data) 

  function total_problem_solved(d: TData) {
    const result: { department: string, '0-100': number, '101-200': number, '201-300': number, '301-400': number, '401-500': number, '501-600': number, '601-700': number, '700+': number }[] = [];

    // Step 1: Group by Department
    const departmentGroups: { [key: string]: { Name: string, Total: number }[] } = {};

    for (const item of d) {
      const { Name, Department, "Current Rating": currRating, "Star Rating": starRating, "Problems Solved": probSolved } = item;
      const cleanedProbSolved = probSolved.trim().replace(/[^0-9]/g, '')
      const total = parseInt(cleanedProbSolved, 10); // Convert string to number

      if (!departmentGroups[Department]) {
        departmentGroups[Department] = [];
      }

      departmentGroups[Department].push({ Name: item.Name, Total: total });
    }

    console.log(departmentGroups)

    // Step 2: Calculate counts based on Total ranges for each department
    for (const [department, people] of Object.entries(departmentGroups)) {
      const departmentResult = {
        department,
        '0-100': 0,
        '101-200': 0,
        '201-300': 0,
        '301-400': 0,
        '401-500': 0,
        '501-600': 0,
        '601-700': 0,
        '700+': 0
      };

      for (const person of people) {
        if (person.Total <= 100) {
          departmentResult['0-100'] += 1;
        } else if (person.Total <= 200) {
          departmentResult['101-200'] += 1;
        } else if (person.Total <= 300) {
          departmentResult['201-300'] += 1;
        } else if (person.Total <= 400) {
          departmentResult['301-400'] += 1;
        } else if (person.Total <= 500) {
          departmentResult['401-500'] += 1;
        } else if (person.Total <= 600) {
          departmentResult['501-600'] += 1;
        } else if (person.Total <= 700) {
          departmentResult['601-700'] += 1;
        } else {
          departmentResult['700+'] += 1;
        }
      }

      result.push(departmentResult);
    }

    return result;
  }

  var sd = star_rating(data)
  console.log(sd)

  function star_rating(d: TData) {
    const result: { department: string, '1': number, '2': number, '3': number, '4': number }[] = [];

    // Step 1: Group by Department
    const departmentGroups: { [key: string]: { Name: string, Total: number }[] } = {};

    for (const item of d) {
      const { Name, Department, "Current Rating": currRating, "Star Rating": starRating, "Problems Solved": probSolved } = item;
      const cleanedProbSolved = probSolved.trim().replace(/[^0-9]/g, '')
      const total = parseInt(cleanedProbSolved, 10); // Convert string to number

      if (!departmentGroups[Department]) {
        departmentGroups[Department] = [];
      }

      departmentGroups[Department].push({ Name: item.Name, Total: total });
    }

    console.log(departmentGroups)

    // Step 2: Calculate counts based on Total ranges for each department
    for (const [department, people] of Object.entries(departmentGroups)) {
      const departmentResult = {
        department,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      };
      console.log(people)

      for (const person of people) {
        if (person.Total === 1) {
          departmentResult['1'] += 1;
        } else if (person.Total === 2) {
          departmentResult['2'] += 1;
        } else if (person.Total === 3) {
          departmentResult['3'] += 1;
        } else {
          departmentResult['4'] += 1;
        }       
      }
      result.push(departmentResult);
    }

    return result;
  }


  console.log(d)
  return (
    <main className="font-mono min-h-screen w-full bg-sky-50 flex items-center justify-center font-bold">
      <input
        type='file'
        accept='.csv'
        onChange={e => e.target.files && handleFileChosen(e.target.files[0])}
      />
      {JSON.stringify(d)}
    </main>
  );
}
