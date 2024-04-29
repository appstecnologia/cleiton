import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',

            credentials: {
                email: { label: "email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    return null
                }
                if (credentials.email === "cleiton.araujo@appstecnologia.com" && credentials.password === '123') {
                    return {
                        id: "1",
                        name: "cleiton",
                        email: "cleiton.araujo@appstecnologia.com"
                    };
                } else { return null }
            }
        })
    ]
})

export { handler as GET, handler as POST }
