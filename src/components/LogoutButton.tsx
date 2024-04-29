"use client"
import { signOut } from "next-auth/react";
import React from "react";
export default function LogoutButton() {
    return (
        <button className="btn bg-azulChatuba text-brancoChatuba" onClick={() => signOut()} >
            sair
        </button>
    )
}