import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LastOrders(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  LastOrders('1278412', '10/12/21', '10:00', 24 + ' ₪'),
  LastOrders('1278857', '10/01/22', '10:20', 37+ ' ₪'),
  LastOrders('1235658', '15/02/22', '22:00', 24+ ' ₪'),
  LastOrders('1235684', '18/03/22', '22:10', 67+ ' ₪'),
  LastOrders('1239954', '01/04/22', '21:15', 49+ ' ₪'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 180 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>מספר הזמנה</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">שעה</TableCell>
            <TableCell align="right">סכום</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
