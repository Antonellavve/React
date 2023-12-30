import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TabButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${props => (props.active ? '#eee' : 'transparent')};
`;

const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <TabContainer>
    {tabs.map(tab => (
      <TabButton
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        active={activeTab === tab.id}
      >
        {tab.label}
      </TabButton>
    ))}
  </TabContainer>
);

export default Tabs;
