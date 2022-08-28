import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarC(props) {




  

  return (
    <Stack spacing={2}  sx={{ width: '100%' }}>
      <Snackbar open={props.snack}   autoHideDuration={1000} >
        <Alert severity="success" sx={{ width: '100%' }}>
          Transaction added successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
