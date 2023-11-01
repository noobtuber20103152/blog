import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router"
import Sidebar from "../../components/siderbar/Sidebar";
import { Eye, Lock } from 'react-bootstrap-icons';
import Header from "../profile/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

function Register() {
    const router = useRouter();
    const [disabled, setdisabled] = useState(true);
    const [alert, setalert] = useState(false);
    const [passtype, setpasstype] = useState("password");
    const changePasstype = () => {
        if (passtype == "password") {
            setpasstype("text");
        }
        else {
            setpasstype("password")
        }
    }
    const [data, setdata] = useState({ username: "", email: "", password: "", image: "", about: "" })
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        if (data.username.length && data.email.length && data.password.length && data.image.length && data.about.length) {
            setdisabled(false);
        }
        else {
            setdisabled(true)
        }
        console.log(disabled);
    }, [data])
    const submit = async () => {
        fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(resdata => {
                console.log(resdata);
                if (resdata.status == 400) {
                    // setalert(true);
                    toast.warn("opps! username or email already used", {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
                else {
                    toast.success("woww! registration successfully", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    setTimeout(() => {
                        router.push("/auth/login");
                    }, 1000);
                }
                setTimeout(() => {
                    setalert(false)
                }, 3000);
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <Head>
                <title>
                    Register Page
                </title>
            </Head>
            <Sidebar />
            <ToastContainer />
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Welcome.</p>
                        {alert && <div className="flex p-4 mb-4 text-sm mt-5 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div className="font-semibold">
                                Username or email already exists !
                            </div>
                        </div>}
                        <div className="flex flex-col pt-3 md:pt-8" >
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Username</label>
                                <input onChange={onchange} type="text" name="username" id="username" placeholder="xyz" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input onChange={onchange} type="email" name="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input onChange={onchange} type={passtype} name="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                {passtype == "password" && <span className="mt-2 text-right hover:cursor-pointer" onClick={changePasstype}  ><Eye className="text-left text-xl" /> </span>}
                                {passtype == "text" && <span className="mt-2 text-left hover:cursor-pointer" onClick={changePasstype}  ><Lock className="text-left text-xl" /> </span>}
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Profile image link</label>
                                <input onChange={onchange} type="text" name="image" id="image" placeholder="image" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg ">Something about yourself</label>
                                <textarea cols="30" rows="3" onChange={onchange} type="text" name="about" id="about" placeholder="i'm a gamer." className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <button disabled={disabled} onClick={submit} value="Log In" className={`opacity-${disabled ? "25" : "100"} bg-blue-600 text-white font-bold text-lg hover:cursor-pointer hover:${disabled ? "bg-blue-600" : "bg-blue-800"}  p-2 mt-8`} >Register</button>
                        </div>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account? <Link href="/auth/login"> Login here </Link></p>
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2 w-full shadow-2xl">
                    <Header imgsrc={data.image} about={data.about} username={data.username} />
                </div>
            </div>
        </>
    );
}

export default Register;
