import { TableColumn } from "react-data-table-component";

interface InvestMent {
  company: string;
  investDate: string;
  invested: number;
  netValue: number;
  multiple: number;
}

export const investmentColumns: TableColumn<InvestMent>[] = [
  {
    name: "Company",
    selector: (row: InvestMent) => row.company,
    cell: undefined,
  },
  {
    name: "Invest Date",
    selector: (row: InvestMent) => row.investDate,
    cell: undefined,
  },
  {
    name: "Invested",
    selector: (row: InvestMent) => `$${row.invested}`,
    cell: undefined,
},
{
    name: "Net Value",
    selector: (row: InvestMent) => `$${row.netValue}`,
    cell: undefined,
},
  {
    name: "Multiple",
    selector: (row: InvestMent) => `${row.multiple}x`,
    cell: undefined,
  },
];
