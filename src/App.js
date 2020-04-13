import React, { useState, useEffect } from "react";

import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";

import coronaImg from "./images/image.png";

import { pais, estado } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const countryData = async () => {
      const dataCountry = await pais();
      setData(dataCountry);
    };

    countryData();
  }, [setData]);

  const handleCountryChange = async (countryId) => {
    const dataCountry = await estado(countryId);

    setData(dataCountry);
    setCountry(countryId);
  };

  return (
    <div className={styles.container}>
      <img src={coronaImg} className={styles.image} alt="COVID-19" />
      <h1 className={styles.title}>Brasil</h1>
      <Cards data={data} />

      <CountryPicker handleCountryChange={handleCountryChange} />

      <Chart country={country} />
    </div>
  );
};

export default App;
