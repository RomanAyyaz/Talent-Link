import React, { useContext } from 'react'
import { Formik, Field, Form, FieldArray } from "formik";
import { useParams } from 'react-router-dom';
import { addCertificationApi, getDataOfResumeApi } from '../../ResumeApis/ResumeApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext';
function CertificationForm({onSuccess}) {
  // Extracting id from the URL
  let { id } = useParams();

  const queryClient = useQueryClient();

  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);

  //Formik Structure
  const initialValues = {
    certification: Array.isArray(resumeInfo.certification) && resumeInfo.certification.length > 0
      ? resumeInfo.certification.map(cer => ({
          certificationName: cer.certificationName || "",
          certificationSummery: cer.certificationSummery || "",
        }))
      : [
          {
            certificationName: '',
            certificationSummery: ''
          }
        ]
  }
  
   // Mutation for adding education
   const addCertificationMutation = useMutation({
    mutationFn: addCertificationApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      onSuccess();
      console.log("Education Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the education");
    },
  });


  const onSubmit = (values,onSubmitProps)=>{
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addCertificationMutation.mutate({ values, id });
    SetResumeInfo((prevInfo) => ({
      ...prevInfo,
      certification: values.certification,
    }));
    console.log(values);
  }

  return (
    <div>
      <div className="text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10">
        <h2 className="font-bold text-lg">Certification</h2>
        <p>Add Your Certifications</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue , isValid , isSubmitting }) => (
            <Form className="border border-gray-400 rounded-md mt-3 p-1.5">
              <FieldArray name="certification">
                {({ push, remove }) => (
                  <div>
                    {values.certification.map((certification, index) => (
                      <div key={index} className="mt-2">
                        <h4 className="font-bold">Certification {index + 1}</h4>
                        <div className="flex w-full mt-1">
                          <div className="w-full">
                            <label htmlFor={`certification[${index}].certificationName`} className="font-semibold text-sm">Certification Name</label>
                            <br />
                            <Field
                              name={`certification[${index}].certificationName`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`certification[${index}].certificationName`, value);
                                SetResumeInfo((prev) => {
                                  const newCertification = [...prev.certification];
                                  newCertification[index] = { ...newCertification[index], certificationName: value };
                                  return { ...prev, certification: newCertification };
                                });
                              }}
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <h2 className="mt-2 font-semibold">Description</h2>
                        <Field
                          as="textarea"
                          name={`certification[${index}].certificationSummery`}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue(`certification[${index}].certificationSummery`, value);
                            SetResumeInfo((prev) => {
                              const newCertification = [...prev.certification];
                              newCertification[index] = { ...newCertification[index], certificationSummery: value };
                              return { ...prev, certification: newCertification };
                            });
                          }}
                          rows="5"
                          className="p-1 w-full text-sm border rounded-md mt-1 focus:border-purple-500 focus:outline-none"
                        />
                        <div className="flex gap-3 items-center my-4">
                          <button
                            type="button"
                            className="border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600 hover:bg-gray-100 hover:text-black"
                            onClick={() =>
                              push({
                                certificationName: "",
                                certificationSummery: "",
                              })
                            }
                          >
                            Add More
                          </button>
                          <button
                            type="button"
                            className="border border-red-600 px-2 py-1 bg-white rounded-md text-red-600 hover:bg-gray-100 hover:text-black"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
              <button
                type="submit"
                className={`mt-2  ${isSubmitting || !isValid ? " bg-purple-300": ' bg-purple-600'} text-white px-4 py-2 rounded-md`}
                disabled= {!isValid || isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CertificationForm