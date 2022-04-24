import Head from "next/head";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: async () => {
      console.log(formik.values);
      setMessage("Form submitted");
      setSubmitted(true);

      const { name, email, message } = formik.values;

      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      }).then((res) => {
        if (res.status === 200) {
          formik.values.email = '';
          formik.values.name = '';
          formik.values.message = '';
          setTimeout(() => {
            setSubmitted(false)
          }, 2000);
        }
      })
      
  
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <div div className="flex flex-col items-center min-h-screen py-10">
      <Head>
        <title>Daniel Rivas - Contact me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This section have a contact form to send me a message to talk about a any future project that you have in your mind."
        />
      </Head>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Tell me your project idea and i will contact you as soon as
              possible.
            </p>
          </div>
          <div
            hidden={!submitted}
            className="bg-blue-200 border-blue-600 text-blue-800 p-4 mb-4 border rounded"
            role="alert"
          >
            {message}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {formik.errors.name && (
                      <div className="text-red-600">{formik.errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {formik.errors.email && (
                      <div className="text-red-600">{formik.errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {formik.errors.message && (
                      <div className="text-red-600">{formik.errors.message}</div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black hover:border hover:border-black transition-colors duration-300 delay-75 ease-in-out rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
