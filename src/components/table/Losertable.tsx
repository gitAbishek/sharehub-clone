import { TableColumn } from "react-data-table-component";
import { FaArrowTrendDown } from "react-icons/fa6";


interface Loser {
  name: string;
  ch: number;
  change: number;
  ltp: number;
}

export const loserColumns: TableColumn<Loser>[] = [
  {
    name: "Name",
    selector: (row: Loser) => row.name,
    cell: undefined,
  },
  {
    name: "CH",
    selector: (row: Loser) => `-${row.ch}`,
    cell: undefined,
  },
  {
    name: "Change (%)",
    cell: (row: Loser) => (
      <div className="flex gap-2">
        -{row.change} <FaArrowTrendDown className="text-red-400" />
      </div>
    ),
  },
  {
    name: "LTP",
    selector: (row: Loser) => `${row.ltp}`,
    cell: undefined,
  },
];
