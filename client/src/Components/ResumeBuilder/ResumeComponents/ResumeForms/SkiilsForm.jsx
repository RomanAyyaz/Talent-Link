import React, { useContext } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import ReactStars from 'react-rating-stars-component';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AddSkillsApi, getDataOfResumeApi } from '../../ResumeApis/ResumeApi';
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext';
import * as yup from 'yup'
function SkillsForm({onSuccess}) {
  // Extracting id from URL 
  let { id } = useParams();

  const { resumeInfo, SetResumeInfo } = useContext(ResumeInfoContext);
  const queryClient = useQueryClient();

  // API call for getting the data of that specific resume
  const { data } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });

  const initialValues = {
    skills:
      data.data?.skills?.length > 0
        ? data.data?.skills.map((skill) => ({
            name: skill.name || "",
            rating: skill.rating || 0,
          }))
        : [
            {
              name: "",
              rating: 0,
            },
          ],
  };
  //ValidationSchema
  const validationSchema = yup.object().shape({
    skills: yup.array().of(
      yup.object().shape({
        name: yup.string().required('Name is required'),
        rating: yup.string().required('Rating is required'),
      })
    )
  });
  // API call 
  const addSkillsMutation = useMutation({
    mutationFn: AddSkillsApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      onSuccess();
      console.log("Skills Added Successfully");
    },
    onError: () => {
      console.log("Some error in adding the Skills");
    },
  });

  // Function to update the rating
  const ratingChanged = (index, newRating, setFieldValue) => {
    setFieldValue(`skills[${index}].rating`, newRating);
    SetResumeInfo((prev) => {
      const newSkills = [...prev.skills];
      if (newSkills[index]) {
        newSkills[index].rating = newRating;
      }
      return { ...prev, skills: newSkills };
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    addSkillsMutation.mutate({ values, id });
    console.log(values);
  };

  return (
    <div>
      <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Skills</h2>
        <p>Add Your Top Professional Key Skills</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ values, setFieldValue , isValid , isSubmitting }) => (
            <Form className='border border-gray-400 rounded-md mt-3 p-1.5'>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <div>
                    {values.skills.map((skill, index) => (
                      <div key={index} className='mt-2'>
                        <div className='flex gap-2 justify-between w-full mt-1'>
                          <div className='w-1/2'>
                            <label htmlFor={`skills[${index}].name`} className='font-semibold text-sm'>Name</label><br />
                            <Field
                              name={`skills[${index}].name`}
                              onChange={(e) => {
                                const { value } = e.target;
                                setFieldValue(`skills[${index}].name`, value);
                                SetResumeInfo((prev) => {
                                  const newSkills = [...prev.skills];
                                  if (newSkills[index]) {
                                    newSkills[index].name = value;
                                  }
                                  return { ...prev, skills: newSkills };
                                });
                              }}
                              className='text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none'
                              placeholder='Enter skill name'
                            />
                          </div>

                          {/* Rating Part */}
                          <div className='w-2/5 lg:w-3/12'>
                            <label htmlFor={`skills[${index}].rating`} className='font-semibold text-sm'>Rating</label><br />
                            <ReactStars
                              count={5}
                              value={skill.rating}
                              onChange={(newRating) => ratingChanged(index, newRating, setFieldValue)}
                              size={24}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex gap-3 items-center my-4'>
                          <button
                            type="button"
                            className='border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600 hover:bg-gray-100 hover:text-black'
                            onClick={() => push({ name: '', rating: 0 })}
                          >
                            Add More Skills
                          </button>
                          <button
                            type="button"
                            className='border border-purple-600 px-2 py-1 bg-white rounded-md hover:bg-gray-100 hover:text-black text-purple-600'
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
              <div className='flex justify-end w-full mt-3 px-4'>
                <button type='submit' className={`text-white ${isSubmitting || !isValid ? " bg-purple-300": ' bg-purple-600'}  px-2.5 py-1 rounded-md`}>
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

export default SkillsForm;
