"use client"
import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import Navbar from "../../components/NavBar";

export default async function Home() {
    const session = await getServerSession();
    if (!session) {
        redirect("/")
    }

    return (

        <div>
            <Navbar />
            <div className="h-screen flex justify-center items-center bg-brancoChatuba px-5 ">
                <h1>Olá {session?.user?.name} </h1>
            </div>

        </div>
    )
}