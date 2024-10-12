import React, { useContext } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AddExperienceApi,
  getDataOfResumeApi,
} from "../../ResumeApis/ResumeApi";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";
import * as yup from 'yup'

function ExperienceForm({ onSuccess }) {
  // Extracting id from url
  let { id } = useParams();
  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);
  const queryClient = useQueryClient();

  // Api calling for getting the data of that specific resume
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });

  // Formik Structure
  const initialValues = {
    experience:
      data?.data?.experience?.length > 0
        ? data.data.experience.map((exp) => ({
            positionTitle: exp.positionTitle || "",
            companyName: exp.companyName || "",
            state: exp.state || "",
            city: exp.city || "",
            startDate: exp.startDate || "",
            endDate: exp.endDate || "",
            workSummery: exp.workSummery || "",
          }))
        : [
            {
              positionTitle: "",
              companyName: "",
              state: "",
              city: "",
              startDate: "",
              endDate: "",
              workSummery: "",
            },
          ],
  };
  //Validation Schema 
  const validationSchema = yup.object().shape({
    experience: yup.array().of(
      yup.object().shape({
        positionTitle: yup.string().required('Position Title is required'),
        companyName: yup.string().required('Company Name is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        startDate: yup.string().required('Start Date is required'),
        endDate: yup.string().required('End Date is required'),
        workSummery: yup.string().required('Work Summary is required'),
      })
    )
  });
  
  // Api calling
  const addExperienceMutation = useMutation({
    mutationFn: AddExperienceApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      console.log("Experience Added Successfully");
      onSuccess ()
    },
    onError: () => {
      console.log("Some error in adding the experience");
    },
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addExperienceMutation.mutate({ values, id });
    SetResumeInfo((prev) => ({
      ...prev,
      experience: values.experience,
    }));
    console.log(values);
  };

  return (
    <div>
      <div className="text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous job Experience</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ values, setFieldValue ,isValid , isSubmitting }) => (
            <Form className="border border-gray-400 rounded-md mt-3 p-1.5">
              <FieldArray name="experience">
                {({ push, remove }) => (
                  <div>
                    {values.experience.map((experience, index) => (
                      <div key={index} className="mt-2">
                        <h4 className="font-bold">Experience {index + 1}</h4>
                        <div className="flex gap-2 w-full mt-1">
                          <div className="w-1/2">
                            <label
                              htmlFor="positionTitle"
                              className="font-semibold text-sm"
                            >
                              Position Title
                            </label>
                            <Field
                              name={`experience.${index}.positionTitle`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.positionTitle`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    positionTitle: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder="Position Title"
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="companyName"
                              className="font-semibold text-sm"
                            >
                              Company Name
                            </label>
                            <Field
                              name={`experience.${index}.companyName`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.companyName`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    companyName: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder="Company Name"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-full mt-1">
                          <div className="w-1/2">
                            <label
                              htmlFor="city"
                              className="font-semibold text-sm"
                            >
                              City
                            </label>
                            <Field
                              name={`experience.${index}.city`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.city`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    city: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder="City"
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="state"
                              className="font-semibold text-sm"
                            >
                              State
                            </label>
                            <Field
                              name={`experience.${index}.state`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.state`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    state: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder="State"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-full mt-1">
                          <div className="w-1/2">
                            <label
                              htmlFor="startDate"
                              className="font-semibold text-sm"
                            >
                              Start Date
                            </label>
                            <Field
                              name={`experience.${index}.startDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.startDate`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    startDate: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              type="date"
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="endDate"
                              className="font-semibold text-sm"
                            >
                              End Date
                            </label>
                            <Field
                              name={`experience.${index}.endDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.endDate`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [
                                    ...(prev.experience || []),
                                  ];
                                  newExperience[index] = {
                                    ...newExperience[index],
                                    endDate: value,
                                  };
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              type="date"
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <h2 className="mt-2 font-semibold">Summary</h2>
                        <Field
                          name={`experience.${index}.workSummery`}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue(
                              `experience.${index}.workSummery`,
                              value
                            );
                            SetResumeInfo((prev) => {
                              const newExperience = [
                                ...(prev.experience || []),
                              ];
                              newExperience[index] = {
                                ...newExperience[index],
                                workSummery: value,
                              };
                              return { ...prev, experience: newExperience };
                            });
                          }}
                          as="textarea"
                          rows="5"
                          className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                          placeholder="Work Summary"
                        />
                        <div className="flex gap-3 items-center my-4">
                          <button
                            type="button"
                            className="border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600 hover:bg-gray-100 hover:text-black"
                            
                            onClick={() =>
                              push({
                                positionTitle: "",
                                companyName: "",
                                state: "",
                                city: "",
                                startDate: "",
                                endDate: "",
                                workSummery: "",
                              })
                            }
                          >
                            Add More Experience
                          </button>
                          <button
                            type="button"
                            className="border border-purple-600 px-2 py-1 bg-white rounded-md hover:bg-gray-100 hover:text-black text-purple-600"
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
              <div className="flex justify-end w-full mt-3 px-4">
                <button
                  type="submit"
                  className={`text-white px-2.5 py-1 rounded-md ${isSubmitting || !isValid ? " bg-purple-300": ' bg-purple-600'}`}
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

export default ExperienceForm;
