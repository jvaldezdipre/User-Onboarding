import React from 'react';
//---When I make a Form I need Initial values
function UserForm({ values, onInputChange, onCheckboxChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h1>User Form</h1>
      {/* ////////ERROR MESSAGES////// */}
      <div className='errors'></div>

      {/* ///////TEXT INPUTS//////// */}
      <label>
        First Name:
        <input
          value={values.first_name}
          onChange={onInputChange}
          name='first_name'
          type='text'
        />
      </label>
      <label>
        Last Name:
        <input
          value={values.last_name}
          onChange={onInputChange}
          name='last_name'
          type='text'
        />
      </label>
      <label>
        Email:
        <input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        />
      </label>
      <label>
        Password:
        <input
          value={values.password}
          onChange={onInputChange}
          name='password'
          type='text'
        />
      </label>

      {/* //////CHECK BOX//////// */}
      <label>
        <input
          value={values.terms.services}
          onChange={onCheckboxChange}
          name='services'
          type='checkbox'
        />
        Terms of services
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserForm;
