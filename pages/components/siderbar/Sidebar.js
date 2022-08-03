import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Person } from "react-bootstrap-icons";
import { BsCurrencyDollar } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineLogout } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
function Sidebar() {
  const router = useRouter();
  const [token, settoken] = useState(undefined);
  const [downarrow, setdownarrow] = useState(true);
  const [phonepay, setphonepay] = useState(false);
  const [userdata, setuserdata] = useState({
    username: "",
    about: "",
    image: "",
  });
  const pay = () => {
    setphonepay(true);
  };
  const myLoader = ({ src }) => {
    return src;
  };
  const dropdown = () => {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
    setdownarrow(!downarrow);
    console.log(downarrow);
  };
  const opeSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("hidden");
  };
  const [login, setlogin] = useState(false);
  const logout = () => {
    toast.success("logout successfully", {
      position: toast.POSITION.TOP_LEFT,
    });
    window.localStorage.removeItem("token");
    setTimeout(() => {
      router.push("/");
    }, 1000);
    setlogin(false);
  };
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token) {
      settoken(window.localStorage.getItem("token"));
      setlogin(true);
    }
    console.log(login);
  }, []);
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (!token) {
      // router.push("/components/auth/Login")
    } else {
      fetch("/api/auth/getuser", {
        method: "GET",
        headers: {
          token: window.localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((resdata) => {
          // console.log(resdata);
          if (resdata.isLoggedIn == true) {
            setuserdata({
              username: resdata.username,
              about: resdata.about,
              image: resdata.image,
            });
          } else {
            // router.push("/components/auth/Login")
          }
        });
    }
  }, []);
  return (
    <>
      <Head>
        <link href="/dist/tailwind.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
        />
      </Head>
      <ToastContainer />
      <span
        className="z-10 fixed  text-black text-4xl top-5 left-4 cursor-pointer"
        onClick={opeSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-blue-200 rounded-md"></i>
      </span>
      <div className="z-10 sidebar hidden border shadow-lg fixed md:my-2 md:ml-2 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-black text-[15px] ml-3">Vloger</h1>
            <i
              className="bi bi-x cursor-pointer text-black ml-28 "
              onClick={opeSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer border text-black">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-black">
          <i className="bi bi-house-door-fill"></i>
          <Link href="/">
            <span className="text-[15px] ml-4  font-bold">Home</span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-black">
          <i className="bi bi-bookmark-fill"></i>
          <Link href="/post/Createpost">
            <span className="text-[15px] ml-4  font-bold">Create post</span>
          </Link>
        </div>
        {token && (
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white text-black">
            <Person className="text-xl" />
            <Link href={`/profile/${userdata.username.split(" ").join("-")}`}>
              <span className="text-[15px] ml-4  font-bold">Profile</span>
            </Link>
          </div>
        )}
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white ">
          {login && <MdOutlineLogout />}
          {!login && <i className="bi bi-box-arrow-in-right"></i>}
          {login && (
            <span onClick={logout} className="text-[15px] ml-4  font-bold">
              Logout
            </span>
          )}
          {!login && (
            <Link href="/components/auth/Login">
              <span className="text-[15px] ml-4  font-bold">Login</span>
            </Link>
          )}
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 hover:text-white ">
          {<BsCurrencyDollar className="inline" />}
          <button onClick={pay}>
            <span className="text-[15px] ml-4  font-bold">
              Want to help me?
            </span>
          </button>
        </div>
        <div>
          {phonepay && (
            <Image
              height={150}
              width={200}
              src="/images/phonepay.jpg"
              loader={myLoader}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
