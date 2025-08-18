import React from 'react'
import Form from './Form';
const TransactionTable = ({filterType="All",searchQuery=""}) => {
    const tableData=[
        {
            id:"HD82NA2H",
            Date:"2025-06-09",
            Time:"07:06 PM",
            type:{
                name:"INR Deposit",
                tag:"E-transfer",
            },
            amount:"+ ₹81,123.10",
            status:"Pending"
        },
        {
            id:"HD82NA2H",
            Date:"2022-06-10",
            Time:"02:48 PM",
            type:{
                name:"INR Withdraw",
                tag:"Wire transfer",
            },
            amount:"+ ₹81,123.10" ,
            status:"Processing"
        },
        {
            id:"HD82NA2H",
            Date:"2022-06-11",
            Time:"09:21 AM",
            type:"Buy",
            amount:{
                bitcoin:"+ 12.48513391 BTC",
                rs:"+ ₹81,123.10",
            },
            status:"Cancelled"
        },
        {
            id:"HD82NA2H",
            Date:"2022-06-12",
            Time:"01:32 PM",
            type:"Sell",
            amount:{
                bitcoin:"- 0.36401628 BTC",
                rs:"+ $19,378.84",
            },
            status:"Completed"
        },
        {
            id:"HD82NA2H",
            Date:"2022-06-13",
            Time:"09:02 AM",
            type:"BTC Deposit",
            amount:{
                bitcoin:"+ 4.13946104 BTC",
                rs:"+ $37,929.31",
            },
            status:"Completed"
        },
        {
            id:"HD82NA2H",
            Date:"2022-06-14",
            Time:"01:56 PM",
            type:"BTC Withdraw",
            amount:{
                bitcoin:"- 10.00000000 BTC",
                rs:"- $62,017.58",
            },
            status:"Completed"
        },
    ]
        //filter
    const filteredByType= tableData.filter((row) => {
        const typeName = row.type?.name || row.type;
        if (!typeName) return false;

        if (filterType === "Deposit") {
        return typeName.includes("Deposit");
        } else if (filterType === "Withdraw") {
        return typeName.includes("Withdraw");
        } else if (filterType === "Trade") {
        return typeName === "Buy" || typeName === "Sell";
        } else {
        return true; // "All"
        }
    });

      //search
    const filteredData = filteredByType.filter((row) => {
        
        const query = searchQuery.toLowerCase();
        const typeMatch = typeof row.type === "object"
            ? row.type.name?.toLowerCase().includes(query)
            : row.type?.toLowerCase().includes(query);
        const statusMatch = row.status?.toLowerCase().includes(query);

        return typeMatch || statusMatch;
 });

  return (
     <div>
         <Form tableData={tableData} filteredData={filteredData} />
    </div>
  )
}

export default TransactionTable
