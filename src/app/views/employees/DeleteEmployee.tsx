import EmpDelete from "@/app/model/EmpDeleteModel"

let reqmodel:EmpDelete ={
    name: "empName",
    salary: "salary",
    age: "age"
}

async function ADDEmployee(){
    const response = await fetch("https://dummy.restapiexample.com/api/v1/delete/2",{
        method:"delete",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(reqmodel)
    })
}