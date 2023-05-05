import { useEffect, useState } from "react";

useEffect(()=>{
    const [employees, setEmployees] = useState([]);
    async function getEmpData(){
        const response = await fetch ("https://dummy.restapiexample.com/api/v1/employees")
        let result = await response.json();
        setEmployees(result.data)
    }
    getEmpData();
},[])