import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'

function RegisterPage() {
    const { register, watch, errors } = useForm({mode:'onChange'})

    const password = useRef()
    password.current = watch('password')
    console.log(watch('email','name','password', password.current))

    return (
        <div className="authWrap">
            <div className="form_title">
                <h3>Register</h3>
            </div>
            <form 
            // onSubmit={handleSubmit(onSubmit)}
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

                <input type="submit" />
                <Link style={{color:"gray", textDecoration:"none"}}>이미 아이디가 있다면..</Link>
            </form>
        </div>
    )
}

export default RegisterPage