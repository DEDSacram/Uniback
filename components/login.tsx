import React, { useState } from 'react'
import useUser from 'lib/useUser'
import Form from 'components/Form'
import fetchJson, { FetchError } from 'lib/fetchJson'




export default function Login() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/main',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  return (
        <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault()
            // HASH PASSWORD
            const body = {
              username: event.currentTarget.username.value,
              password: event.currentTarget.password.value,
            }

            try {
              mutateUser(
                await fetchJson('/api/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(body),
                })
              )
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message)
              } else {
                console.error('An unexpected error happened:', error)
              }
            }
          }}
        />
  )
}
