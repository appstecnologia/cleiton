
"use client"
import Image from "next/image";
import LogoChatuba from "@/components/image.png"
import React from "react";
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";
export default function Login() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"),
            password: formData.get("senha")
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/home"
        })
    }

    return (
        <div className="h-screen flex justify-center items-center bg-azulChatuba px-5 ">
            <div className="bg-amareloChatuba  rounded-lg w-96 max-w-full flex justify-center itens-center flex-col drop-shadow-2xl " >
                <div className="flex justify-center itens-center ">
                    <Image priority alt="Logo Chatuba" style={{ width: "220px" }} src={LogoChatuba} className="w-96 "></Image>
                </div>
                <form onSubmit={login} className="flex justify-center itens-center flex-col gap-3 p-4 bg-brancoChatuba rounded-b-lg ">
                    <h2 className="font-bold text-sm w-full text-azulChatuba flex justify-center itens-center">Sic - Sistema de Integração Corporativa</h2>
                    <label className="input input-bordered flex items-center gap-2 bg-brancoChatuba text-pretoChatuba border-azulChatuba">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input autoComplete="off" type="email" name="email" className="grow input-md" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-brancoChatuba text-pretoChatuba border-azulChatuba">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 " ><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" name="senha" className="grow input-md" placeholder="Senha" />
                    </label>
                    {error === "CredentialsSignin" && <div className="flex justify-center itens-center"><div className="badge badge-error gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        Login Ou senha Inválido !
                    </div></div>}
                    <input
                        type="submit"
                        value="Entrar"
                        className="btn btn-primary bg-azulChatuba text-base-content border-azulChatuba hover:bg-amareloChatuba hover:text-pretoChatuba"
                    />
                    <a href="/" className="Link text-vermelhoChatuba flex justify-center itens-center">Esqueceu Sua Senha ?</a>
                </form>
            </div>

        </div>
    )
}