import React, { useEffect, useState } from 'react';
import "../css/main.css"
import Axios from 'axios'
import { useLocation } from 'react-router-dom';
function ViewDetails(){
    let pathname = useLocation().pathname.substring(6);
    let [data, setData] = useState("");
    console.log(data)
    useEffect(()=>{
        Axios.get(`http://localhost:2000/data?id=${pathname}`)
        .then((respond)=>{
            console.log(respond.data)
            setData(respond.data[0])
        })
    },[])
    return (
        <div>
            {data.id?
                <div className='viewContainer'>
                    <h1>Transaction {pathname}</h1>
                    <div className='viewContainerContent'>
                        <div className='viewContainerContentItem'>Transaction ID : {data.id}</div>
                        <div className='viewContainerContentItem'>Product ID : {data.productID}</div>
                        <div className='viewContainerContentItem'>Product Name : {data.productName}</div>    
                        <div className='viewContainerContentItem'>Product Price : Rp. {data.amount}</div>
                        <div className='viewContainerContentItem'>Status : {data.status?"Accepted":"Not Accepted"}</div>
                        <br></br>
                        <div className='viewContainerContentItem'>Customer Name : {data.customerName}</div>
                        <div className='viewContainerContentItem'>Created By : {data.createBy}</div>
                        <div className='viewContainerContentItem'>Transaction Date{data.transactionDate}</div>
                    </div>
                </div>
                :
                <div>
                </div>
            }
        </div>
    )
}
export default ViewDetails;