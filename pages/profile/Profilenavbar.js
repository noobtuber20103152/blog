import React from 'react'
import { useRouter } from "next/router"
import Link from "next/link"
function Profilenavbar() {
  const router = useRouter();
  const logout = () => {
    window.localStorage.removeItem("token");
    // router.push("/")
  }
  return (
    <>
      <nav className="border-b px-4 py-2 bg-white">
        <div className="flex flex-wrap items-center justify-between md:justify-around">
          <div className="space-x-4">
            {/* <a className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="">Share</a> */}
            <Link href="/">
              <a className="inline-block text-blue-500 font-semibold text-sm" onClick={logout} href="">Logout</a>
            </Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Profilenavbar