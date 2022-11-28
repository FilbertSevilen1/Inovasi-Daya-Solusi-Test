import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios'
import "../css/main.css"
import ViewContent from "./components/viewcontent";

function ViewData(){
    let [data, setData] = useState([]);
    let [message, setMessage] = useState("Data : All")
    let month = useRef()
    let year = useRef()

    useEffect(()=>{
        Axios.get(`http://localhost:2000/data?_sort=transactionDate&_order=desc`)
        .then((respond)=>{
            console.log(respond.data)
            setData(respond.data)
        })
        .catch((error)=>{
            alert('Internal Service Error')
        })
    },[])

    let dataFilter = () =>{
        let findmonth = month.current.value
        findmonth = findmonth<10?'0'+findmonth : findmonth
        let findyear = year.current.value
        let date = findyear + "-" + findmonth

        if(findmonth<=0||findmonth>12){
            alert("Month must greater or equal to 1 or less or equal to 12")
            return
        }

        Axios.get(`http://localhost:2000/data?_sort=transactionDate&_order=desc&transactionDate_like=${date}`)
        .then((respond)=>{
            console.log(respond.data)
            setData(respond.data)
            setMessage(`Data : ${findmonth} - ${findyear}`)
        })
        .catch((error)=>{
            alert('Internal Service Error')
        })
    }

    let generateDataRows = () =>{
        return data.map((data,index)=>{
            return <ViewContent
                key = {data.id}
                data = {data}
                index = {index}
            />
        })
    }

    console.log(data[0])
    return (
        <div className="viewContainer">
            <h1>View Data</h1>
            <div className="viewContainerForm">
                <div className="viewFilterContainer">
                    <div className="viewFilterItem">Month <input maxLength={2} type="number" ref={month} className="viewFilterInput"/></div>
                    <div className="viewFilterItem">Year <input maxLength={4} type="number" ref={year} className="viewFilterInput"/></div>
                    <button className="greenButton" onClick={dataFilter}>Search</button>
                </div>
                <h2 className="filterHeader">{message}</h2>
                <div className="gridContainer">
                    <div className="gridHead">
                        <div className="gridHeader">
                            Transaction ID
                        </div>
                        <div className="gridHeader">
                            Product ID
                        </div>
                        <div className="gridHeader">
                            Product Name
                        </div>
                        <div className="gridHeader"> 
                            Product Amount
                        </div>
                        <div className="gridHeader">
                            Customer Name
                        </div>
                        <div className="gridHeader">
                            Transaction Date
                        </div>
                        <div className="gridHeader">
                            Status
                        </div>
                        <div className="gridHeader">
                            Action
                        </div>
                    </div>
                    <div className="gridRow">
                        
                        {generateDataRows()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewData;