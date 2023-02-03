import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from "@mui/material"
import { FC, forwardRef, useState } from "react"
import { AlertS } from "./styles"
import { useDispatch } from 'react-redux';
import { changeModalState } from 'stores/slices/modalSlices';

interface ICustomAlert {
  type?: 'success' | 'info' | 'warning' | 'error';
  content: string;
  openData: boolean;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <AlertS elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomAlert: FC<ICustomAlert> = ({
  type = 'success',
  content,
  openData
}) => {

  const dispatch = useDispatch()

  const [open, setOpen] = useState(openData);

  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    dispatch(changeModalState(null))
  };

  return (
    <Snackbar open={open} anchorOrigin={{vertical: "bottom", horizontal: "center"}} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {content}
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert