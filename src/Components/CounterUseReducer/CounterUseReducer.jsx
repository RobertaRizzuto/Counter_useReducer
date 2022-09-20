import styles from "./index.module.scss";
import Button from "../Button";
import dettiSiciliani from "../../Assets/detti-siciliani";
import { useContext } from "react";
import { generalContext } from "../../App";

const Counter_useReducer = () => {
  const receivedContext = useContext(generalContext);

  return (
    <div className={styles.Counter}>
      <div className={styles.Text}><h1 style={{ color: receivedContext.state.color }}>
        {dettiSiciliani[receivedContext.state.index].detto}
      </h1>
      <p>{dettiSiciliani[receivedContext.state.index].traduzione}</p>
     </div> <div className={styles.Buttons}><Button
        onBtnClick={() => receivedContext.dispatch({ type: "precedente" })}
        disabled={receivedContext.state.index === 0 && true}
        textContent="precedente"
      />
      <Button
        onBtnClick={() => receivedContext.dispatch({ type: "prossimo" })}
        disabled={
          receivedContext.state.index === dettiSiciliani.length - 1 && true
        }
        textContent="prossimo"
      />
      <Button
        onBtnClick={() => receivedContext.dispatch({ type: "reset" })}
        textContent="reset"
      />
      <Button
        onBtnClick={() =>
          receivedContext.state.color === receivedContext.initialState.color
            ? receivedContext.dispatch({ type: "colorchange", payload: "red" })
            : receivedContext.dispatch({
                type: "colorchange",
                payload: receivedContext.initialState.color,
              })
        }
        textContent="colorchange"
      /></div>
    </div>
  );
};

export default Counter_useReducer;
