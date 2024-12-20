import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Field, Form, Formik } from 'formik'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import FormField from '../components/Form/Field'
import FormCheckRadio from '../components/Form/CheckRadio'
import Divider from '../components/Divider'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'

type LoginForm = {
  email: string // Updated from "login" to "email"
  password: string
  remember: boolean
}

const LoginPage = () => {
  const router = useRouter()

  const handleSubmit = (formValues: LoginForm) => {
    const storedUser = JSON.parse(localStorage.getItem('userDetails') || '{}')

    if (
      formValues.email === storedUser.email &&
      formValues.password === storedUser.password
    ) {
      // Redirect based on role
      if (storedUser.role === 'student') {
        router.push('/dashboard')
      } else if (storedUser.role === 'parent') {
        router.push('/parentdashboard')
      } else {
        console.error('Unknown role:', storedUser.role)
      }
    } else {
      alert('Invalid email or password!')
    }
  }

  const initialValues: LoginForm = {
    email: '', // Updated from "login" to "email"
    password: '',
    remember: true,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <h2 className="text-center text-2xl font-bold mb-6">Login to Your Account</h2>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Email" help="Please enter your email">
                <Field name="email" className="w-full p-2 border rounded" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" className="w-full p-2 border rounded" />
              </FormField>

              <FormCheckRadio type="checkbox" label="Stay logged in?">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <Divider />

              {/* Login Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-8 rounded-lg shadow-md"
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>

          <Divider />

          {/* Sign-Up Link */}
          <div className="text-center mt-4">
            <p>
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default LoginPage
