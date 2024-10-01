import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import ReactStars from 'react-rating-stars-component';

function SkillsForm() {
  const initialValues = {
    skills: [{ name: '', rating: 0 }],
  };

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    console.log(values);
  };
  //Function to update the rating
  const ratingChanged = (index, newRating, setFieldValue) => {
    setFieldValue(`skills[${index}].rating`, newRating); 
  };

  return (
    <div>
      <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Skills</h2>
        <p>Add Your Top Professional Key Skills</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form className='border border-gray-400 rounded-md mt-3 p-1.5'>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <div>
                    {values.skills.map((skill, index) => (
                      <div key={index} className='mt-2'>
                        {/* <h4 className='font-bold'>Skill {index + 1}</h4> */}
                        <div className='flex gap-2 justify-between w-full mt-1'>
                          <div className='w-1/2'>
                            <label htmlFor={`skills[${index}].name`} className='font-semibold text-sm'>Name</label><br />
                            <Field
                              name={`skills[${index}].name`}
                              className='text-sm border mt-0.5 w-full rounded-md p-1 focus:border-purple-500 focus:outline-none'
                              placeholder='Enter skill name'
                            />
                          </div>

                          {/* Rating Part */}
                          <div className='w-3/12'>
                            <label htmlFor="rating" className='font-semibold text-sm'>Rating</label><br />
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
                <button type='submit' className='text-white px-2.5 py-1 rounded-md bg-purple-600'>
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
