import React from 'react'
import {Formik , Field , Form} from 'formik'
import {useMutation} from '@tanstack/react-query'
import { useCompanyIdStore } from '../../../../Store/CompanyIdStore';
import { addSocialMediaLinksApi } from '../CompanyProfileApis/CompanyProfileApis';
function SocialMediaLinks() {
    const {companyId} = useCompanyIdStore();
    //Formik Structure 
    const initialValues = {
       facebook:'',
       instagram:'',
       twitter:'',
       websiteUrl:''
    }
    //Company Information Mutation
    const socialMediaLinksMutation = useMutation({
        mutationFn:addSocialMediaLinksApi,
        onSuccess:()=>{
            console.log("Company Social media links Added successfully")
        },
        onError:()=>{
            console.log("Some error in adding Company Business overview")
        }
    })
    const onSubmit = (values, onSubmitProps)=>{
  
    // Submit the form data using the mutation
   socialMediaLinksMutation.mutate({values:values,id:companyId})
    // Reset the form
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values)
    }
  return (
    <div className='w-full px-3 md:px-7'>
      <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
        <h1 className='text-lg text-black font-medium'> Company Social Media Links</h1>
        <div className='border-b-2 bg-gray-400 mt-4'></div>
        <Formik initialValues= {initialValues} onSubmit= {onSubmit} encType = 'multer/form-data'>
          {
            (formik) => (
              <Form className='flex flex-col py-3 md:flex-row md:flex-wrap'>
                 <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="mission"
                  >
                    Facebook
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="facebook"
                      type="text"
                      placeholder="Company Facebook link"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3 md:w-full"
                    htmlFor="instagram"
                  >
                    Instagram
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="instagram"
                      type="text"
                      placeholder="Company Insragram Link"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="mission"
                  >
                    Twiiter
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="twitter"
                      type="text"
                      placeholder="Company Twitter Link"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3 md:w-full"
                    htmlFor="companyEmail"
                  >
                    Website Url
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="websiteUrl"
                      type="text"
                      placeholder="website Url"
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

export default SocialMediaLinks