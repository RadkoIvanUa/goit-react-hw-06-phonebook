import styled from 'styled-components';

const Form = styled.form`
  max-width: 300px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  label {
    display: block;
    margin-bottom: 20px;
    font-weight: 700;
    input {
      width: 95%;
      display: block;
      margin-top: 5px;
      padding: 5px;
      font-size: 18px;
      border: 2px solid transparent;
      border-radius: 10px;
      outline: none;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    input:hover,
    input:focus {
      border: 2px solid #6a95ff;
    }
  }

  button {
    display: block;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    outline: none;
  }

  button:hover,
  button:focus {
    border: 2px solid rgb(30 166 38);
    cursor: pointer;
  }
`;

export { Form };
