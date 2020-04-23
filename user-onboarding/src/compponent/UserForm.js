import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
          value={values.first_name}
          onChange={onInputChange}
          name='first_name'
          type='text'
        />
        <Label>Last Name:</Label>
        <Input
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
      <Button type='submit' disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
