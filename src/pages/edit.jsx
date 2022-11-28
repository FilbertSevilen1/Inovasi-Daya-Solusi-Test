import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios'
import "../css/main.css"
import "../css/add.css"
import { useLocation } from "react-router-dom";

function EditData(){
    let pathname = useLocation().pathname.substring(6);

    let productId = useRef();
    let productName = useRef();
    let productAmount = useRef();
    let customerName = useRef();
    let createBy = useRef();
    let transactionDate = useRef();
    let status = useRef();

    useEffect(()=>{
        Axios.get(`http://localhost:2000/data?id=${pathname}`)
        .then((respond)=>{
            console.log(respond.data[0])
            let data = respond.data[0]

            productId.current.value = data.productID
            productName.current.value = data.productName
            productAmount.current.value = data.amount;
            customerName.current.value = data.customerName;
            createBy.current.value = data.createBy;
            transactionDate.current.value = data.transactionDate;
            status.current.value = data.status?"Accepted":"Not Accepted";
        })
        .catch((error)=>{
            alert('Internal Service Error')
        })
    },[])

    let submit =()=>{
        let pid = productId.current.value;
        let pname = productName.current.value;
        let pamount = productAmount.current.value;
        let tdate = transactionDate.current.value;
        let cname = customerName.current.value;
        let cBy = createBy.current.value;
        
        let today = new Date();

        let month = (today.getMonth()+1<10?'0'+today.getMonth()+1:today.getMonth()+1);
        let dateofmonth = (today.getDate()<10?'0'+today.getDate():today.getDate());

        let hours = (today.getHours()<10?'0'+today.getHours():today.getHours());
        let minutes = (today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes());
        let seconds = (today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds());

        var date = today.getFullYear()+'-'+month+'-'+dateofmonth;
        var time = hours + ":" + minutes + ":" + seconds;
        var dateTime = date+' '+time;
        let createOn = dateTime;

        console.log(createOn)

        tdate = tdate.replace("T"," ")
        let stat = (status.current.value=="Accepted"?1:0);

        if(!pid){
            return alert("Product ID Cannot be Empty")
        }
        if(!pname){
            return alert("Product Name Cannot be Empty")
        }
        if(!pamount){
            return alert("Product Amount Cannot be Empty")
        }
        if(!cname){
            return alert("Customer Name Cannot be Empty")
        }
        if(!tdate){
            return alert("Transaction Date Cannot be Empty")
        }
        if(!cBy){
            return alert("Created By Cannot be Empty")
        }
        Axios.patch(`http://localhost:2000/data/${pathname}`,{
            productID : pid,
            productName : pname,
            amount : pamount,
            customerName : cname,
            status : stat,
            transactionDate : tdate,
            createBy : cBy,
            createOn : createOn
        })
        .then(()=>{
            alert(`Data Input Success`)
          })
          .catch(()=>{
            alert(`Internal Service Error`)
          })
    }
    return (
        <div className="viewContainer">
            <h1>Edit Data</h1>
            <div className="addForm">
                <div className="formContainer">
                    <div className="formLabel">
                        Product ID
                    </div>
                    <input className="formInput" ref={productId}></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Product Name
                    </div>
                    <input className="formInput" ref={productName}></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Product Amount
                    </div>
                    <input className="formInput" ref={productAmount} type="number"></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Customer Name
                    </div>
                    <input className="formInput" ref={customerName}></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Created By
                    </div>
                    <input className="formInput" ref={createBy}></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Transaction Date
                    </div>
                    <input className="formInput" ref={transactionDate} type="datetime-local" step="1"></input>
                </div>
                <div className="formContainer">
                    <div className="formLabel">
                        Status
                    </div>
                    <select className="formInput" ref={status}>
                        <option className="" value="Accepted">Accepted</option>
                        <option className="" value="Not Accepted">Not Accepted</option>
                    </select>
                </div>
                <button className="submitButton" onClick={submit}>Submit</button>
            </div>
        </div>
    )
}
export default EditData;