import {
  Styledh2,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledFormRequired,
  MyButton,
} from './styles';
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import StateSelect from "../StateSelect/StateSelect";
import { useFormData } from "../../context/FormDataContext";
import { useStateSelect } from '@/context/StateSelectContext';
import 'styled-jsx/style';

const AddressInfo: React.FC = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const { formData, setFormData } = useFormData();

  const router = useRouter();

  const { selectedState, setSelectedState } = useStateSelect();

  const memoizedSelectedState = useMemo(() => selectedState, [selectedState]);

  const handleSelectChange = (
    selectedState: { label: string; value: string } | null
  ) => {
    setSelectedState(selectedState);

  };
useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };
  const resetForm = () => {
    setFormData(initialFormData);
  };
  const handleGoBack = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      window.alert("Please enter a valid Zip Code.");
      return;
    }
    if (!selectedState) {
      window.alert("Please select the valid state.");
      return;
    }
    if (
      formData.street &&
      formData.city &&
      formData.zipCode && selectedState
    ) {
      router.push({
        pathname: "/preview",
        query: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          street: formData.street,
          city: formData.city,
          state: selectedState.value,
          zipCode: formData.zipCode,
        },
      });
    } else {
      window.alert("Please fill in all fields.");
      return;
    }
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phoneNumber: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Address Details</h3>
        <div>
          <StyledLabel htmlFor='street'>
            Street <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            id="street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Enter street"
            required
          />
        </div>
        <div>
          <StyledLabel htmlFor='city'>
            City <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
        </div>
        <div>
          <StyledLabel htmlFor="state">
            State <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StateSelect onChange={handleSelectChange} selectedState={selectedState} setSelectedState={setSelectedState} />
        </div>
        <div>
          <StyledLabel htmlFor='zipCode'>
            Zipcode <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Enter zipcode"
            required
          />
        </div>
        <MyButton>
          <StyledButton type="submit" onClick={resetForm}>
            Reset
          </StyledButton>
          <StyledButton type="submit" onClick={handleGoBack}>
            Previous
          </StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Next
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default AddressInfo;
