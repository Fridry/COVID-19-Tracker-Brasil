import React from "react";
import { Grid } from "@material-ui/core";

import CardItem from "./CardItem";

import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  const {
    cases,
    confirmed,
    deaths,
    recovered,
    updated_at,
    suspects,
    refuses,
  } = data;

  if (!cases) {
    return "loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify="center">
        <CardItem
          title={"Casos Confirmados"}
          styleTag={styles.infected}
          dataEnd={confirmed ? confirmed : cases}
          dataUpdate={updated_at}
        />

        <CardItem
          title={confirmed ? "Casos Ativos" : "Casos Suspeitos"}
          styleTag={styles.active}
          dataEnd={confirmed ? cases : suspects}
          dataUpdate={updated_at}
        />

        <CardItem
          title={recovered ? "Pacientes Recuperados" : "Casos descartados"}
          styleTag={styles.recovered}
          dataEnd={recovered ? recovered : refuses}
          dataUpdate={updated_at}
        />

        <CardItem
          title={"Mortes"}
          styleTag={styles.deaths}
          dataEnd={deaths}
          dataUpdate={updated_at}
        />
      </Grid>
    </div>
  );
};

export default Cards;
