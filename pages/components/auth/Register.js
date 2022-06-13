import Head from "next/Head";
import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router"
import Sidebar from "../siderbar/Sidebar";
function Register() {
    const router = useRouter();
    const [disabled, setdisabled] = useState(true);
    const [alert, setalert] = useState(false);
    const [data, setdata] = useState({ username: "", email: "", password: "" })
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        if (data.username.length && data.email.length && data.password.length) {
            setdisabled(false);
        }
        else {
            setdisabled(true)
        }
        console.log(disabled);
    }, [data])
    const submit = async () => {
        fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(resdata => {
                console.log(resdata);
                if (resdata.status == 400) {
                    setalert(true);
                }
                else {
                    router.push("/components/auth/Login");
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
            <Sidebar/>
            <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/2 flex flex-col">

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl">Welcome.</p>
                        {alert && <div class="flex p-4 mb-4 text-sm mt-5 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div className="font-semibold">
                                Username already exists !
                            </div>
                        </div>}
                        <div class="flex flex-col pt-3 md:pt-8" >
                            <div class="flex flex-col pt-4">
                                <label for="email" class="text-lg">Username</label>
                                <input onChange={onchange} type="text" name="username" id="username" placeholder="xyz" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="flex flex-col pt-4">
                                <label for="email" class="text-lg">Email</label>
                                <input onChange={onchange} type="email" name="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg">Password</label>
                                <input onChange={onchange} type="password" name="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <button disabled={disabled} onClick={submit} value="Log In" class={`opacity-${disabled ? "25" : "100"} bg-blue-600 text-white font-bold text-lg hover:cursor-pointer hover:${disabled ? "bg-blue-600" : "bg-blue-800"}  p-2 mt-8`} >Register</button>
                        </div>
                        <div class="text-center pt-12 pb-12">
                            <p>Already have an account? <Link href="/components/auth/Login"> Login here </Link></p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random/900×700/?code" />
                </div>
            </div>
        </>
    );
}

export default Register;
