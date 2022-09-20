import { createContext, useReducer } from "react";
import styles from "./App.module.scss";
import CounterUseReducer from "./Components/CounterUseReducer";
export const generalContext = createContext();

function App() {
  

  const initialState = {
    index: 0 ,
    color:"green"
  };

  const reducer = (state , action) => {
    switch (action.type) {
      case "precedente":
        return {...state,index: state.index - 1};

      case "prossimo":
        return {...state,index: state.index + 1};

      case "reset":
        return (state = initialState);

      case "colorchange":
        return {...state, color: action.payload};
    default: return initialState}
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const Variables = { state, initialState, dispatch };

  return (
    <div className={styles.App}>
      <generalContext.Provider value={Variables}>
        <CounterUseReducer />
      </generalContext.Provider>
    </div>
  );
}

export default App;
