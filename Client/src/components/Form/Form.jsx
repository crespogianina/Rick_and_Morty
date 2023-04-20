import { useState } from "react";
import style from './Form.module.css'
import validation from "./validation";

export default function Form ({login}) {

    const [userData, setUserData] = useState({email:'',password:''})
    const [errors, setErrors] = useState({email:'',password:''});
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value},errors,setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
   
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
              <label className={style.label} htmlFor="email">Email: </label>
              <input className={style.input} name="email" value={userData.email} onChange={handleChange} type="text" placeholder="Ingrese su email.."></input>
              <p>{errors.email}</p>
            </div>

            <div>
              <label htmlFor="password" className={style.label}>Password: </label>
              <input className={style.input} name="password" value={userData.password} onChange={handleChange} type="password" placeholder="Ingrese su password.."></input>  
              <p>{errors.password}</p>
            </div>

            <button className={style.button}>Submit</button>

        </form>
    )
}