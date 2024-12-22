'use client'

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { ArrowUpDown } from "lucide-react";
import { TNameList, useNameListStore } from "@/lib/store";


export default function DepartmentSheet() {
  const {nameList, setNameList} = useNameListStore();

  return (
    <aside
      className={cn(
        "w-full max-w-xl h-screen fixed top-0 right-0 border bg-white shadow-xl z-[999] p-10 overflow-scroll transition-all ease-in-out",
        nameList.length === 0 && "-right-[2000px]",
      )}
    >
      <button onClick={() => setNameList([])} className="text-5xl sticky top-3 left-3 z-50">X</button>
      <div className="pt-10">
        <DataTable columns={NameListColumn} data={nameList}/>
      </div>
    </aside>
  );
}

export const NameListColumn: ColumnDef<TNameList>[] = [
  { accessorKey: "Name", header: "Name" },
  {
    accessorKey: `data["0-1000"]`,
    sortingFn: (a, b) => parseInt(a.original.Value) < parseInt(b.original.Value) ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Value <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <button onClick={() => {}}>{row.original.Value}</button>
  },
];
