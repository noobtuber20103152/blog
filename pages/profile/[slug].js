
import Link from "next/link"
import Profilenavbar from './Profilenavbar'
import Header from './Header'
import { useRouter } from "next/router"
import Post from "./Post"
import Sidebar from '../components/siderbar/Sidebar'
import Head from "next/head"
import { useEffect, useState } from 'react'
function Profile() {
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
            fetch("/api/auth/getuser", {
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
                        fetch("/api/fetchdata/fetchdatatouser", {
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
                <main className="bg-gray-100 bg-opacity-25">
                    <div className="lg:w-8/12 lg:mx-auto mb-8">
                        <Header postno={postdata.length} imgsrc={userdata.image} about={userdata.about} username={userdata.username} />
                        <div className="px-px md:px-3">
                            <ul className="flex items-center justify-around md:justify-center space-x-12  uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
                                <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                                    <a className="inline-block p-3" href="#">
                                        <i className="fas fa-th-large text-xl md:text-xs"></i>
                                        <span className="hidden md:inline">post</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-wrap -mx-px md:-mx-3 px-3">l
                                {postdata && postdata?.map((e) => {
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
export default Profile