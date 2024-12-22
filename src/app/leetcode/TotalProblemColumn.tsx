"use client";

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import DepartmentSheetTrigger from "@/components/DepartmentSheetTrigger";

interface TNameList { Name: string; Value: string; }
export type TLeetTotalProblems = {
  department: string;
  data: {
    "0-100": TNameList[]; "101-200": TNameList[]; "201-300": TNameList[]; "301-400": TNameList[];
    "401-500": TNameList[]; "501-600": TNameList[]; "601-700": TNameList[]; "701-800": TNameList[];
    "801-900": TNameList[]; "901-1000": TNameList[]; "1001+": TNameList[];
  };
};

export const LeetTotalProblemColumn: ColumnDef<TLeetTotalProblems>[] = [
  { accessorKey: "department", header: "Department" },
  {
    accessorKey: `data["0-100"]`,
    sortingFn: (a, b) =>
      a.original.data["0-100"].length < b.original.data["0-100"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        0-100 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["0-100"]} />
    },
  },
  {
    accessorKey: `data["101-200"]`,
    sortingFn: (a, b) =>
      a.original.data["101-200"].length < b.original.data["101-200"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        101-200 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["101-200"]} />
    },
  },
  {
    accessorKey: `data["201-300"]`,
    sortingFn: (a, b) =>
      a.original.data["201-300"].length < b.original.data["201-300"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        201-300 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["201-300"]} />
    },
  },
  {
    accessorKey: `data["301-400"]`,
    sortingFn: (a, b) =>
      a.original.data["301-400"].length < b.original.data["301-400"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        301-400 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["301-400"]} />
    },
  },
  {
    accessorKey: `data["401-500"]`,
    sortingFn: (a, b) =>
      a.original.data["401-500"].length < b.original.data["401-500"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        401-500 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["401-500"]} />
    },
  },
  {
    accessorKey: `data["501-600"]`,
    sortingFn: (a, b) =>
      a.original.data["501-600"].length < b.original.data["501-600"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        501-600 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["501-600"]} />
    },
  },
  {
    accessorKey: `data["601-700"]`,
    sortingFn: (a, b) =>
      a.original.data["601-700"].length < b.original.data["601-700"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        601-700 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["601-700"]} />
    },
  },
  {
    accessorKey: `data["701-800"]`,
    sortingFn: (a, b) =>
      a.original.data["701-800"].length < b.original.data["701-800"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        701-800 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["701-800"]} />
    },
  },
  {
    accessorKey: `data["801-900"]`,
    sortingFn: (a, b) =>
      a.original.data["801-900"].length < b.original.data["801-900"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        801-900 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["801-900"]} />
    },
  },
  {
    accessorKey: `data["901-1000"]`,
    sortingFn: (a, b) =>
      a.original.data["901-1000"].length < b.original.data["901-1000"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        901-1000 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["901-1000"]} />
    },
  },
  {
    accessorKey: `data["1001+"]`,
    sortingFn: (a, b) =>
      a.original.data["1001+"].length < b.original.data["1001+"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
        1001+ <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      <DepartmentSheetTrigger data={row.original.data["1001+"]} />
    },
  },
];
