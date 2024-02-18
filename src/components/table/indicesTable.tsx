import { TableColumn } from "react-data-table-component";
import { FaArrowTrendUp } from "react-icons/fa6";

interface Indices {
  indices: string;
  change: number;
  current: number;
}

export const indicesColumns: TableColumn<Indices>[] = [
  {
    name: "Indices",
    selector: (row: Indices) => row.indices,
    cell: undefined,
  },
  {
    name: "Change (%)",
    cell: (row: Indices) => (
      <div className="flex gap-2 ">
        {row.change} <FaArrowTrendUp className="text-red-400" />
      </div>
    ),
  },
  {
    name: "Current",
    selector: (row: Indices) => row.current.toString(), 
    cell: undefined,
  },
];
