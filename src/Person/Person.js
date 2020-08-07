/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// import "./Person.css";

/**
 * It is already a functional Component we donot need to use
 * const PersonDiv = props => styled.div
 */
const StyledPersonDiv = styled.div`
  width: 50%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
`;

const StyledDeleteIconDiv = styled.div`
  margin: 20px 20px;
  text-align: right;
  color: transparent;
  &:hover {
    cursor: pointer;
    color: black;
    transition: 0.6s ease all;
  }
`;

const StyledPersonInput = styled.input`
  border: 1px solid #bbb;
  margin: 15px 0;
  width: 50%;
  font-size: 20px;
  outline: none;
  border-radius: 20px;
  display: inline-block;
  padding: 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
`;

// This is a Function
const Person = ({ deleteElement, name, age, children, changed }) => (
  <StyledPersonDiv>
    <div className="Person">
      {/* Delete Icon  */}
      <StyledDeleteIconDiv onClick={deleteElement} onKeyDown={deleteElement}>
        <FontAwesomeIcon className=".delete-icon" icon={faTrash} />
      </StyledDeleteIconDiv>

      {/* Paragraph */}
      <p>
        &lsquo;I am a living Person, My name is {name} and I am {age} Old&lsquo;
      </p>
      <p>{children}</p>

      {/* Input Element */}
      <StyledPersonInput type="text" onChange={changed} placeholder="Enter the username" />
    </div>
  </StyledPersonDiv>
);

Person.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  changed: PropTypes.func.isRequired,
};

export default Person;
