import { withAuth } from "next-auth/middleware"

const ROLES = [1000,1002,1003,1004,1005]



export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log('Request received:', req)
    console.log('User token:', req.nextauth.token)
  },
  {
    callbacks: {

      authorized: ({ token }) => token?.rol?.some(rol => ROLES?.includes(rol) ),

    }
  }
)

export const config = {   matcher: [

], }
