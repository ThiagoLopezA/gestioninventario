import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import PersonIcon from "@mui/icons-material/Person";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TodayIcon from "@mui/icons-material/Today";

const inventoryProducts = {
  title: "Productos en el inventario",
  number: 282,
  icon: <WidgetsRoundedIcon />,
};
const agendedSuppliers = {
  title: "Proveedores agendados",
  number: 12,
  icon: <PersonIcon />,
};
const usersInventory = {
  title: "Usuarios en el sistema",
  number: 10,
  icon: <GroupsRoundedIcon />,
};
const inProcessMovements = {
  title: "Movimientos en proceso",
  number: 2,
  icon: <WarningIcon />,
};
const completedMovements = {
  title: "Movimientos hechos",
  number: 121,
  icon: <CheckCircleIcon />,
};
const todayMovements = {
  title: "Movimientos de este día",
  number: 8,
  icon: <TodayIcon />,
};
const requestedProducts = {
  title: "Pedidos en proceso",
  number: 6,
  icon: <WarningIcon />,
};
const todayProducts = {
  title: "Productos recibidos hoy",
  number: 15,
  icon: <TodayIcon />,
};

export {
  inventoryProducts,
  agendedSuppliers,
  usersInventory,
  inProcessMovements,
  completedMovements,
  todayMovements,
  requestedProducts,
  todayProducts,
};
