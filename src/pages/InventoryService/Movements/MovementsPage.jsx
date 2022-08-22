import React from "react";
import Card from "../../../components/DataDisplay/Card";
import { Grid } from "@mui/material";
import Searchbar from "../../../components/Inputs/Searchbar";
import { movements } from "../../../utils/columnsConfig";
import { fakeRows } from "./fakedata";
import {
  completedMovements,
  todayMovements,
  inProcessMovements,
} from "../../../hooks/useCards";
import Table from "../../../components/DataDisplay/Table";

export default function Movements() {
  const colsMovements = movements;
  const rows = fakeRows;
  const cards = [inProcessMovements, completedMovements, todayMovements];

  return (
    <>
      <Grid container spacing={1} className="card_container">
        {cards.map((e, i) => {
          return (
            <Card title={e.title} number={e.number} icon={e.icon} key={e + i} />
          );
        })}
      </Grid>
      <Grid container>
        <Searchbar placeholder="Buscar recibo..." />
      </Grid>
      <Table cols={colsMovements} rows={rows} />
    </>
  );
}
