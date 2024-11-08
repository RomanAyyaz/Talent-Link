import React from 'react'
import { FaGreaterThan } from 'react-icons/fa';
import {Formik , Field , Form} from 'formik'
import {useMutation} from '@tanstack/react-query'
import { useCompanyIdStore } from '../../../../Store/CompanyIdStore';
import { addCompanyInformation } from '../CompanyProfileApis/CompanyProfileApis';
function CompanyInfo() {
    const {companyId} = useCompanyIdStore();
    //Formik Structure 
    const initialValues = {
        companyName:'',
        companyEmail:'',
        industry:'',
        companyAddress:'',
        companyLogo:null,
        companyDescription:''
    }
    //Company Information Mutation
    const companyMutation = useMutation({
        mutationFn:addCompanyInformation,
        onSuccess:()=>{
            console.log("Company Information Added successfully")
        },
        onError:()=>{
            console.log("Some error in adding company Information")
        }
    })
    const onSubmit = (values, onSubmitProps)=>{
    const formData = new FormData();
    formData.append('companyName', values.companyName);
    formData.append('companyEmail', values.companyEmail);
    formData.append('industry', values.industry);
    formData.append('companyAddress', values.companyAddress);
    formData.append('companyDescription', values.companyDescription);
    formData.append('companyLogo', values.companyLogo);
  
    // Submit the form data using the mutation
    companyMutation.mutate({values:formData , id:companyId});
  
    // Reset the form
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values)
    }
  return (
    <div className='w-full px-3 md:px-7'>
         <div className='bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between'>
        <h1 className='text-lg text-InstructorPrimary font-bold'>Company Profile</h1>
        <div>
          <p className='inline-block text-sm text-neutral-500'>Profile</p> 
          <p className='inline-block font-medium text-sm text-neutral-500 mx-1.5'><FaGreaterThan size={10}/></p>
          <p className='inline-block font-medium text-sm text-InstructorPrimary'>Settings</p>
        </div>
      </div>
      <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
        <h1 className='text-lg text-black font-medium'>Company Information</h1>
        <div className='border-b-2 bg-gray-400 mt-4'></div>
        <Formik initialValues= {initialValues} onSubmit= {onSubmit} encType = 'multer/form-data'>
          {
            (formik) => (
              <Form className='flex flex-col py-3 md:flex-row md:flex-wrap'>
                 <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="companyName"
                  >
                    Company Name
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3 md:w-full"
                    htmlFor="companyEmail"
                  >
                    Company Email
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="companyEmail"
                      type="email"
                      placeholder="Company Email"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="industry"
                      type="text"
                      placeholder="Industry Name"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3 md:w-full"
                    htmlFor="companyAddress"
                  >
                    Company Address
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="companyAddress"
                      type="text"
                      placeholder="Company address"
                    />
                  </div>
                </div>

                <div className='w-full md:mr-10 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="companyLogo"
                  >
                    Company Logo
                  </label>
                  <div className="text-start w-full ">
                    <input
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="companyLogo"
                      type="file"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0]
                        formik.setFieldValue("companyLogo",file);
                    }}
                      
                      placeholder="Company Logo"
                    />
                  </div>
                </div>

                <div className='w-full md:mr-10 mt-2'>
                <label
                  className="text-start text-sm font-medium mt-3"
                  htmlFor="description"
                >
                  Company Description
                </label>
                <div className="text-start w-full mt-2">
                  <Field
                    className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                    name="companyDescription"
                    as='textarea'
                    rows="3"
                    cols="40"
                    placeholder="Company Description"
                  />
                </div>
                </div> 

                 <div className='mt-3 flex w-full md:mr-10 md:mt-4 justify-end'>
                  <button className='bg-InstructorPrimary px-5 py-2 rounded-md duration-300 text-white hover:bg-buttonHover' disabled= {!formik.values || formik.isSubmitting } type='submit'>Save</button>
                </div>               
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default CompanyInfo