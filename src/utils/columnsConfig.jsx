import MovementLocations from "../components/DataDisplay/MovementLocations/MovementsLocations";
import StyledChip from "../components/DataDisplay/StyledChip/StyledChip";
import StyledButton from "../components/Inputs/Button";

const lastEntries = [
  { field: "id", headerName: "Id", flex: 0.2 },
  { field: "title", headerName: "Ultimos ingresos", flex: 0.8 },
];
const lastMovements = [
  { field: "id", headerName: "Id", flex: 0.2 },
  { field: "title", headerName: "Ultimas distribuciones", flex: 0.8 },
];
const movements = [
  { field: "id", headerName: "Número de recibo", flex: 0.2 },
  {
    field: "locations",
    headerName: "Flujo",
    renderCell: params => {
      console.log(params);
      return (
        <MovementLocations from={params.value.from} to={params.value.to} />
      );
    },
    flex: 0.3,
  },
  {
    field: "status",
    headerName: "Estado",
    renderCell: params => {
      return <StyledChip title={params.value} />;
    },
    flex: 0.12,
  },
  { field: "created_at", headerName: "Fecha de emisión", flex: 0.2 },
  {
    field: "button",
    headerName: "",
    renderCell: cellValues => {
      return (
        <StyledButton
          text="Detalle"
          active="true"
          link={`/reports/${cellValues.row.id}`}
        />
      );
    },
    flex: 0.1,
  },
];
const inventory = [
  { field: "id", headerName: "Nro. Serial", flex: 0.1 },
  { field: "name", headerName: "Nombre del producto", flex: 0.3 },
  { field: "quantity", headerName: "Cantidad", flex: 0.2 },
  { field: "updated_at", headerName: "Ultima actualización", flex: 0.3 },
  {
    field: "button",
    headerName: "",
    renderCell: cellValues => {
      return (
        <StyledButton
          text="Detalle"
          active="true"
          link={`/inventory/${cellValues.row.id}`}
        />
      );
    },
    flex: 0.1,
  },
];
export { lastEntries, lastMovements, movements, inventory };
