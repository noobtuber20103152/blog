import Head from "next/Head";
import React, { useState } from "react";
import { useRouter } from "next/router"
import Link from "next/link"
import Sidebar from "../siderbar/Sidebar";
function Login() {
    const router = useRouter();
    const [alert, setalert] = useState(false);
    const [data, setdata] = useState({ username: "", password: "" })
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
                    setalert(true);
                    setTimeout(() => {
                        setalert(false);
                    }, 3000);
                }
                else {
                    window.localStorage.setItem('token', resdata.token)
                    setdata({ username: "", password: "" });
                    router.push("/");
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
            <Sidebar />
            <div class="w-full flex flex-wrap">
                <div class="w-full md:w-1/2 flex flex-col">

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl">Welcome.</p>
                        {alert && <div class="flex p-4 mb-4 text-sm mt-5 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div className="font-semibold">
                                Username or password incorrect !
                            </div>
                        </div>}
                        <div class="flex flex-col pt-3 md:pt-8" >
                            <div class="flex flex-col pt-4">
                                <label for="email" class="text-lg">Username</label>
                                <input onChange={onchange} type="username" name="username" id="username" placeholder="xyz" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg">Password</label>
                                <input onChange={onchange} type="password" name="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <button onClick={submit} value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" >Log In</button>
                        </div>
                        <div class="text-center pt-12 pb-12">
                            <p>Don't have an account? <Link href="/components/auth/Register"> Register here.</Link></p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random/900×700/?code" />
                </div>
            </div>
        </>
    )
}

export default Login