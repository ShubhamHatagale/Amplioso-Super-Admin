import React from 'react'

export const inputText = () => {
    return (
        <div>

            <Field as={TextField} name='name' label='Name' fullWidth
                error={props.errors.name && props.touched.name}
                helperText={<ErrorMessage name='name' />} required />
        </div>
    )
}
