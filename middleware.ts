import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoutes = createRouteMatcher([
//   '/api/webhook/clerk',
//   '/api/webhook/stripe',
// ])

export default clerkMiddleware((auth, req) => {
  // if(isProtectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}