import React, { useState } from 'react'


const UpdateJson = () => {

    const DUMMY_DATA = [
        {
            id : 1,
            title : "workday",
            version : "1.0",
            module : "HRTYPE",
            env : "QA"
        },
        {
            id : 2,
            title : "workday1",
            version : "1.0",
            module : "HRTYPE",
            env : "QA"
        },
        {
            id : 3,
            title : "workday2",
            version : "1.0",
            module : "HRTYPE",
            env : "QA"
        },
    ];
    
    const [items , setItem ] = useState(DUMMY_DATA)

    return (
        <div style = {{ padding:"20px 200px" }} >
                { items.map( item => {
                    <div>
                    return (
                        <div style = {{ 
                            height: "60px" , 
                            width : "250px" , 
                            backgroundColor : "red" , 
                            padding:  "20px 20px" ,
                            display: "flex",
                            justifyContent : "space-around",
                            margin : "20px"
                            }} 
                        >
                            <h1> { item.title } - { item.version }</h1>
                            <span> { item.module }   {  item.env  }</span>
                        </div>
                    );
                </div>
                })}
        </div>
    )
}

export default UpdateJson;