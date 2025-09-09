import React, { useEffect } from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import DashBoardLayout from "../../components/DashBoardLayout";
import Portfolio from './Components/Portfolio';
import PriceSection from './Components/PriceSection';
import Transaction from './Components/Transaction';
import Loan from './Components/Loan'
import { fetchExample } from '../../api/query/userQuery';
import { useQuery } from 'react-query';
const Dashboard = () => {

  // useEffect(()=>{
  //   const data =fetchExample();
  //   console.log(data);
  // },[])

  const exampleQuery =useQuery({
    queryKey:["example"],
    queryFn:fetchExample,
  })

  if(exampleQuery.isLoading) return <div>loading...</div>

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