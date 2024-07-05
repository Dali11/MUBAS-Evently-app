import { Roles } from "@/types/globals"
import { auth } from "@clerk/nextjs/server"

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth()

  if (!sessionClaims || !sessionClaims.metadata) {
    // Handle the case where sessionClaims or sessionClaims.metadata is undefined
    throw new Error('Session claims or metadata are not present');
  }
  return sessionClaims.metadata.role === role;
}