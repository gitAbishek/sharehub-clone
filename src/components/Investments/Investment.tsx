import React from 'react'
import DataTable from 'react-data-table-component'
import { investmentColumns } from '../table/InvestMentTable'
import { INVESTMENT_LIST_DATA } from '@/constants/InvestmentList'
import { customStyles } from '../table/CustomStyles/CustomDefaultStyles'


const Investment = () => {
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
        <div className='flex flex-col gap-5'>
            <div className='flex text-black font-extrabold text-2xl'>
            Investments
            </div>
            
            <div className="border-[0.5px] rounded-md">
            <DataTable
              columns={investmentColumns}
              data={INVESTMENT_LIST_DATA}
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

export default Investment