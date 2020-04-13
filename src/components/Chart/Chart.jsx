import React, { useState, useEffect } from "react";

import { estado, pais } from "../../api";

import { Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ country }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      if (!country) {
        setCountryData(await pais());
      } else {
        const countryId = country.toLowerCase();
        setCountryData(await estado(countryId));
      }
    };

    fetchAPI();
  }, [country]);

  const {
    confirmed,
    cases,
    recovered,
    suspects,
    refuses,
    deaths,
    state,
  } = countryData;

  const barChartEstados = countryData.cases ? (
    <Bar
      data={{
        labels: [
          "Casos Confirmados",
          "Suspeitos",
          "Casos descartados",
          "Mortes",
        ],
        datasets: [
          {
            label: "Casos",
            borderColor: [
              "rgba(0, 0, 255, 1)",
              "rgba(241, 253, 3, 1)",
              "rgba(0, 255, 0, 1)",
              "rgba(255, 0, 0, 1)",
            ],
            borderWidth: 0.7,
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(241, 253, 3, 1)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [cases, suspects, refuses, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Casos no estado: ${state}`,
        },
      }}
    />
  ) : null;

  const barChartBrasil = countryData.cases ? (
    <Bar
      data={{
        labels: [
          "Casos Confirmados",
          "Casos Ativos",
          "Pacientes Recuperados",
          "Mortes",
        ],
        datasets: [
          {
            label: "Casos",
            borderColor: [
              "rgba(0, 0, 255, 1)",
              "rgba(241, 253, 3, 1)",
              "rgba(0, 255, 0, 1)",
              "rgba(255, 0, 0, 1)",
            ],
            borderWidth: 0.7,
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(241, 253, 3, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed, cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: "Casos no Brasil",
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? barChartEstados : barChartBrasil}
    </div>
  );
};

export default Chart;
