import React from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

function SerachForm() {
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={3} className="my-1">
          <Form.Control id="inlineFormInputName" placeholder="Search" />
        </Col>
      </Form.Row>
    </Form>
  );
}

export default SerachForm;
