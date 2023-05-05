import EmpUpdate from "@/app/model/EmpUpdateModel"

let reqmodel:EmpUpdate ={
    name: "empName",
    salary: "salary",
    age: "age"
}

async function ADDEmployee(){
    const response = await fetch("https://dummy.restapiexample.com/api/v1/update/21",{
        method:"update",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(reqmodel)
    })
}