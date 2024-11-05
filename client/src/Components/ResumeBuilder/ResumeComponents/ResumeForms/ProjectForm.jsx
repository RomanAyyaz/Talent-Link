import React, { useContext } from 'react'
import { Formik, Field, Form, FieldArray } from "formik";
import { useParams } from 'react-router-dom';
import { addProjectApi } from '../../ResumeApis/ResumeApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext';
function ProjectForm({onSuccess}) {
  // Extracting id from the URL
  let { id } = useParams();

  const queryClient = useQueryClient();

  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);

  //Formik Structure
  const initialValues = {
    project: Array.isArray(resumeInfo.project) && resumeInfo.project.length > 0
      ? resumeInfo.project.map(pro => ({
          projectName: pro.projectName || "",
          projectDescription: pro.projectDescription || "",
        }))
      : [
          {
            projectName: '',
            projectDescription: ''
          }
        ]
  }
  
   // Mutation for adding education
   const addProjectMutation = useMutation({
    mutationFn: addProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      onSuccess();
      console.log("Project Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the Project");
    },
  });


  const onSubmit = (values,onSubmitProps)=>{
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addProjectMutation.mutate({ values, id });
    SetResumeInfo((prevInfo) => ({
      ...prevInfo,
      project: values.project,
    }));
    console.log(values);
  }

  return (
    <div>
      <div className="text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10">
        <h2 className="font-bold text-lg">Project</h2>
        <p>Add Your Projects</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue , isValid , isSubmitting }) => (
            <Form className="border border-gray-400 rounded-md mt-3 p-1.5">
              <FieldArray name="project">
                {({ push, remove }) => (
                  <div>
                    {values.project.map((project, index) => (
                      <div key={index} className="mt-2">
                        <h4 className="font-bold">Project {index + 1}</h4>
                        <div className="flex w-full mt-1">
                          <div className="w-full">
                            <label htmlFor={`project[${index}].projectName`} className="font-semibold text-sm">Project Name</label>
                            <br />
                            <Field
                              name={`project[${index}].projectName`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`project[${index}].projectName`, value);
                                SetResumeInfo((prev) => {
                                  const newProject = [...prev.project];
                                  newProject[index] = { ...newProject[index], projectName: value };
                                  return { ...prev, project: newProject };
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
                          name={`project[${index}].projectDescription`}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue(`project[${index}].projectDescription`, value);
                            SetResumeInfo((prev) => {
                              const newDescription = [...prev.project];
                              newDescription[index] = { ...newDescription[index], projectDescription: value };
                              return { ...prev, project: newDescription };
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
                                projectName: "",
                                projectDescription: "",
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
              <div className="flex justify-end w-full mt-3 px-4">
              <button
                type="submit"
                className={`${isSubmitting || !isValid ? " bg-purple-300": ' bg-purple-600'} text-white px-2.5 py-1 rounded-md `}
                disabled= {!isValid || isSubmitting}
              >
                Save
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default ProjectForm