import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";

import styles from "./Cards.module.css";
import moment from "moment";
import "moment/locale/pt-br";

const CardItem = ({ title, styleTag, dataEnd, dataUpdate }) => {
  moment.locale("pt-br");
  const atualizacao = moment(dataUpdate).format("LLL");

  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={4}
      className={cx(styles.card, styleTag)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="h5">
          <CountUp start={0} end={dataEnd} duration={2.5} separator="," />
        </Typography>

        <Typography color="textSecondary">
          Atualizado em: {atualizacao}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
