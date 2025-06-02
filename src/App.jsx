import { Provider } from "react-redux";
import UserDetails from "./components/UserDetails";
import store from "./store";
import { CounterContextProvider } from "./context/counterContext";

function App() {
  return (
    <Provider store={store}>
      <CounterContextProvider>
        <UserDetails />
      </CounterContextProvider>
    </Provider>
  );
}

export default App;
