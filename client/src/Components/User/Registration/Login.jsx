import React, { useState } from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";
import { SignupApi, SigninApi, OtpVerificationApi } from './LoginApis';
import { useMutation } from '@tanstack/react-query';
import * as yup from 'yup';

function Login() {
  let [Account, SetAccount] = useState("signin");

  //State for Setting email
  let [Email, setEmail] = useState();

  //Otp values
  let [value1, setValue1] = useState();
  let [value2, setValue2] = useState();
  let [value3, setValue3] = useState();
  let [value4, setValue4] = useState();

  //Storing User entered Otp
  let UserOtp = Number(`${value1}${value2}${value3}${value4}`);

  //Formik Structure for Signin 
  let initialValuesSignin = {
    email: '',
    password: ''
  };
  let validationSchemaSignin = yup.object({
    email: yup.string().email().required('Email Required'),
    password: yup.string().required('Password Required'),
  });

  //Api Calling for Signin
  let SigninMutation = useMutation({
    mutationFn: SigninApi,
    onSuccess: () => {
      console.log('User Signed in Successfully');
    },
    onError: (error) => {
      console.log('Some Error in Signing', error.message);
    }
  });
  let onSubmitSignin = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    SigninMutation.mutate(values);
  };

  //Formik Structure for Signup
  let initialValuesSignup = {
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
  };
  let validationSchemaSignup = yup.object({
    fullname: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
    confirmpassword: yup.string().required('Required').oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  //Api Calling for Signup 
  let SignUpMutation = useMutation({
    mutationFn: SignupApi,
    onSuccess: () => {
      console.log('User Signed up Successfully');
      SetAccount('otp');
    },
    onError: () => {
      console.log('Some error in User Signup');
    }
  });
  let onSubmitSignup = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    SignUpMutation.mutate(values);
    setEmail(values.email);
  };

  //Api Calling for Otp
  let UserData = {
    otp: UserOtp,
    email: Email
  };
  let OtpVerificationMutations = useMutation({
    mutationFn: OtpVerificationApi,
    onSuccess: () => {
      SetAccount('signin');
      console.log('otp Verificated');
    },
    onError: () => {
      console.log('Some error in otp verification');
    }
  });

  return (
    <>
      {Account === "signin" ? (
        <div className="max-w-full lg:w-[800px] lg:m-auto lg:mt-4 lg:shadow-4xl shadow-2xl m-3 pt-10">
          <h1 className="text-xl font-bold">Login</h1>
          <p className="my-5">Enter Login details to get access</p>
          <Formik key='signin' initialValues={initialValuesSignin} validationSchema={validationSchemaSignin} onSubmit={onSubmitSignin}>
            {(formik) => {
              return (
                <Form className="flex justify-start flex-col px-3 py-6 lg:px-8 ">
                  <label className="text-start font-medium" htmlFor="email">
                    Username Or Email
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="email"
                      type="email"
                      placeholder="Username / Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <br />
                  <label className="text-start font-medium" htmlFor="password">
                    Password
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <br />
                  <p className="text-primary font-light text-start hover:cursor-pointer text-HeroButtonOne">
                    Forgot Password?
                  </p>
                  <p className="text-start mt-5">
                    Don't have an account?{" "}
                    <span
                      className="hover:cursor-pointer text-primary font-light text-HeroButtonOne"
                      onClick={() => {
                        SetAccount("signup");
                      }}
                    >
                      Sign Up
                    </span>{" "}
                    here
                  </p>
                  <button
                    className="text-white mt-5 bg-HeroButtonOne w-32 h-14"
                    type="submit" disabled={!formik.isValid || formik.isSubmitting}
                  >
                    login
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : Account === 'otp' ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='py-10 px-5 md:py-20 md:px-36 bg-bgwhite shadow-2xl'>
            <h1 className='text-2xl font-bold'>Verify</h1>
            <p className='mt-2 text-sm text-neutral-400'>Your Code was sent to you via email</p>
            <div className='my-4'>
              <input type="number" onChange={(e) => { setValue1(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
              <input type="number" onChange={(e) => { setValue2(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
              <input type="number" onChange={(e) => { setValue3(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
              <input type="number" onChange={(e) => { setValue4(e.target.value) }} name="" id="" className='h-10 w-10 text-center rounded-md mx-2  border border-neutral-400' />
            </div>
            <button className='bg-blue-600 text-white px-4 py-3 rounded-md' type="submit" onClick={() => {
              OtpVerificationMutations.mutate(UserData);
            }}>Verify</button>
          </div>
        </div>
      ) : (
        <div className="max-w-full lg:w-[800px] lg:m-auto lg:mt-4 lg:shadow-4xl shadow-2xl m-3 pt-10">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="my-5">Create your account to get full access</p>
          <Formik key='signup' initialValues={initialValuesSignup} validationSchema={validationSchemaSignup} onSubmit={onSubmitSignup}>
            {(formik) => {
              return (
                <Form className="flex justify-start flex-col px-3 py-6 lg:px-8">
                  <label className="text-start font-medium" htmlFor="fullname">
                    Full Name
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="fullname"
                      type="text"
                      placeholder="Enter Full Name"
                    />
                    <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <br />
                  <label className="text-start font-medium" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <br />
                  <label className="text-start font-medium" htmlFor="password">
                    Password
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <br />
                  <label className="text-start font-medium" htmlFor="confirmpassword">
                    Confirm Password
                  </label>
                  <br />
                  <div className="text-start w-full">
                    <Field
                      className="border p-3.5 w-full"
                      name="confirmpassword"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm text-start" />
                  </div>
                  <p className="text-start mt-5">
                    Already have an account?{" "}
                    <span
                      className="hover:cursor-pointer text-primary font-light text-HeroButtonOne"
                      onClick={() => {
                        SetAccount("signin");
                      }}
                    >
                      Login
                    </span>{" "}
                    here
                  </p>
                  <button
                    className="text-white mt-5 bg-HeroButtonOne w-32 h-14"
                    type="submit" disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Signup
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
}

export default Login;
