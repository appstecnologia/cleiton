"use client"
import Image from "next/image";

import React from "react"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton"
export default async function Navbar() {
    const session = await getServerSession();

    if (!session) {
        redirect("/")
    }
    return (
        <div>

            <div className="navbar bg-amareloChatuba text-pretoChatuba">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amareloChatuba rounded-box w-52">
                            <li><a href="/home">  Home</a></li>
                            <li><a href="/dashboard"> Dashboard</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    {/* <Image priority alt="Logo Chatuba 2" style={{ width: "220px" }} src={Logo} className="w-96 "></Image> */}
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-end">
                    <LogoutButton />
                </div>
            </div>
        </div>

    )
}