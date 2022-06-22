import Head from "next/Head";
import React, { useState } from "react";
import { useRouter } from "next/router"
import Link from "next/link"
import Sidebar from "../siderbar/Sidebar";
import { Eye, Lock } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {

    const router = useRouter();
    const [data, setdata] = useState({ username: "", password: "" })
    const [passtype, setpasstype] = useState("password");
    const changePasstype = () => {
        if (passtype == "password") {
            setpasstype("text");
        }
        else {
            setpasstype("password")
        }
    }
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });

    }
    const submit = async () => {

        fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(resdata => {
                if (resdata.status == 400) {
                    toast.warn("opps! username or password invalid", {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
                else {
                    toast.success("logged in successfully", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    window.localStorage.setItem('token', resdata.token)
                    setdata({ username: "", password: "" });
                    setTimeout(() => {
                        router.push("/")
                    }, 1000);
                }
            }).catch((err) => {
                console.log(err.message);
            })
    }
    return (
        <>
            <Head>
                <title>
                    Login Page
                </title>
            </Head>
            <ToastContainer />
            <Sidebar />
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Welcome.</p>
                        <div className="flex flex-col pt-3 md:pt-8" >
                            <div className="flex flex-col pt-4">
                                <label htmlFo="email" className="text-lg">Username</label>
                                <input onChange={onchange} type="username" name="username" id="username" placeholder="xyz" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFo="password" className="text-lg">Password</label>
                                <input onChange={onchange} type={passtype} name="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                {passtype == "password" && <span className="mt-2 text-right hover:cursor-pointer" onClick={changePasstype}  ><Eye className="text-left text-xl" /> </span>}
                                {passtype == "text" && <span className="mt-2 text-left hover:cursor-pointer" onClick={changePasstype}  ><Lock className="text-left text-xl" /> </span>}
                            </div>
                            <button onClick={submit} value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" >Log In</button>
                        </div>
                        <div className="text-center pt-12 pb-12">
                            <p>Don't have an account? <Link href="/components/auth/Register"> Register here.</Link></p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random/900×700/?code" />
                </div>
            </div>
        </>
    )
}

export default Login