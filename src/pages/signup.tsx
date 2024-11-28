import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import FormField from '../components/Form/Field'
import LayoutGuest from '../layouts/Guest'
import Divider from '../components/Divider'
import { useRouter } from 'next/router'

type SignUpForm = {
  name: string
  email: string
  password: string
  repeatPassword: string
}

const SignUpPage = () => {
  const router = useRouter()

  // Validation schema for form fields
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Repeat password is required'),
  })

  const handleSubmit = (formValues: SignUpForm) => {
    console.log('Sign-Up Form Values:', formValues)
    // Redirect or show a success message
    router.push('/login') // Navigate to login after sign-up
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl mt-12 mb-12">
          <h2 className="text-center text-2xl font-bold mb-6">Create an Account</h2>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              repeatPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <FormField label="Name" help={errors.name && touched.name ? errors.name : ''}>
                  <Field name="name" className="w-full p-2 border rounded" />
                </FormField>

                <FormField label="Email" help={errors.email && touched.email ? errors.email : ''}>
                  <Field name="email" type="email" className="w-full p-2 border rounded" />
                </FormField>

                <FormField label="Password" help={errors.password && touched.password ? errors.password : ''}>
                  <Field name="password" type="password" className="w-full p-2 border rounded" />
                </FormField>

                <FormField
                  label="Repeat Password"
                  help={errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : ''}
                >
                  <Field name="repeatPassword" type="password" className="w-full p-2 border rounded" />
                </FormField>

                <Divider />

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-8 rounded-lg shadow-md"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <Divider />

          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="/admin-one-react-tailwind/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default SignUpPage
