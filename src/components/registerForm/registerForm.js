import { useState } from "react";
import './registerForm.css'



export function RegisterForm() {

    const [formData, setFormData] =useState({
        username:'',
        email:'',
        password:''
    })

     const changeEvent = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
     }

     console.log(formData);

     const onSubmitData =(e)=>{
        e.preventDefault()
        console.log(formData);
     }

    //gh  ''
  return (
    <form onSubmit={onSubmitData}>
        <div className="row">
            <label htmlFor="username" className="col">User Name:</label>
            <input id="username" className="col" value={formData.username} onChange={changeEvent} type='text' name='username' />
        </div>

        <div className="row">
            <label htmlFor="email" className="col">Email:</label>
            <input id="email" className="col" value={formData.email} onChange={changeEvent} type='email' name='email' />
        </div>

        <div className="row">
            <label htmlFor="password" className="col">Password:</label>
            <input id="password" className="col" value={formData.password} onChange={changeEvent} type='password' name='password' />
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}