import type { User } from './user'


import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'


export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username,password } = await req.body
  // GRAB FROM DB and compare hash BEFORE ASSIGNING USER
   try{
    if(username === "admin" && password === "admin"){
    const user = { isLoggedIn: true, username} as User
    req.session.user = user
    await req.session.save()
    res.json(user)
  }
  else{
    res.status(403).json({ message: "Bad Login" })
  }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
