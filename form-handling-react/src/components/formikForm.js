import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the validation schema using Yup
const validationSchema = Yup.object({
    username: Yup.string()
        .matches(
            /^[a-zA-Z0-9_]+$/,
            'username must be one word and contain only letters, numbers, or underscores.'
        )
        .required('username is required.'),
    email: Yup.string().required('Email address is required.')
        .email('Invalid email address.'),
    password: Yup.string().required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.'),
});

const formikForm = () => {
    // Initial values for the form fields
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    // Function to handle form submission
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        // Here you can add your API call or other submission logic
        console.log("Form submitted successfully!", values);
        
        // Simulating an async process
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false); // Resetting the form submission state
            resetForm(); // Resetting the form after successful submission
        }, 400);
    };

    return (
        <div className="registration-container p-6 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto my-10">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema} // Use the Yup schema here
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* username Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">username</label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting} // Disable the button while the form is submitting
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default formikForm;