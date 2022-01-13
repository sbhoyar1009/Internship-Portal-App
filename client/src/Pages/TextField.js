import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input
         className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
       {...props}
        // autoComplete="off"
        size= "25"
      />
      <ErrorMessage component="div" name={field.name} style={{ color: 'red' }} className="error" />
     
    </div>
    
  )
}