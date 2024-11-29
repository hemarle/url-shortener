import { useMutation } from "@tanstack/react-query"
import instance from "../../instance"

export function useRegister(){
    const register=async(payload:{name:string, email:string, password:string})=>{
const {data}= await instance.post( `/api/auth/register`, payload)
return data    
}

const mutate= useMutation({
    mutationFn:register
})
return mutate
}



interface ILoginResponse{
    token:string
}
export function useLogin(){
    const login=async(payload:{ email:string, password:string}):Promise<ILoginResponse>=>{
const {data}= await instance.post( `/api/auth/login`, payload)
return data    
}

const mutate= useMutation({
    mutationFn:login
})
return mutate
}