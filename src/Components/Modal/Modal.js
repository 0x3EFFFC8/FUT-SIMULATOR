import styles from './Modal.module.css'
function Modal({onClose}) {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <button onClick={() => {onClose();}}>Cerrar</button>
      </div>
    </div>

  );

}

export default Modal;
