import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

const DisplayFormDataInTable = () => {
    // var password
    var isSpecial = false
    var isLength = false
    var isCapital = false
    var isEmail = false

    let [authMode, setAuthMode] = useState("logout")
    let [password, setPassword] = useState("");

    const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "logout" : "login")
    }

    const handlePasswordChange = (e) => {
             e.preventDefault();

    setPassword(e.target.value);
    };
    
    const notifiy = () => {
    //         const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     if (regex_pattern.test(email)) {
    //         console.log('The email address is valid');
    //         isEmail = true
    // }
    // else {
    //         console.log('The email address is not valid');
    //         isEmail = false
    //     }
        
        if (!isCapital || !isLength || !isSpecial) {
            let confirm = 'your password needs'
            if (!isLength)
                confirm = confirm.concat(" ", "to have at least 8 letters.")
            if (!isCapital)
                confirm = confirm.concat(" ", "at least 1 capital letter.")
            if (!isSpecial)
                confirm = confirm.concat(" ", "at least 1 special character.")
                    
            window.confirm(confirm)
        }
        else
        {
            changeAuthMode()
            }
        
    }
    const validatePassword = () => {
        
        var letter = password
        console.log("letter is : ", letter)

        let regExp = /[A-Z]/;
        isCapital = regExp.test(letter)

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

        notifiy();
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
             
        if (checkEmptyInput)
        {
                const newData = (data)=>([...data, formInputData])
                setTableData(newData);
                console.log ("formInputData is "+typeof formInputData)
      const emptyInput= {fullName:'', emailAddress:'', password:''}
            setformInputData(emptyInput)            
     }
    }

    if (authMode === "logout") {
        return (
             <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            {/* <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div> */}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                                value={password}
                                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={validatePassword}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
        )
    }
  return (
    <React.Fragment>
          <div className="container">
              <div className="text-left">
                    <button type="button" className="btn btn-danger" onClick={changeAuthMode}>Log Out</button>
              </div>
     <div className="row">
         <div className="col-sm-8">
         <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
                      <Table tableData={tableData} />
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
     </React.Fragment>
  );
};
  
export default DisplayFormDataInTable ;