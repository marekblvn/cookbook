import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

export default function IngredientTable({ ingredients, onEdit, onDelete }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 800,
        "& .MuiTableCell-head": { backgroundColor: "#ffb618" },
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Units</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <TableRow
              key={ingredient._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{ingredient._id}</TableCell>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell align="right">{ingredient.unit}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onEdit(ingredient)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onDelete(ingredient)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
