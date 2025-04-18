import React from 'react'
import {Formik , Field , Form} from 'formik'
import {useMutation} from '@tanstack/react-query'
import { useCompanyIdStore } from '../../../../Store/CompanyIdStore';
import { addCompanyBusinessOverviewApi, addCompanyInformation } from '../CompanyProfileApis/CompanyProfileApis';
function BusinessOverview({company}) {
    const {companyId} = useCompanyIdStore();
    console.log('The data is ' , company.socialMediaLinks)
    //Formik Structure 
    const initialValues = {
       mission: company.mission || '',
       vision: company.vision ||'',
       values: company.values ||''
    }
    //Company Information Mutation
    const businessOverviewMutation = useMutation({
        mutationFn:addCompanyBusinessOverviewApi,
        onSuccess:()=>{
            console.log("Company Business overview Added successfully")
        },
        onError:()=>{
            console.log("Some error in adding Company Business overview")
        }
    })
    const onSubmit = (values, onSubmitProps)=>{
  
    // Submit the form data using the mutation
   businessOverviewMutation.mutate({values:values,id:companyId})
    // Reset the form
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values)
    }
  return (
    <div className='w-full px-3 md:px-7'>
      <div className='bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4'>
        <h1 className='text-lg text-black font-medium'>Business Overview</h1>
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
                    Company Mission
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="mission"
                      type="text"
                      placeholder="Company Mission"
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3 md:w-full"
                    htmlFor="companyEmail"
                  >
                    Company Vision
                  </label>
                  <div className="text-start w-full  mt-2 md:w-11/12">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="vision"
                      type="text"
                      placeholder="Company Values"
                    />
                  </div>
                </div>

                <div className='w-full md:mr-10 mt-2'>
                  <label
                    className="text-start text-sm font-medium mt-3"
                    htmlFor="values"
                  >
                    Company Values
                  </label>
                  <div className="text-start w-full  mt-2">
                    <Field
                      className="border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none"
                      name="values"
                      type="text"
                      placeholder="Company Values"
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

export default BusinessOverview