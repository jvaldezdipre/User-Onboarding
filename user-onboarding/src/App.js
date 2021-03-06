import React, { useState, useEffect } from 'react';
import UserFrom from './compponent/UserForm';
import User from './compponent/User';
import axios from 'axios';
import * as yup from 'yup';

import './App.css';

//------API URL------
const url = 'https://reqres.in/api/users';

//-------------INITIAL VALUES-------
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  avatar: '',
  terms: {
    services: false,
  },
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

//------------VALIDATION-----------
const formSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('First name is required'),
  email: yup
    .string()
    .email('A VALID email is required')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

function App() {
  //----------CREATE STATE------------------
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formDisabled, setFormDisabled] = useState(true);

  //----------API CALLS-------------------------
  const getUsers = () => {
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  //If the form is complete enable the button to continue----------
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setFormDisabled(!valid);
    });
  }, [formValues]);

  //-----------HANDLERS----------------------
  const onInputChange = event => {
    //Declare the events
    const name = event.target.name;
    const value = event.target.value;

    //See if any input is missing or incorrect-----
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        //Validates
        //Clear Error
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch(err => {
        //not validate
        //SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = event => {
    const { name } = event.target;
    const isChecked = event.target.checked;

    setFormValues({
      ...formValues,
      terms: {
        ...formValues.terms,
        [name]: isChecked,
      },
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    // const newUser = {
    //   first_name: formValues.first_name,
    //   last_name: formValues.last_name,
    //   email: formValues.email,
    //   password: formValues.password,
    //   avatar: formValues.avatar,
    //   terms: Object.keys(formValues.terms).filter(
    //     term => formValues.terms[term] === true
    //   ),
    // };

    axios
      .post(url, formValues)
      .then(res => {
        console.log(res);
        console.log('helloo', users);
        setUsers([...users, res.data]);
      })
      .catch(err => {
        console.log(err);
      });

    // postUser(newUser);
    setFormValues(initialFormValues);
  };

  return (
    <div className='App'>
      <UserFrom
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
      />
      <h1>Users</h1>
      <div className='users-container'>
        {users.map(user => {
          return <User key={user.id} details={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
