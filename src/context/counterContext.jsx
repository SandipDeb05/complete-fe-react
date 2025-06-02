import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext({});

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      if (state < 2) return 0;
      return state - 1;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CounterContextProvider = ({ children }) => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  const value = { counter, dispatch };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider"
    );
  }
  return context;
};

export { CounterContextProvider, useCounterContext };
