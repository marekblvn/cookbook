import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function DeleteModal({ item, onYes, onClose }) {
  return (
    <Dialog open={!!item} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">
        Are you sure want to delete {item?.name}?
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={() => onYes(item)} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteModal;
