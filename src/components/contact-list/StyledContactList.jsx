import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
  li {
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 10px;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  li:hover,
  li:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
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
    border: 2px solid red;
    cursor: pointer;
  }
`;
