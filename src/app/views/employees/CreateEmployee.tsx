import EmpCreate from "@/app/model/EmpCreateModel"

let reqmodel:EmpCreate ={
    name: "empName",
    salary: "salary",
    age: "age"
}

async function ADDEmployee(){
    const response = await fetch("https://dummy.restapiexample.com/api/v1/create",{
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(reqmodel)
    })
}