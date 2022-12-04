import axios from "axios";
import React, { useRef } from "react";
import { Link , useNavigate } from "react-router-dom";




const LoginPage = () => {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const LoginUser =async (e:any) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/api/users/login' , {
                email:emailRef.current?.value,
                password:passwordRef.current?.value,
        })
        if(res.status === 200){
            navigate('/todo-app')    
        }
        }catch(error){
            console.log(error)
         }
    }   
    return (
        <>
            <div className="flex justify-center h-screen w-screen items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center " >
            
                <h1 className="text-center text-2xl font-bold text-gray-600 mb-6 ">LOGIN</h1>
             
                    <form onSubmit={(e) => LoginUser(e)} className='space-y-2'>
                        <input type="email" ref={emailRef} className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 "
                            placeholder="Email" />
                         <input type="password" ref={passwordRef} className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1  "
                            placeholder="Password" />               
                        <div className=" flex justify-end items-center gap-x-1">
                        <div>
                           <Link to="/signup-page" className="text-sm text-slate-400  hover:text-gray-500">Dont have an account?</Link>
                        </div>
                    </div>
                        <button type="submit" className="py-4 bg-black w-full rounded text-blue-50 font-bold hover:bg-gray-500"> LOGIN</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;