import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { useCompanyIdStore } from '../../../../Store/CompanyIdStore';
import { addSocialMediaLinksApi } from '../CompanyProfileApis/CompanyProfileApis';
import { useDarkModeStore } from '../../../../Store/DarkModeStore';

function SocialMediaLinks({company}) {
  const { companyId } = useCompanyIdStore();
  const { mode } = useDarkModeStore();

  const initialValues = {
    facebook: company.socialMediaLinks.facebook || '',
    instagram: company.socialMediaLinks.instagram || '',
    twitter: company.socialMediaLinks.twitter || '',
    websiteUrl: company.socialMediaLinks.websiteUrl || ''
  };

  const socialMediaLinksMutation = useMutation({
    mutationFn: addSocialMediaLinksApi,
    onSuccess: () => {
      console.log("Company Social media links Added successfully");
    },
    onError: () => {
      console.log("Some error in adding Company Social media links");
    }
  });

  const onSubmit = (values, onSubmitProps) => {
    socialMediaLinksMutation.mutate({ values: values, id: companyId });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    console.log(values);
  };

  const inputClass = `border p-2 w-full rounded-md text-sm px-2 border-1 focus:border-InstructorPrimary focus:outline-none ${mode === 'dark' ? 'bg-dark text-gray-300 border-gray-600' : ''}`;
  const labelClass = `text-start text-sm font-medium mt-3 ${mode === 'dark' ? 'text-white' : ''}`;

  return (
    <div className='w-full px-3 md:px-7'>
      <div className={`${mode === 'light' ? 'bg-white' : 'bg-dark'} w-full text-start px-3 md:px-8 rounded-md mt-6 py-4`}>
        <h1 className={`text-lg font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Company Social Media Links</h1>
        <div className='border-b-2 bg-gray-400 mt-4'></div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} encType='multipart/form-data'>
          {(formik) => (
            <Form className='flex flex-col py-3 md:flex-row md:flex-wrap'>

              <div className='w-full md:w-1/2 mt-2'>
                <label className={labelClass} htmlFor="facebook">Facebook</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="facebook"
                    type="text"
                    placeholder="Company Facebook link"
                  />
                </div>
              </div>

              <div className='w-full md:w-1/2 mt-2'>
                <label className={labelClass} htmlFor="instagram">Instagram</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="instagram"
                    type="text"
                    placeholder="Company Instagram Link"
                  />
                </div>
              </div>

              <div className='w-full md:w-1/2 mt-2'>
                <label className={labelClass} htmlFor="twitter">Twitter</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="twitter"
                    type="text"
                    placeholder="Company Twitter Link"
                  />
                </div>
              </div>

              <div className='w-full md:w-1/2 mt-2'>
                <label className={labelClass} htmlFor="websiteUrl">Website Url</label>
                <div className="text-start w-full mt-2 md:w-11/12">
                  <Field
                    className={inputClass}
                    name="websiteUrl"
                    type="text"
                    placeholder="Website Url"
                  />
                </div>
              </div>

              <div className='mt-3 flex w-full md:mr-10 md:mt-4 justify-end'>
                <button
                  className='bg-InstructorPrimary px-5 py-2 rounded-md duration-300 text-white hover:bg-buttonHover'
                  disabled={!formik.values || formik.isSubmitting}
                  type='submit'
                >
                  Save
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
