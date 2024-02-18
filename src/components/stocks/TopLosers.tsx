import React from 'react'
import DataTable from 'react-data-table-component'
import { investmentColumns } from '../table/InvestMentTable'
import { INVESTMENT_LIST_DATA } from '@/constants/InvestmentList'
import { customStyles } from '../CustomStyles/CustomDefaultStyles'
import { loserColumns } from '../table/Losertable'
import { LOSER_LIST_DATA } from '@/constants/LoserList'


const TopLosers = () => {
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
        <div className='flex flex-col gap-5'>
            <div className='flex text-black font-extrabold text-2xl'>
            Top Losers
            </div>
            
            <div className=" rounded-md">
            <DataTable
              columns={loserColumns}
              data={LOSER_LIST_DATA}
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

export default TopLosers