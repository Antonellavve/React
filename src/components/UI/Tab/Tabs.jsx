import React, { useState } from 'react';
import { TabContainer, TabButton } from './TabsStyles';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const [clickedTabs, setClickedTabs] = useState([]); // Rastrear las pestañas clickeadas

  const handleTabClick = (tabId) => {
    // Si el tab actual ya está clicado, no hacemos nada
    if (clickedTabs.includes(tabId)) {
      return;
    }

    // Agregamos el tab actual a los tabs clicados
    setClickedTabs([tabId]);

  // Notificamos el cambio de tab al componente padre
    if (onTabChange) {
      onTabChange(tabId);
    }
  };//Cuando se hace clic en una pestaña, se verifica si el ID de la pestaña ya está en el array clickedTabs. 
  //Si no está presente, se agrega al array utilizando setClickedTabs([...clickedTabs, tabId]).
  //Luego, se llama a onTabChange(tabId) para notificar que se ha hecho clic en la pestaña.

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          className={clickedTabs.includes(tab.id) ? "active" : ""}
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default Tabs;
