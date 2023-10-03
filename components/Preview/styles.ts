import styled from '@emotion/styled';

export const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const Styledh2 = styled.h2`
  text-align: center;
`;

 export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  gap: 10px;
`;

export const StyledFlex = styled.div`
div{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`;
