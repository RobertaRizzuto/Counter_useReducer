import styles from './index.module.scss';

const Button = ({textContent, onBtnClick, disabled=false }) => {
  return (
    <button className={styles.Button} onClick={onBtnClick} disabled={disabled} >{ textContent }</button>
  )
}

export default Button;