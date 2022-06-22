import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
function Commentbox(props) {

    const [commentdata, setcommentdata] = useState({ author: "", title: "", message: "", image: "" })

    const onchange = (e) => {
        setcommentdata({ ...commentdata, [e.target.name]: e.target.value })
    }
    const submit = async () => {
        commentdata.author = props.author;
        commentdata.image = props.image;
        commentdata.title = props.title;
        // console.log(commentdata);
        let url = "http://localhost:3000/api/comment/uploadcomment";
        const data = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentdata)
        });
        data = await data.json();
        if (data.success == "success") {
            toast.success("Comment written successfully", {
                position: "top-left"
            })
            setcommentdata({ author: "", message: "", title: "", image: "" })
        }
        else {
            toast.warn("Something error occured", {
                position: "top-left"
            })
        }
    }
    return (
        <>
            <ToastContainer />
            <div class="md:w-1/2 w-full bg-white p-2 pt-4 rounded shadow-lg">
                <div class="flex ml-3">
                    <div class="mr-3">
                        <img height={50} width={50} src={props.image} alt="" class="rounded-full" />
                    </div>
                    <div>
                        <h1 class="font-semibold">{props.author}</h1>
                        <p class="text-xs text-gray-500">{props.about}</p>
                    </div>
                </div>
                <div class="mt-3 p-3 w-full">
                    <textarea value={commentdata.message} name="message" onChange={onchange} rows="3" class="border p-2 rounded w-full" placeholder="Write something..."></textarea>
                </div>
                <div class="flex  mx-3">
                    <div>
                        <button onClick={submit} class="px-4 mx-1 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
                    </div>
                    <div>
                        <Link href={`/comment/${props.title}`}>
                            <button class="px-4 py-1 mx-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Comment Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commentbox