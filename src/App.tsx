import { Header } from "./components/header";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";
import { Destination } from "./pages/destination";
import { Home } from "./pages/home";

function App() {

  return (
    <>
      <Header />
      
      <Home />

      <Destination />

      <Crew />

      <Technology />
    </>
  )
}

export default App