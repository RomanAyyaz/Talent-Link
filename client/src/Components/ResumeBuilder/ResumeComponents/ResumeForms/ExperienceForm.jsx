import React, { useContext } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AddExperienceApi,
  getDataOfResumeApi,
} from "../../ResumeApis/ResumeApi";
import { ResumeInfoContext } from "../../../../Context/ResumeInfoContext";

function ExperienceForm() {
  //Extracting id from url
  let { id } = useParams();

  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);

  const queryClient = useQueryClient();
  //Api calling for getting the data of that specific resume
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });
  //Formik Structure
  const initialValues = {
    experience:
      data.data?.experience?.length > 0
        ? data.data?.experience.map((exp) => ({
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

  //Api calling
  const addExperienceMutation = useMutation({
    mutationFn: AddExperienceApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      console.log("Experience Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the experience");
    },
  });
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addExperienceMutation.mutate({ values, id });
    SetResumeInfo((prevInfo) => ({
      ...prevInfo,
      experience: values.experience,
    }));
    console.log(values);
  };

  return (
    <div>
      <div className="text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous job Experience</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="border border-gray-400 rounded-md mt-3 p-1.5">
              <FieldArray name="experience">
                {({ push, remove }) => (
                  <div className="">
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
                            <br />
                            <Field
                              name={`experience.${index}.positionTitle`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.positionTitle`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].positionTitle = value;
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
                            <br />
                            <Field
                              name={`experience.${index}.companyName`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.companyName`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].companyName = value;
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
                            <br />
                            <Field
                              name={`experience.${index}.city`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.city`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].city = value;
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
                            <br />
                            <Field
                              name={`experience.${index}.state`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.state`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].state = value;
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
                            <br />
                            <Field
                              name={`experience.${index}.startDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.startDate`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].startDate = value;
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
                            <br />
                            <Field
                              name={`experience.${index}.endDate`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(
                                  `experience.${index}.endDate`,
                                  value
                                );
                                SetResumeInfo((prev) => {
                                  const newExperience = [...prev.experience];
                                  newExperience[index].endDate = value;
                                  return { ...prev, experience: newExperience };
                                });
                              }}
                              type="date"
                              className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <h2 className="mt-2 font-semibold">Summery</h2>
                        <Field
                          name={`experience.${index}.jobDescription`}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue(
                              `experience.${index}.jobDescription`,
                              value
                            );
                            SetResumeInfo((prev) => {
                              const newExperience = [...prev.experience];
                              newExperience[index].jobDescription = value;
                              return { ...prev, experience: newExperience };
                            });
                          }}
                          as="textarea"
                          rows="5"
                          className="border mt-0.5 w-full text-sm rounded-md p-1 focus:border-purple-500 focus:outline-none"
                          placeholder="Job Description"
                        />
                        <div></div>
                        {/* container for buttons */}
                        <div className="flex gap-3 items-center my-4">
                          <button
                            type="button"
                            className="border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600 
                        hover:bg-gray-100 hover:text-black"
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
                            className="border border-purple-600 px-2 py-1 bg-white rounded-md
                          hover:bg-gray-100 hover:text-black text-purple-600"
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
                  className="text-white px-2.5 py-1 rounded-md bg-purple-600"
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
