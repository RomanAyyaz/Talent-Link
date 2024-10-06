import React, { useContext, useEffect } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { AddEducationApi, getDataOfResumeApi } from "../../ResumeApis/ResumeApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";

function EducationForm() {
  // Extracting id from the URL
  let { id } = useParams();
  
  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);
  const queryClient = useQueryClient();

  // API calling for getting the data of that specific resume
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });

  // Initial values setup with default structure to avoid undefined errors
  const initialValues = {
    education: Array.isArray(resumeInfo.education) && resumeInfo.education.length > 0
      ? resumeInfo.education.map(edu => ({
          universityName: edu.universityName || "",
          degree: edu.degree || "",
          major: edu.major || "",
          startDate: edu.startDate || "",
          endDate: edu.endDate || "",
          description: edu.description || "",
        }))
      : [
          {
            universityName: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
  };

  // Mutation for adding education
  const addEducationMutation = useMutation({
    mutationFn: AddEducationApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      console.log("Education Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the education");
    },
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addEducationMutation.mutate({ values, id });
    SetResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: values.education,
    }));
    console.log(values);
  };

  // Loading and error handling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10">
        <h2 className="font-bold text-lg">Education</h2>
        <p>Add Your education details</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="border border-gray-400 rounded-md mt-3 p-1.5">
              <FieldArray name="education">
                {({ push, remove }) => (
                  <div>
                    {values.education.map((education, index) => (
                      <div key={index} className="mt-2">
                        <h4 className="font-bold">Education {index + 1}</h4>
                        <div className="flex w-full mt-1">
                          <div className="w-full">
                            <label htmlFor={`education[${index}].universityName`} className="font-semibold text-sm">University Name</label>
                            <br />
                            <Field
                              name={`education[${index}].universityName`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`education[${index}].universityName`, value);
                                SetResumeInfo((prev) => {
                                  const newEducation = [...prev.education];
                                  newEducation[index] = { ...newEducation[index], universityName: value };
                                  return { ...prev, education: newEducation };
                                });
                              }}
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-full mt-1">
                          <div className="w-1/2">
                            <label htmlFor={`education[${index}].degree`} className="font-semibold text-sm">Degree</label>
                            <br />
                            <Field
                              name={`education[${index}].degree`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`education[${index}].degree`, value);
                                SetResumeInfo((prev) => {
                                  const newEducation = [...prev.education];
                                  newEducation[index] = { ...newEducation[index], degree: value };
                                  return { ...prev, education: newEducation };
                                });
                              }}
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                          <div className="w-1/2">
                            <label htmlFor={`education[${index}].major`} className="font-semibold text-sm">Major</label>
                            <br />
                            <Field
                              name={`education[${index}].major`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`education[${index}].major`, value);
                                SetResumeInfo((prev) => {
                                  const newEducation = [...prev.education];
                                  newEducation[index] = { ...newEducation[index], major: value };
                                  return { ...prev, education: newEducation };
                                });
                              }}
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-full mt-1">
                          <div className="w-1/2">
                            <label htmlFor={`education[${index}].startDate`} className="font-semibold text-sm">Start Date</label>
                            <br />
                            <Field
                              name={`education[${index}].startDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`education[${index}].startDate`, value);
                                SetResumeInfo((prev) => {
                                  const newEducation = [...prev.education];
                                  newEducation[index] = { ...newEducation[index], startDate: value };
                                  return { ...prev, education: newEducation };
                                });
                              }}
                              type="date"
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                          <div className="w-1/2">
                            <label htmlFor={`education[${index}].endDate`} className="font-semibold text-sm">End Date</label>
                            <br />
                            <Field
                              name={`education[${index}].endDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`education[${index}].endDate`, value);
                                SetResumeInfo((prev) => {
                                  const newEducation = [...prev.education];
                                  newEducation[index] = { ...newEducation[index], endDate: value };
                                  return { ...prev, education: newEducation };
                                });
                              }}
                              type="date"
                              className="text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <h2 className="mt-2 font-semibold">Description</h2>
                        <Field
                          as="textarea"
                          name={`education[${index}].description`}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue(`education[${index}].description`, value);
                            SetResumeInfo((prev) => {
                              const newEducation = [...prev.education];
                              newEducation[index] = { ...newEducation[index], description: value };
                              return { ...prev, education: newEducation };
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
                                universityName: "",
                                degree: "",
                                major: "",
                                startDate: "",
                                endDate: "",
                                description: "",
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
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EducationForm;
