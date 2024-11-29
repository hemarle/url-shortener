import { useLogin} from '../../hooks/api/auth/useAuth'
import { Field, Form, Formik } from 'formik'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Login() {
  const loginAPI= useLogin()
  const navigate= useNavigate()
  return (
    <div className="">

{/* Form */}

 <div className="  flex min-h-[80vh] justify-center items-center">
<Formik
initialValues={{

email:"",
password:""
}}
onSubmit={(values)=>{
loginAPI.mutate({
...values
}, {
onSuccess(data){
Cookies.set("access", data?.token)
toast.dismiss()
toast.success(`Login Successfully`)
navigate("/dashboard")


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
{/* <div className="w-full col-span-3">
  <p className='text-white'>Name:</p>
    <Field name="name" className="input input-bordered w-full"/>
</div> */}
<div className="w-full col-span-3">
  <p className='text-white'>Email:</p>
    <Field name="email" type="email" className="input input-bordered w-full" required/>
</div>
<div className="w-full col-span-3">
  <p className='text-white'>Password:</p>
    <Field name="password" type="password" className="input input-bordered w-full" required/>
</div>
<div className="flex justify-center">
  <button className="btn" disabled={loginAPI.isLoading}>Login</button>
</div>

    </Form>
</Formik>
 </div>
      
    </div>
  )
}

export default Login
