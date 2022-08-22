import { Grid, TextField } from "@mui/material";
import React from "react";
import Action from "../../../components/Actions/Action";
import ActionsRow from "../../../components/Actions/ActionsRow";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EntityCard from "../../../components/DataDisplay/EntityCard";
import useDialog from "../../../hooks/useDialog";
import Modal from "../../../components/Actions/Modal";
import Searchbar from "../../../components/Inputs/Searchbar";
import useForm from "../../../hooks/useForm";

export default function Providers() {
  const [openAdd, handleOpenAdd, handleCloseAdd] = useDialog();
  const [openSearch, handleOpenSearch, handleCloseSearch] = useDialog();
  const [addForm, handleForm] = useForm({
    name: "",
    phone: "",
    email: "",
    location: "",
  });
  const handleAddSubmit = e => {
    e.preventDefault();
    console.log(addForm);
  };
  return (
    <>
      <Grid container>
        <ActionsRow
          title="Panel de control"
          subtitle="Opciones disponibles para ejecutar sobre los proveedores"
        >
          <Action
            title="Agregar un proveedor"
            icon={<AddIcon />}
            onClick={handleOpenAdd}
          />
          <Action
            title="Buscar un proveedor"
            icon={<SearchIcon />}
            onClick={handleOpenSearch}
          />
        </ActionsRow>
      </Grid>
      <Grid container spacing={2}>
        <EntityCard
          name="Proveedor"
          location="Buenos Aires"
          buttonText="Ver datos"
        />
        <EntityCard
          name="Proveedor"
          location="Buenos Aires"
          buttonText="Ver datos"
        />
        <EntityCard
          name="Proveedor"
          location="Buenos Aires"
          buttonText="Ver datos"
        />
        <EntityCard
          name="Proveedor"
          location="Buenos Aires"
          buttonText="Ver datos"
        />
      </Grid>

      <Modal
        open={openAdd}
        title="Agregar un proveedor"
        closeButton="Cancelar"
        confirmButton="Agregar"
        handleClose={handleCloseAdd}
        handleSubmit={handleAddSubmit}
      >
        <TextField label="Nombre" name="name" onChange={handleForm} />
        <TextField label="Telefono" name="phone" onChange={handleForm} />
        <TextField label="Email" name="email" onChange={handleForm} />
        <TextField label="Ubicación" name="location" onChange={handleForm} />
      </Modal>

      <Modal
        open={openSearch}
        title="Buscar un proveedor"
        handleClose={handleCloseSearch}
      >
        <Searchbar placeholder="Buscar un proveedor" />
      </Modal>
    </>
  );
}
