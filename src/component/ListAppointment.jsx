import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./../assets/css/userinfo.css";
import doctor_avt from "./../assets/img/handdrawn_vector_61.jpg";

const avtElemnt = () => {
    return (
        <div className="last-booking-item d-flex px-3 pt-1 pb-1 border-0">
            <div className="last-booking-item-avt ">
                <img src={doctor_avt} alt="doctor" width={"100%"} height={"100%"} />
            </div>
            <div className="last-booking-item-info flex-grow-1 mx-4 ">
                <p className="text-semibold">Dr. Nguyễn Hữu Danh</p>
                <p className="color-gray">Nha sĩ</p>
            </div>
        </div>
    );
};

const statusJsx = (status) => {
    switch (status) {
        case "Confirm":
            return <span className="status status-success">{status}</span>;
        case "Cancel":
            return <span className="status status-cancel">{status}</span>;
        case "Pending":
            return <span className="status status-pending">{status}</span>;
        default:
            return null;
    }
};

const columns = [
    { id: "doctor", label: "Bác sĩ", minWidth: 170 },
    { id: "booking_date", label: "Ngày hẹn", minWidth: 100 },
    {
        id: "amount",
        label: "Chi phí",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("it-IT", { style: "currency", currency: "VND" }),
    },
    {
        id: "status",
        label: "Trạng thái",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];

function createData(doctor, booking_date, amount, status) {
    return { doctor, booking_date, amount, status };
}

const rows = [
    createData(avtElemnt(), "20-10-2022", 400000, statusJsx("Confirm")),
    createData(avtElemnt(), "20-10-2022", 400000, statusJsx("Confirm")),
    createData(avtElemnt(), "20-10-2022", 400000, statusJsx("Pending")),
    createData(avtElemnt(), "20-10-2022", 405000, statusJsx("Cancel")),
    createData(avtElemnt(), "20-10-2022", 300000, statusJsx("Confirm")),
    createData(avtElemnt(), "20-10-2022", 500000, statusJsx("Cancel")),
    createData(avtElemnt(), "20-10-2022", 400000, statusJsx("Pending")),
];
const ListAppointment = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: "100%", overflow: "hidden", fontSize: 15 }}>
            <TableContainer sx={{ maxHeight: 440, fontSize: 15 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ fontSize: 14, fontWeight: "600" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                sx={{ fontSize: 14 }}
                                            >
                                                {column.format && typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{ fontSize: 14 }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default ListAppointment;
