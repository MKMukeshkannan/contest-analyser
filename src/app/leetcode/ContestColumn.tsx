import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useNameListStore } from '@/lib/store'

interface TNameList { Name: string; Value: string; }
export type TContest = {
  department: string;
  data: {
      '0-1000': TNameList[], '1000-1500': TNameList[], '1500-1600': TNameList[], '1600-1700': TNameList[],
      '1700-1800': TNameList[], '1800-1850': TNameList[], '1850-2000': TNameList[],
      '2000+': TNameList[]
  };
};

export const ContestColumn: ColumnDef<TContest>[] = [
  { accessorKey: "department", header: "Department" },
  {
  accessorKey: `data["0-1000"]`,
  sortingFn: (a, b) => a.original.data["0-1000"].length < b.original.data["0-1000"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      0-1000 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["0-1000"])}>{row.original.data["0-1000"].length}</button>
  }
},
{
  accessorKey: `data["1000-1500"]`,
  sortingFn: (a, b) => a.original.data["1000-1500"].length < b.original.data["1000-1500"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1000-1500 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1000-1500"])}>{row.original.data["1000-1500"].length}</button>
  }
},
{
  accessorKey: `data["1500-1600"]`,
  sortingFn: (a, b) => a.original.data["1500-1600"].length < b.original.data["1500-1600"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1500-1600 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1500-1600"])}>{row.original.data["1500-1600"].length}</button>
  }
},
{
  accessorKey: `data["1600-1700"]`,
  sortingFn: (a, b) => a.original.data["1600-1700"].length < b.original.data["1600-1700"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1600-1700 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1600-1700"])}>{row.original.data["1600-1700"].length}</button>
  }
},
{
  accessorKey: `data["1700-1800"]`,
  sortingFn: (a, b) => a.original.data["1700-1800"].length < b.original.data["1700-1800"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1700-1800 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1700-1800"])}>{row.original.data["1700-1800"].length}</button>
  }
},
{
  accessorKey: `data["1800-1850"]`,
  sortingFn: (a, b) => a.original.data["1800-1850"].length < b.original.data["1800-1850"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1800-1850 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1800-1850"])}>{row.original.data["1800-1850"].length}</button>
  }
},
{
  accessorKey: `data["1850-2000"]`,
  sortingFn: (a, b) => a.original.data["1850-2000"].length < b.original.data["1850-2000"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      1850-2000 <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["1850-2000"])}>{row.original.data["1850-2000"].length}</button>
  }
},
{
  accessorKey: `data["2000+"]`,
  sortingFn: (a, b) => a.original.data["2000+"].length < b.original.data["2000+"].length ? 1 : -1,
  header: ({ column }) => (
    <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      2000+ <ArrowUpDown className="ml-2 h-4 w-4" />
    </button>
  ),
  cell: ({ row }) => {
    const { setNameList } = useNameListStore(s => s);
    return <button onClick={() => setNameList(row.original.data["2000+"])}>{row.original.data["2000+"].length}</button>
  }
}

];
