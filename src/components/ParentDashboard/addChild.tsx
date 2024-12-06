import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

interface AddChildFormProps {
  onSubmit: (values: { name: string; age: number; grade: string; email: string; password: string }) => void
}

const AddChildForm: React.FC<AddChildFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Child name is required'),
    age: Yup.number()
      .required('Child age is required')
      .positive('Age must be positive')
      .integer('Age must be an integer'),
    grade: Yup.string().required('Grade is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  })

  return (
    <Formik
      initialValues={{ name: '', age: '', grade: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const transformedValues = {
          ...values,
          age: Number(values.age), // Explicitly convert age to a number
        }

        // Generate a unique ID for the child (you can use UUID or any method)
        const childId = `child-${new Date().getTime()}`; // Unique ID based on current time
        const childData = { ...transformedValues, id: childId };

        // Save the child data in localStorage
        const existingChildren = JSON.parse(localStorage.getItem('children') || '[]');
        existingChildren.push(childData);
        localStorage.setItem('children', JSON.stringify(existingChildren));

        // Optionally, you can pass this ID back to the parent via onSubmit
        onSubmit(childData); // Pass child data including ID to the parent onSubmit

        resetForm(); // Reset the form after submission
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out dark:text-white">
          {/* Child Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Child Name</label>
            <Field
              name="name"
              className="mt-1 block w-full border rounded p-3 bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>

          {/* Age Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
            <Field
              name="age"
              type="number"
              className="mt-1 block w-full border rounded p-3 bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && touched.age && <div className="text-red-500 text-sm mt-1">{errors.age}</div>}
          </div>

          {/* Grade Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Grade</label>
            <Field
              name="grade"
              className="mt-1 block w-full border rounded p-3 bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.grade && touched.grade && <div className="text-red-500 text-sm mt-1">{errors.grade}</div>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full border rounded p-3 bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full border rounded p-3 bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && touched.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg mt-4 transition-colors duration-300 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register Child
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AddChildForm
