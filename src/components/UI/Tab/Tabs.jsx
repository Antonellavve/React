import React, { useState } from 'react';
import { TabContainer, TabButton } from './TabsStyles';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const [clickedTabs, setClickedTabs] = useState([]); //rastrear las pestañas clicadas

  const handleTabClick = (tabId) => {
    if (!clickedTabs.includes(tabId)) {
      setClickedTabs([...clickedTabs, tabId]);
    }

    onTabChange(tabId);
  };//Cuando se hace clic en una pestaña, se verifica si el ID de la pestaña ya está en el array clickedTabs. 
  //Si no está presente, se agrega al array utilizando setClickedTabs([...clickedTabs, tabId]).
  //Luego, se llama a onTabChange(tabId) para notificar que se ha hecho clic en la pestaña.

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          className={clickedTabs.includes(tab.id) ? "active" : ""} //se aplica el nombre de clase
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          active={activeTab === tab.id}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default Tabs;
