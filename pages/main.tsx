import React from 'react'
import useUser from 'lib/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetchJson from 'lib/fetchJson'

export default function SgProfile() {
  const { user, mutateUser } = useUser({
    redirectTo: '/',
  })

  const router = useRouter()

  return (
   <div>

<a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault()
                    mutateUser(
                      await fetchJson('/api/logout', { method: 'POST' }),
                      false
                    )
                    router.push('/login')
                  }}
                >
                  Logout
                </a>

   </div>
  )
}
