import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./Table.module.css";
export default function Table({ cols, rows, size }) {
  const isSmall = size => size == "small";
  return (
    <Grid item xs={12} md={isSmall(size) ? 6 : 12}>
      <section className={styles.container}>
        <DataGrid
          rows={rows}
          columns={cols}
          rowsPerPageOptions={[10]}
          pageSize={10}
          disableSelectionOnClick
        />
      </section>
    </Grid>
  );
}
