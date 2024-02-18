import { TableColumn } from "react-data-table-component";
import { FaArrowTrendDown } from "react-icons/fa6";

interface SubIndices {
  indices: string;
  change: number;
  current: number;
}

export const subIndicesColumns: TableColumn<SubIndices>[] = [
  {
    name: "Sub Indices",
    selector: (row: SubIndices) => row.indices,
    cell: undefined,
  },
  {
    name: "Change (%)",
    cell: (row: SubIndices) => (
      <div className="flex gap-2 ">
        -{row.change} <FaArrowTrendDown className="text-red-400" />
      </div>
    ),
  },
  {
    name: "Current",
    selector: (row: SubIndices) => row.current.toString(), 
    cell: undefined,
  },
];
