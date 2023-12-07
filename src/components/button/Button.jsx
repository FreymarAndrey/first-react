import styles from  "./button.module.css";

const CustomBotton = () => {


    const handleClick = () => {
        alert("hizo click")
    }

  return (
    <div>
        <p>
            esto es un boton que yo mismo cree
        </p>
        <button className={styles.boton} onClick={handleClick}>Haga click</button>
    </div>
  )
}

export default CustomBotton
