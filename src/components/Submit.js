import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function Submit() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Button variant="contained" endIcon={<AddIcon />}>
        Add Entry
      </Button>
    </Stack>
  );
}
