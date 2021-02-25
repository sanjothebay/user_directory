import React from "react";
import Form from 'react-bootstrap/Form'

function SerachForm() {
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Name
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Search" />
        </Col>
      </Form.Row>
    </Form>
  );
}

export default SerachForm;
