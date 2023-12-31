import React from 'react';
import { TabContainer, TabButton } from './TabsStyles';

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
