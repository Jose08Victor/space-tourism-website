import { AppRoutes } from "./routes";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  )
}

export default App