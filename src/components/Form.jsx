import { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from './Form.module.css'

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const userData = useFetch(searchTerm); // Ejecuta fetch cuando cambia searchTerm

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue); // Esto activa useFetch
    setInputValue('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInput} placeholder="Busca un usuario"/>
            <button onClick={handleSearch}>Buscar</button>
        </form>
    </>
  );
};

export default Form;