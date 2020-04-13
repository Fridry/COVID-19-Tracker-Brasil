import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";

import { todosEstados } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setEstados(await todosEstados());
    };

    fetchAPI();
  }, [setEstados]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Brasil</option>
        {estados.map((estado) => (
          <option key={estado.uf} value={estado.uf}>
            {estado.state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
