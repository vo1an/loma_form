import React from "react";
  
const FormInput = ({handleChange, formInputData, handleSubmit}) => {
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

    return (
    <div className="form-row row">
      <div className="col">
        <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
      </div>
          <div className="col">
        <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
      </div>
      <div className="col">
                <input type="text" onChange={handleChange} value={formInputData.password} name="password" className="form-control" placeholder="Password" />
      </div>
      <div className="col">
        <button type="submit" onClick={handleSubmit} className="btn btn-primary" >Add</button>
      </div>
    </div>
  );
};
  
export default FormInput ;