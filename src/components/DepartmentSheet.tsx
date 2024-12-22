'use client'

import { useNameListStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


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

      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w[100px]">Name</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
          nameList.map((val, i) => 
          <TableRow key={i}>
            <TableCell className="font-medium">{val.Name}</TableCell>
            <TableCell>{val.Value}</TableCell>
          </TableRow>)
        }
        </TableBody>
      </Table>
    </aside>
  );
}
