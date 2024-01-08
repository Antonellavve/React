import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const TabButton = styled.button`
  padding: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  background-color: gray;
  &.active{
    text-decoration: underline;
  }
`;