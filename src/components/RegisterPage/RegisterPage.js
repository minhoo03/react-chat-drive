import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import firebase from '../../firebase'

function RegisterPage() {
    const { register, watch, errors, handleSubmit } = useForm({mode:'onChange'})
    const [errorFromSubmit, setErrorFromSubmit] = useState("")
    const [loading, setLoading] = useState(false)

    const password = useRef()
    password.current = watch('password')
    

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            let createdUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            setLoading(false)
        } catch (error) {
            setErrorFromSubmit(error.message)
            setLoading(false)

            setTimeout(() => {
                setErrorFromSubmit("")
            }, 5000);
        }
    }


    return (
        <div className="authWrap">
            <div className="form_title">
                <h3>Register</h3>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            >
                <label>Email</label>
                <input name="email" type="email"
                    ref={register({required:true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <p>This field is required</p>}


                <label>Name</label>
                <input name="name"
                    ref={register({required:true, maxLength:10 })}
                />
                {errors.name && errors.name.type === 'required' && <p>This name field is required</p>}
                {errors.name && errors.name.type === 'maxLength' && <p>Your input exceed maximum length</p>}
                

                <label>Password</label>
                <input name="password" type="password"
                    ref={register({required:true, minLength:6 })}
                />
                {errors.password && errors.password.type === 'required' && <p>This password field is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p>Your input exceed minimum length</p>}


                <label>Password Required</label>
                <input
                    name="password_Required" type="password"
                    ref={register({ required: true,
                        validate: value => value === password.current })}
                />
                {errors.password_Required && <p>The password is not correct.</p>}


                {errorFromSubmit && <p>{errorFromSubmit}</p>}


                <input type="submit" disabled={loading} />
                <Link style={{color:"gray", textDecoration:"none"}}>이미 아이디가 있다면..</Link>
            </form>
        </div>
    )
}

export default RegisterPage