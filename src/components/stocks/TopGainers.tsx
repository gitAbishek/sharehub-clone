import React from 'react'
import DataTable from 'react-data-table-component'
import { customStyles } from '../CustomStyles/CustomDefaultStyles'
import { GAINER_LIST_DATA } from '@/constants/GainerList'
import { gainerColumns } from '../table/gainersTable'


const TopGainers = () => {
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
        <div className='flex flex-col gap-5'>
            <div className='flex text-black font-extrabold text-2xl'>
            Top Gainers
            </div>
            
            <div className=" rounded-md">
            <DataTable
              columns={gainerColumns}
              data={GAINER_LIST_DATA}
              pointerOnHover
              customStyles={customStyles}
              fixedHeader={true}
              fixedHeaderScrollHeight={"387px"}
            />
          </div>
        </div>
    </div>
  )
}

export default TopGainers