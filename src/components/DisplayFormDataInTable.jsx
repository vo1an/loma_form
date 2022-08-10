import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

const DisplayFormDataInTable = () => {

    var isSpecial = false
    var password
    var isLength = false
    var isCapital = false

    const validate = (event) => {
        var letter = event.target.value
        console.log(letter)

        for (var i = 0; i < letter.length; i++) {
            if (letter.charAt(i) == letter.charAt(i).toUpperCase() && letter.charAt(i).match(/[a-z]/i)) {
                isCapital = true;
            } else {
                isCapital = false;
            }
        }

        var format = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

        if (letter) {
            isSpecial = format.split('').some(isSpecial => {
                if (letter.includes(isSpecial)) {
                    console.log('has special')

                    return true

                } else
                    return false

            });
            if (letter.length > 8) {
                isLength = true
                console.log('length true')

            } else if (letter.length < 8) {
                isLength = false
                console.log('length false')
            }
        }
    }

    const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fullName:'',
     emailAddress:'',
     password:''
    }
    );
    const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
        setformInputData(newInput)
    }
    const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     
        validate(evnt)
        
        if (checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fullName:'', emailAddress:'', password:''}
      setformInputData(emptyInput)
     }
 } 
  return (
    <React.Fragment>
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
         <Table tableData={tableData}/>
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
     </React.Fragment>
  );
};
  
export default DisplayFormDataInTable ;