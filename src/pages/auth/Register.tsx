import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useLogin, useRegister } from '../../hooks/api/auth/useAuth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

function Register() {
  const registerAPI= useRegister()
  const loginAPI= useLogin()
  const navigate= useNavigate()
  return (
   <div>

{/* Form */}

 <div className="  flex min-h-[80vh] justify-center items-center">
<Formik
initialValues={{
name:"",
email:"",
password:""
}}
onSubmit={(values)=>{
registerAPI.mutate({
...values
}, {
onSuccess(registerResponse){

toast.dismiss()
// toast.success(`Account Created Successfully`)
loginAPI.mutate({
  email:values.email, password:values.password
},{
  onSuccess(loginResponse){

    toast.dismiss()
    toast.success(`Account Created Successfully`)
    Cookies.set("access", loginResponse.token )
    navigate("/dashboard")
  }
})
},
onError(err:any){
  console.log({err})
  toast.dismiss()
toast.error(err?.response?.data?.error)
}

})
}}
>
    <Form className='p-6 grid grid-cols-1  gap-4 w-full max-w-xl'>
<div className="w-full col-span-3">
  <p className='text-white'>Name:</p>
    <Field name="name" className="input input-bordered w-full" required/>
</div>
<div className="w-full col-span-3">
  <p className='text-white'>Email:</p>
    <Field name="email" type="email" className="input input-bordered w-full" required/>
</div>
<div className="w-full col-span-3">
  <p className='text-white'>Password:</p>
    <Field name="password" type="password" className="input input-bordered w-full"  required/>
</div>
<div className="flex justify-center">
  <button className="btn" disabled={loginAPI.isLoading || registerAPI.isLoading}>Register</button>
</div>

    </Form>
</Formik>
 </div>
      
    </div>
  )
}

export default Register
