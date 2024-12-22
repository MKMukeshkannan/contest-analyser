import { ArrowUpDown } from "lucide-react";
import { useNameListStore } from '@/lib/store'
import { ColumnDef } from "@tanstack/react-table";

interface TNameList { Name: string; Value: string; }
export type TTop = {
  department: string;
  data: {
      '0-10': TNameList[], '10-20': TNameList[], '20-30': TNameList[], '30-40': TNameList[],
      '40-50': TNameList[], '50-60': TNameList[], '60-70': TNameList[], '70-80': TNameList[],
      '80-90': TNameList[], '90-100': TNameList[], '100': TNameList[] 
  };
};

export const TopColumn: ColumnDef<TTop>[] = [
  { accessorKey: "department", header: "Department" },
  {
    accessorKey: `data["0-10"]`,
    sortingFn: (a, b) => a.original.data["0-10"].length < b.original.data["0-10"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        0-10 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["0-10"])}>{row.original.data["0-10"].length}</button>
    }
  },
  {
    accessorKey: `data["10-20"]`,
    sortingFn: (a, b) => a.original.data["10-20"].length < b.original.data["10-20"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        10-20 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["10-20"])}>{row.original.data["10-20"].length}</button>
    }
  },
  {
    accessorKey: `data["20-30"]`,
    sortingFn: (a, b) => a.original.data["20-30"].length < b.original.data["20-30"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        20-30 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["20-30"])}>{row.original.data["20-30"].length}</button>
    }
  },
  {
    accessorKey: `data["30-40"]`,
    sortingFn: (a, b) => a.original.data["30-40"].length < b.original.data["30-40"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        30-40 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["30-40"])}>{row.original.data["30-40"].length}</button>
    }
  },
  {
    accessorKey: `data["40-50"]`,
    sortingFn: (a, b) => a.original.data["40-50"].length < b.original.data["40-50"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        40-50 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["40-50"])}>{row.original.data["40-50"].length}</button>
    }
  },
  {
    accessorKey: `data["50-60"]`,
    sortingFn: (a, b) => a.original.data["50-60"].length < b.original.data["50-60"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        50-60 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["50-60"])}>{row.original.data["50-60"].length}</button>
    }
  },
  {
    accessorKey: `data["60-70"]`,
    sortingFn: (a, b) => a.original.data["60-70"].length < b.original.data["60-70"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        60-70 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["60-70"])}>{row.original.data["60-70"].length}</button>
    }
  },
  {
    accessorKey: `data["70-80"]`,
    sortingFn: (a, b) => a.original.data["70-80"].length < b.original.data["70-80"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        70-80 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["70-80"])}>{row.original.data["70-80"].length}</button>
    }
  },
  {
    accessorKey: `data["80-90"]`,
    sortingFn: (a, b) => a.original.data["80-90"].length < b.original.data["80-90"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        80-90 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["80-90"])}>{row.original.data["80-90"].length}</button>
    }
  },
  {
    accessorKey: `data["90-100"]`,
    sortingFn: (a, b) => a.original.data["90-100"].length < b.original.data["90-100"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        90-100 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["90-100"])}>{row.original.data["90-100"].length}</button>
    }
  },
  {
    accessorKey: `data["100"]`,
    sortingFn: (a, b) => a.original.data["100"].length < b.original.data["100"].length ? 1 : -1,
    header: ({ column }) => (
      <button className="flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        100 <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const { setNameList } = useNameListStore(s => s);
      return <button onClick={() => setNameList(row.original.data["100"])}>{row.original.data["100"].length}</button>
    }
  }
];

