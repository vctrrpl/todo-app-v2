import React from 'react';
import { Container } from 'react-bootstrap';

function ErrorPage() {
  return (
    <Container>
      <h1 className="my-3">Oops!</h1>
      <p>Page not found</p>
    </Container>
  );
}

export default ErrorPage;
