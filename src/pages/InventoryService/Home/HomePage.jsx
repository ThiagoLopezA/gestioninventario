import React from "react";
import Card from "../../../components/DataDisplay/Card";
import { Grid } from "@mui/material";
import { fakeRows } from "./fakedata";
import {
  inventoryProducts,
  agendedSuppliers,
  usersInventory,
} from "../../../hooks/useCards";
import { lastEntries, lastMovements } from "../../../utils/columnsConfig";
import Table from "../../../components/DataDisplay/Table";
export default function Home() {
  const cards = [inventoryProducts, agendedSuppliers, usersInventory];
  const colsLastEntries = lastEntries;
  const colsLastMovements = lastMovements;
  return (
    <>
      <Grid container spacing={1} className="card_container">
        {cards.map((e, i) => {
          return (
            <Card title={e.title} number={e.number} icon={e.icon} key={e + i} />
          );
        })}
      </Grid>
      <Grid container spacing={2} className="card_container">
        <Table rows={fakeRows} cols={colsLastEntries} size="small" />
        <Table rows={fakeRows} cols={colsLastMovements} size="small" />
      </Grid>
    </>
  );
}
