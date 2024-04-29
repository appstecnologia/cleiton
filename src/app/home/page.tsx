import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import LogoutButton from "../../components/LogoutButton";
import Navbar from "../../components/NavBar";

export default async function Home() {

    const session = await getServerSession();

    if (!session) {
        redirect("/")
    }

    return (
        <div>
            <Navbar />
            <div className="h-screen flex justify-center items-center bg-brancoChatuba">
                <div>  <h1>Olá {session?.user?.name} </h1></div>

                <h2>Pagina Home</h2>
            </div>
        </div>
    )
}