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
import Link from 'next/link'

type SignUpForm = {
  name: string
  email: string
  password: string
  repeatPassword: string
  role: string
}

const SignUpPage = () => {
  const router = useRouter()

  // Validation schema for form fields
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Repeat password is required'),
    role: Yup.string().required('Role is required'),
  })

  const handleSubmit = async (formValues: SignUpForm) => {
    try {
      console.log('Form Submitted:', formValues)

      // Save form data to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem('userDetails', JSON.stringify(formValues))
        console.log('User details stored in localStorage')
      }

      // Redirect to the login page
      await router.push('/login')
    } catch (error) {
      console.error('Error during sign-up submission:', error)
    }
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
              role: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Name Field */}
                <FormField label="Name" help={errors.name && touched.name ? errors.name : ''}>
                  <Field
                    name="name"
                    className={`w-full p-2 border rounded ${
                      errors.name && touched.name ? 'border-red-500' : ''
                    }`}
                  />
                </FormField>

                {/* Email Field */}
                <FormField label="Email" help={errors.email && touched.email ? errors.email : ''}>
                  <Field
                    name="email"
                    type="email"
                    className={`w-full p-2 border rounded ${
                      errors.email && touched.email ? 'border-red-500' : ''
                    }`}
                  />
                </FormField>

                {/* Password Field */}
                <FormField label="Password" help={errors.password && touched.password ? errors.password : ''}>
                  <Field
                    name="password"
                    type="password"
                    className={`w-full p-2 border rounded ${
                      errors.password && touched.password ? 'border-red-500' : ''
                    }`}
                  />
                </FormField>

                {/* Repeat Password Field */}
                <FormField
                  label="Repeat Password"
                  help={errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : ''}
                >
                  <Field
                    name="repeatPassword"
                    type="password"
                    className={`w-full p-2 border rounded ${
                      errors.repeatPassword && touched.repeatPassword ? 'border-red-500' : ''
                    }`}
                  />
                </FormField>

                {/* Role Field */}
                <FormField label="Role" help={errors.role && touched.role ? errors.role : ''}>
                  <Field
                    as="select"
                    name="role"
                    className={`w-full p-2 border rounded ${
                      errors.role && touched.role ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select Role</option>
                    <option value="school">School</option>
                    <option value="parent">Parent</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                  </Field>
                </FormField>

                <Divider />

                {/* Submit Button */}
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

          {/* Login Link */}
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link href="/login"
               className="text-blue-500 hover:underline">Login
            </Link>
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
