import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { mock } from 'node:test';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        // call api for check authorize for username
        const mockUser = {
          id: '1',
          name: 'jay',
          email: 'mail@mail.com',
          password: 'password',
          hashedPassword: 'password',
        };
        const user = mockUser;
        if (!user) return null;
        // const passwordMatch = await bcrypt.compare(
        //   credentials.password,
        //   user.hashedPassword
        // );
        let passwordMatch = false;
        if (
          credentials.email === user.email &&
          credentials.password === user.password
        )
          passwordMatch = true;
        return passwordMatch ? user : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
