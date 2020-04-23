import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function User({ details }) {
  return (
    <div className='user-card'>
      <Card>
        <CardImg top src={details.avatar} alt='user image' />
        <CardBody>
          <CardTitle>
            {details.first_name} {details.last_name}
          </CardTitle>
          <CardText>{details.email}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default User;
