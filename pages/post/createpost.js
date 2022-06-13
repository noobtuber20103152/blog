import React, { useEffect } from 'react'
import Head from "next/head"
import { useRouter } from "next/router"
import Sidebar from '../components/siderbar/Sidebar';
function createpost() {
    const router = useRouter();
    useEffect((e) => {
        let token = window.localStorage.getItem("token");
        if (!token) router.push("/components/auth/Login")
    }, [])
    return (
        <>
            <Head>
                <title>Create post</title>
            </Head>
            <Sidebar />
            create post
        </>
    )
}

export default createpost