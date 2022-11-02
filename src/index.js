import React from 'react'

const useNoForm = ({ initialState, }) => {
    const [fields, setFields] = React.useState({ ...initialState })

    const handleInput = (e) => {
        if (e.target && e.target.name && e.target.value) {
            setFields({
                ...fields,
                [e.target.name]: e.target.value
            })
        }
    }

    return { fields, setFields, handleInput }
};

export default useNoForm;