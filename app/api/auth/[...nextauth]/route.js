import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {
        
    },
    async signIn({ profile }) {
        try {
            await connectDB();

            // check if user exists


            // create a new user

            return true
        } catch (error) {
            console.error(error)
        }
    }
});

export { handler as GET, handler as POST }