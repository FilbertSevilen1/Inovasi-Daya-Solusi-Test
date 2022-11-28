import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/main.css'
export default function ViewContent({data, index}){
    let navigate = useNavigate();
    return(
        <div className='gridContent'>
            <div className='gridData'>
                {data.id}
                
            </div>
            <div className='gridData'>
                {data.productID}
            </div>
            <div className='gridData'>
                {data.productName}
            </div>
            <div className='gridData'>
                {data.amount}
            </div>
            <div className='gridData'>
                {data.customerName}
            </div>
            <div className='gridData'>
                {data.transactionDate}
            </div>
            <div className='gridData'>
                {data.status?"Accepted":"Not Accepted"}
            </div>
            <div className='gridData'>
                <button className='greenButton' onClick={()=>navigate(`/data/${data.id}`)}>Details</button>
                <button className='greenButton' onClick={()=>navigate(`/edit/${data.id}`)}>Edit</button>
            </div>
        </div>
    )
}
