import NextAuth  from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import googleProvider from 'next-auth/providers/google'

export const authOptions  = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })

    ],
    secret: process.env.SECRET

}
export default NextAuth(authOptions);