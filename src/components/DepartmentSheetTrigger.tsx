import { useNameListStore } from "@/lib/store";

interface TNameList { Name: string; Value: string; };
interface Prop {
  data: TNameList[];
}

export default function DpeartmentSheetTrigger({data}: Prop) {
  const setNameList = useNameListStore(s => s.setNameList);
  return <button onClick={() => setNameList(data)}>{data.length}</button>
}
