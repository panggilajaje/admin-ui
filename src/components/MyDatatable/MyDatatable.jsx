import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Products", width: 130 },
];

const rows = [
  { id: 1, firstName: "KTM 890"},
  { id: 2, firstName: "Kawasaki Ninja ZX-4RR"},
  { id: 3, firstName: "Suzuki GSX-8S"},
  { id: 4, firstName: "Ducati Streetfighter V4/S/SP2/Lamborghini "},
  { id: 5, firstName: "BMW M 1000 RR"},
  { id: 6, firstName: "Harley-Davidson Low Rider ST"},
  { id: 7, firstName: "Ducati Superleggera V4"},
  { id: 8, firstName: "Harley-Davidson Pan America 1250/Spesial"},
  { id: 9, firstName: "Supra Bapak"},
  { id: 10, firstName: "Iccikiwir"},


];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
