import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import DashBoardLayout from "../../components/DashBoardLayout";
import Portfolio from './Components/Portfolio';
import PriceSection from './Components/PriceSection';
import Transaction from './Components/Transaction';
import Loan from './Components/Loan'

const Dashboard = () => {
  return (
    <DashBoardLayout title="Dashboard">
       <Portfolio />
      <div className='flex flex-col md:flex-row md:flex-wrap'>
         <PriceSection />
         <Transaction />
       </div> 
       <Loan />
    </DashBoardLayout>
  )
}

export default Dashboard