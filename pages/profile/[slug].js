
import Link from "next/link"
import Profilenavbar from './Profilenavbar'
import Header from './Header'
import { useRouter } from "next/router"
import Post from "./Post"
import Sidebar from '../components/siderbar/Sidebar'
import Head from "next/head"
import { useEffect, useState } from 'react'
function profile() {
    const router = useRouter();
    const [userdata, setuserdata] = useState({ username: "", about: "", image: "" })
    const [postdata, setpostdata] = useState([])
    const { slug } = router.query;
    const [profile, setprofile] = useState(false);
    useEffect(() => {
        let token = window.localStorage.getItem("token");
        if (!token) {
            router.push("/components/auth/Login")
        }
        else {
            fetch("http://localhost:3000/api/auth/getuser", {
                method: "GET",
                headers: {
                    "token": window.localStorage.getItem("token")
                }
            })
                .then(response => response.json())
                .then(resdata => {
                    // console.log(resdata);
                    if (resdata.isLoggedIn == true) {
                        setuserdata({ username: resdata.username, about: resdata.about, image: resdata.image });
                        console.log(userdata)
                        fetch("http://localhost:3000/api/fetchdata/fetchdatatouser", {
                            method: "GET",
                            headers: {
                                "author": resdata.username
                            }
                        })
                            .then(res => res.json())
                            .then(responsedata => {
                                console.log(responsedata);
                                setpostdata(responsedata)
                            })
                    }
                    else {
                        router.push("/components/auth/Login")
                    }
                })

            setprofile(true)
        }
    }, []);
    return (
        <>
            <Head>
                <title>{userdata.username}</title>
            </Head>
            {profile && <div>
                <Sidebar />
                <Profilenavbar />
                <main class="bg-gray-100 bg-opacity-25">
                    <div class="lg:w-8/12 lg:mx-auto mb-8">
                        <Header postno={postdata.length} imgsrc={userdata.image} about={userdata.about} username={userdata.username} />
                        <div class="px-px md:px-3">
                            <ul class="flex items-center justify-around md:justify-center space-x-12  uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
                                <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                                    <a class="inline-block p-3" href="#">
                                        <i class="fas fa-th-large text-xl md:text-xs"></i>
                                        <span class="hidden md:inline">post</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="flex flex-wrap -mx-px md:-mx-3 px-3">
                                {postdata && postdata.map((e) => {
                                    return <>
                                        <Post title={e.title} url={e.title} imgsrc={e.bgimage} />
                                    </>
                                })}
                            </div>
                            {postdata.length == 0 && <h1 className="text-5xl text-gray-600 text-medium  my-6 font-sans text-center" >You have no post uploaded yet</h1>}
                        </div>
                    </div>
                </main>
            </div>}
        </>
    )
}
export default profile