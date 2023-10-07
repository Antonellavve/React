import React from 'react';
import { MenuContext } from "./components/Navbar/MenuContext"; // Asumiendo que MenuContextProvider es el componente Provider del contexto
import Routes from "./routes/Routes";
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <MenuContext>
        <Routes />
      </MenuContext>
      <GlobalStyles />
    </>
  );
}

export default App;
