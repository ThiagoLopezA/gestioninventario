import React from "react";
import Card from "../../../components/DataDisplay/Card";
import { Grid, TextField } from "@mui/material";
import Searchbar from "../../../components/Inputs/Searchbar";
import Action from "../../../components/Actions/Action";
import ActionsRow from "../../../components/Actions/ActionsRow";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NorthIcon from "@mui/icons-material/North";
import useDialog from "../../../hooks/useDialog";
import Modal from "../../../components/Actions/Modal";
import useForm from "../../../hooks/useForm";
import {
  inventoryProducts,
  requestedProducts,
  todayProducts,
} from "../../../hooks/useCards";
import { fakeRows } from "./fakedata";
import { inventory } from "../../../utils/columnsConfig";
import Table from "../../../components/DataDisplay/Table";
export default function Inventory() {
  const [openAdd, handleOpenAdd, handleCloseAdd] = useDialog();
  const [openSearch, handleOpenSearch, handleCloseSearch] = useDialog();
  const cards = [requestedProducts, inventoryProducts, todayProducts];
  const [form, handleForm] = useForm({ name: "", serial: "", quantity: "" });
  const rows = fakeRows;
  const cols = inventory;

  const handleAddSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

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
        <ActionsRow
          title="Panel de control"
          subtitle="Opciones disponibles para ejecutar sobre el inventario"
        >
          <Action
            title="Agregar un producto"
            icon={<AddIcon />}
            onClick={handleOpenAdd}
          />
          <Action
            title="Buscar un producto"
            icon={<SearchIcon />}
            onClick={handleOpenSearch}
          />
          <Action title="Distribuir productos" icon={<NorthIcon />} />
        </ActionsRow>
      </Grid>
      <Table rows={rows} cols={cols} />
      <Modal
        open={openAdd}
        title="Agregar un producto"
        closeButton="Cancelar"
        confirmButton="Agregar"
        handleClose={handleCloseAdd}
        handleSubmit={handleAddSubmit}
      >
        <TextField label="Serial" name="serial" onChange={handleForm} />
        <TextField label="Nombre" name="name" onChange={handleForm} />
        <TextField label="Cantidad" name="quantity" onChange={handleForm} />
      </Modal>

      <Modal
        open={openSearch}
        title="Buscar un producto"
        handleClose={handleCloseSearch}
      >
        <Searchbar placeholder="Buscar un producto" />
      </Modal>
    </>
  );
}
