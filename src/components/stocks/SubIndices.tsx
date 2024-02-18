import React from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../CustomStyles/CustomDefaultStyles";
import { subIndicesColumns } from "../table/subIndicesTable";
import { SUB_INDICES_LIST_DATA } from "@/constants/SubIndicesList";

const SubIndices = ({ show }: { show: boolean }) => {
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex flex-col gap-5">
        {show && (
          <div className="flex text-black font-extrabold text-2xl">
            Sub Indices
          </div>
        )}

        <div className=" rounded-md">
          <DataTable
            columns={subIndicesColumns}
            data={SUB_INDICES_LIST_DATA}
            pointerOnHover
            customStyles={customStyles}
            fixedHeader={true}
            fixedHeaderScrollHeight={"387px"}
          />
        </div>
      </div>
    </div>
  );
};

export default SubIndices;
