import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Alert } from 'reactstrap';

//---When I make a Form I need Initial values
function UserForm({
  values,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  disabled,
  errors,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <h1>User Form</h1>
        {/* ////////ERROR MESSAGES////// */}
        <div className='errors'>
          <Alert color='danger'>{errors.email}</Alert>
          <Alert color='danger'>{errors.password}</Alert>
        </div>

        {/* ///////TEXT INPUTS//////// */}
        <Label>First Name:</Label>
        <Input
          data-cy_firstname_input='cy_firstname_input'
          value={values.first_name}
          onChange={onInputChange}
          name='first_name'
          type='text'
        />
        <Label>Last Name:</Label>
        <Input
          data-cy_lastname_input='cy_lastname_input'
          value={values.last_name}
          onChange={onInputChange}
          name='last_name'
          type='text'
        />
        <Label>Email:</Label>
        <Input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        />
        <Label>Password:</Label>
        <Input
          value={values.password}
          onChange={onInputChange}
          name='password'
          type='text'
        />

        {/* //////CHECK BOX//////// */}
        <Label>
          <Input
            value={values.terms.services}
            onChange={onCheckboxChange}
            name='services'
            type='checkbox'
          />
          Terms of services
        </Label>
      </FormGroup>
      <Button name='user_submit_form' type='submit' disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
