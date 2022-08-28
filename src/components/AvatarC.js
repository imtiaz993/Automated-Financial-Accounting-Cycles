import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarC() {
  return (
    <Stack direction="row"  spacing={2}>
      <Avatar alt="Imtiaz" src="images/imtiaz.jpg" />
      <Avatar alt="Huzefa" src="/images/huzaifa.jpg" />
      <Avatar alt="Waris" src="/images/waris.png" />
      <Avatar alt="Zehra" src="/images/girl.jpg" />
      <Avatar alt="Mushfira" src="/images/girl.jpg" />
      
    </Stack>
  );
}