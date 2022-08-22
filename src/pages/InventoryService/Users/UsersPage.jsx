import React from "react";
import { Grid } from "@mui/material";
import Action from "../../../components/Actions/Action";
import ActionsRow from "../../../components/Actions/ActionsRow";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EntityCard from "../../../components/DataDisplay/EntityCard";
export default function Users() {
  return (
    <>
      <Grid container>
        <ActionsRow
          title="Panel de control"
          subtitle="Opciones disponibles para ejecutar sobre los usuarios"
        >
          <Action title="Agregar un usuario" icon={<AddIcon />} />
          <Action title="Buscar un usuario" icon={<SearchIcon />} />
        </ActionsRow>
      </Grid>
      <Grid container spacing={2} className="card_container">
        <EntityCard
          name="Usuario"
          location="Buenos Aires"
          buttonText="Editar"
        />
        <EntityCard
          name="Usuario"
          location="Buenos Aires"
          buttonText="Editar"
        />
        <EntityCard
          name="Usuario"
          location="Buenos Aires"
          buttonText="Editar"
        />
      </Grid>
    </>
  );
}
