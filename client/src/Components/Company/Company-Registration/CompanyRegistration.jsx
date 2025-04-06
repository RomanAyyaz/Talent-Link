import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { companyOtpVerificationApi, companyRegistrationApi, companySigninApi } from "./CompanyRegistrationApis";
import { useCompanyIdStore } from "../../../Store/CompanyIdStore";
function CompanyRegistration() {
  //CompanyId
  const{companyId,setCompanyId} = useCompanyIdStore();
  //Navigation
  let navigate = useNavigate();

  //State for setting the Account type
  let [Account, SetAccount] = useState("signin");

  //State for Setting email
  let [companyEmail, setEmail] = useState();

  //Otp values
  let [value1, setValue1] = useState();
  let [value2, setValue2] = useState();
  let [value3, setValue3] = useState();
  let [value4, setValue4] = useState();

  //Storing User entered Otp
  let UserOtp = Number(`${value1}${value2}${value3}${value4}`);

  //Formik Structure for Signin
  let initialValuesSignin = {
    CompanyEmail: "",
    password: "",
  };
  let validationSchemaSignin = yup.object({
    companyEmail: yup.string().email().required("Email Required"),
    password: yup.string().required("Password Required"),
  });
  //Api Calling for Signin
  let SigninMutation = useMutation({
    mutationFn: companySigninApi,
    onSuccess: (data) => {
      navigate("/dashboardCompany/dashboard");
      setCompanyId(data.companyData._id);
      toast.success("Logged in Successfully", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      console.log("Company Signed in Successfully");
    },
    onError: (error) => {
      const errorMessage = error.message || "An unknown error occurred";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      console.log("Some Error in Signing", error.message);
    },
  });
  let onSubmitSignin = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    SigninMutation.mutate(values);
  };

  //Formik Structure for Signup
  let initialValuesSignup = {
    companyName: "",
    companyEmail: "",
    password: "",
    confirmpassword: "",
  };
  let validationSchemaSignup = yup.object({
    companyName: yup.string().required("Required"),
    companyEmail: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
    confirmpassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  //Api Calling for Company Registration
  let SignUpMutation = useMutation({
    mutationFn: companyRegistrationApi,
    onSuccess: () => {
      console.log("Company Signed up Successfully");
      SetAccount("otp");
    },
    onError: () => {
      console.log("Some error in Company Signup");
    },
  });
  let onSubmitSignup = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    SignUpMutation.mutate(values);
    console.log(values)
    setEmail(values.companyEmail);
  };

  //Api Calling for Otp
  let UserData = {
    otp: UserOtp,
    companyEmail: companyEmail,
  };
  let OtpVerificationMutations = useMutation({
    mutationFn: companyOtpVerificationApi,
    onSuccess: () => {
      SetAccount("signin");
      console.log("otp Verificated");
    },
    onError: () => {
      console.log("Some error in otp verification");
    },
  });

  return (
    <>
      {Account === "signin" ? (
        <div className="min-h-screen flex justify-center items-center bg-bgSignin">
          <div className="w-[450px] before:lg:shadow-4xl shadow-2xl mx-3 py-4 md:py-8 rounded-md bg-bgwhite">
            <h1 className="text-2xl  font-extrabold">Talent-Link</h1>
            <p className="my-2 font-semibold">Sign in your account </p>
            <Formik
              key="signin"
              initialValues={initialValuesSignin}
              validationSchema={validationSchemaSignin}
              onSubmit={onSubmitSignin}
            >
              {(formik) => {
                return (
                  <Form className="flex justify-start flex-col px-3 py-6 lg:px-6">
                    <label
                      className="text-start font-medium text-sm"
                      htmlFor="companyEmail"
                    >
                      Company Email
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="companyEmail"
                        type="email"
                        placeholder="Company Email"
                      />
                      {/* <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-start" /> */}
                    </div>
                    <label
                      className="text-start font-medium text-sm mt-3"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      {/* <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-start" /> */}
                    </div>
                    <Link to="/changePassword">
                      <p className="text-primary text-sm font-normal mt-2.5 text-end hover:cursor-pointer text-InstructorPrimary">
                        Forgot Password?
                      </p>
                    </Link>
                    <button
                      className="text-white rounded-md mt-5 bg-InstructorPrimary w-full p-2 hover:bg-buttonHover cursor-pointer duration-300"
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Sign me in
                    </button>
                    <p className="text-start text-sm mt-5 font-normal">
                      Don't have an account?{" "}
                      <span
                        className="hover:cursor-pointer text-primary font-normal text-InstructorPrimary"
                        onClick={() => {
                          SetAccount("signup");
                        }}
                      >
                        Sign Up
                      </span>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      ) : Account === "otp" ? (
        <div className="flex items-center justify-center w-full h-screen">
          <div className="py-10 px-5 md:py-20 md:px-36 bg-bgwhite shadow-2xl">
            <h1 className="text-2xl font-bold">Verify</h1>
            <p className="mt-2 text-sm text-neutral-400">
              Your Code was sent to you via email
            </p>
            <div className="my-4">
              <input
                type="number"
                onChange={(e) => {
                  setValue1(e.target.value);
                }}
                name=""
                id=""
                className="h-10 w-10 text-center rounded-md mx-2  border border-neutral-400"
              />
              <input
                type="number"
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
                name=""
                id=""
                className="h-10 w-10 text-center rounded-md mx-2  border border-neutral-400"
              />
              <input
                type="number"
                onChange={(e) => {
                  setValue3(e.target.value);
                }}
                name=""
                id=""
                className="h-10 w-10 text-center rounded-md mx-2  border border-neutral-400"
              />
              <input
                type="number"
                onChange={(e) => {
                  setValue4(e.target.value);
                }}
                name=""
                id=""
                className="h-10 w-10 text-center rounded-md mx-2  border border-neutral-400"
              />
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-3 rounded-md"
              type="submit"
              onClick={() => {
                OtpVerificationMutations.mutate(UserData);
              }}
            >
              Verify
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center bg-bgSignin">
          <div className="w-[450px] before:lg:shadow-4xl shadow-2xl mx-3 py-4 rounded-md bg-bgwhite">
            <h1 className="text-2xl font-extrabold ">Talent-Link</h1>
            <p className="my-2 font-semibold">Register your company account </p>
            <Formik
              key="signup"
              initialValues={initialValuesSignup}
              validationSchema={validationSchemaSignup}
              onSubmit={onSubmitSignup}
            >
              {(formik) => {
                return (
                  <Form className="flex justify-start flex-col px-3 py-6 lg:px-6">
                    <label
                      className="text-start font-medium text-sm"
                      htmlFor="comapyName"
                    >
                      Company Name
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                      />
                      {/* <ErrorMessage
                        name="fullname"
                        component="div"
                        className="text-red-500 text-sm text-start"
                      /> */}
                    </div>

                    <label
                      className="text-start font-medium text-sm mt-3"
                      htmlFor="companyEmail"
                    >
                      Company Email
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="companyEmail"
                        type="email"
                        placeholder="Company Email"
                      />
                      {/* <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm text-start"
                      /> */}
                    </div>

                    <label
                      className="text-start font-medium text-sm mt-3"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      {/* <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm text-start"
                      /> */}
                    </div>

                    <label
                      className="text-start font-medium text-sm mt-3"
                      htmlFor="confirmpassword"
                    >
                      Confirm Password
                    </label>
                    <div className="text-start w-full mt-2">
                      <Field
                        className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                        name="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      {/* <ErrorMessage
                        name="confirmpassword"
                        component="div"
                        className="text-red-500 text-sm text-start"
                      /> */}
                    </div>

                    

                    <button
                      className="text-white rounded-md mt-5 bg-InstructorPrimary w-full p-2 hover:bg-buttonHover duration-300"
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Signup
                    </button>

                    <p className="text-start mt-5">
                      Already have an account?{" "}
                      <span
                        className="hover:cursor-pointer text-primary font-normal text-InstructorPrimary"
                        onClick={() => {
                          SetAccount("signin");
                        }}
                      >
                        Login
                      </span>{" "}
                      here
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyRegistration;
