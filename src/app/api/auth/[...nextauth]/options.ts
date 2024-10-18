import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
       CredentialsProvider({
        name: 'credentials',
        credentials: {
            username:  {
                label: 'Username',
                type: 'text',
                placeholder: 'Enter your username'
            },
        password: {
                label: 'Password',
                type: 'password',
                placeholder: 'Enter your password'
            }
        }, 
        async authorize(credentials) {
            const user = { id: '32', name: 'paccy', password: 'password'}
            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            }
            else
            return null
        },
       }
)
    ],
}