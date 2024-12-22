import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import DepartmentSheetTrigger from "@/components/DepartmentSheetTrigger";

interface TNameList { Name: string; Value: string; }
export type TContest = {
  department: string;
  data: {
    'abs': TNameList[], '0': TNameList[], '1': TNameList[], '2': TNameList[], '3': TNameList[], '4': TNameList[]
  };
};

export const ContestColumn: ColumnDef<TContest>[] = [
  { accessorKey: "department", header: "Department" },
  {
    accessorKey: `data["abs"]`,
    sortingFn: (a, b) => a.original.data["abs"].length < b.original.data["abs"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        abs <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["abs"]}/>
  },
  {
    accessorKey: `data["0"]`,
    sortingFn: (a, b) => a.original.data["0"].length < b.original.data["0"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        0 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["0"]} />
  },
  {
    accessorKey: `data["1"]`,
    sortingFn: (a, b) => a.original.data["1"].length < b.original.data["1"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        1 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["1"]} />
  },
  {
    accessorKey: `data["2"]`,
    sortingFn: (a, b) => a.original.data["2"].length < b.original.data["2"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        2 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["2"]} />
  },
  {
    accessorKey: `data["3"]`,
    sortingFn: (a, b) => a.original.data["3"].length < b.original.data["3"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        3 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["3"]} />
  },
  {
    accessorKey: `data["4"]`,
    sortingFn: (a, b) => a.original.data["4"].length < b.original.data["4"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        4 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <DepartmentSheetTrigger data={row.original.data["4"]} />
  }
];
