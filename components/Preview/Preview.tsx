import {
  Styledh2,
  StyledForm,
  StyledFlex,
  MyButton,
  StyledButton,
} from "./styles";
import React from "react";
import { useRouter } from "next/router";
import 'styled-jsx/style';

const Preview = () => {
  const router = useRouter();

  const { firstName, lastName, age, email, phoneNumber, street, city, state, zipCode } = router.query;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/submit");
  };

  const handleGoBack = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Preview details</h3>
        <StyledFlex>
          <div>
            <h3>First Name: </h3>
            <p>{firstName}</p>
          </div>
          <div>
            <h3>Last Name: </h3>
            <p>{lastName}</p>
          </div>
          <div>
            <h3>Age: </h3>
            <p>{age}</p>
          </div>
          <div>
            <h3>Email: </h3>
            <p>{email}</p>
          </div>
          <div>
            <h3>Phone Number: </h3>
            <p>{phoneNumber}</p>
          </div>
          <div>
            <h3>Street: </h3>
            <p>{street}</p>
          </div>
          <div>
            <h3>City: </h3>
            <p>{city}</p>
          </div>
          <div>
            <h3>State: </h3>
            <p>{state}</p>
          </div>
          <div>
            <h3>Zip Code: </h3>
            <p>{zipCode}</p>
          </div>
        </StyledFlex>
        <MyButton>
          <StyledButton type="submit" onClick={handleGoBack}>
            Previous
          </StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Submit
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default Preview;
