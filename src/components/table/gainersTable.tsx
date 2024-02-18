import { TableColumn } from "react-data-table-component";
import { FaArrowTrendUp } from "react-icons/fa6";

interface Gainer {
  name: string;
  ch: number;
  change: number;
  ltp: number;
}

export const gainerColumns: TableColumn<Gainer>[] = [
  {
    name: "Name",
    selector: (row: Gainer) => row.name,
    cell: undefined,
  },
  {
    name: "CH",
    selector: (row: Gainer) => row.ch.toString(), 
    cell: undefined,
  },
  {
    name: "Change (%)",
    cell: (row: Gainer) => (
      <div className="flex gap-2">
        {row.change} <FaArrowTrendUp className="text-red-400" />
      </div>
    ),
  },
  {
    name: "LTP",
    selector: (row: Gainer) => row.ltp.toString(), 
    cell: undefined,
  },
];
