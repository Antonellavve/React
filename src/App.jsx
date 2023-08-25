import { MenuContext } from "./components/Navbar/MenuContext";
import Routes from "./routes/Routes";
import {GlobalStyles} from './styles/GlobalStyles';


function App() {
  return (
    <>
    <MenuContext>
      <Routes/>
    </MenuContext>
      
      <GlobalStyles/>
    </>
  )
}

export default App
