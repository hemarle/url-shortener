import { useLogin} from '../../hooks/api/auth/useAuth'
import { Field, Form, Formik } from 'formik'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

function Login() {
  const loginAPI= useLogin()
  return (
    <div className="bg-gray-900 min-h-screen   p-8">
 
 <div className="relative w-full max-w-7xl mx-auto">
 
 <div className="flex justify-between items-center py-4 px-6">
   <div className="text-white text-3xl">Linkly</div>
   <div className="flex space-x-4">
     <button className="bg-gray-800 text-gray-400 border border-gray-700 rounded-full px-6 py-2 shadow-md">Login</button>
     <button className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md">Login Now</button>
   </div>
 </div>
 </div>

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
    <Field name="email" type="email" className="input input-bordered w-full"/>
</div>
<div className="w-full col-span-3">
  <p className='text-white'>Password:</p>
    <Field name="password" type="password" className="input input-bordered w-full"/>
</div>
<div className="flex justify-center">
  <button className="btn">Login</button>
</div>

    </Form>
</Formik>
 </div>
      
    </div>
  )
}

export default Login
