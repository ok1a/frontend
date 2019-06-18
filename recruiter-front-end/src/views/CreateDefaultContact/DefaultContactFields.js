import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const DefaultContactFields = () => (
  <Form style={flexContainer}>
    <Form.Field>
      <label>Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Button type="submit">Add Default Contact</Button>
  </Form>
);

export default DefaultContactFields;
