
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useState } from 'react';


export default function ButtonAppBar(obj) {
  const [search, setSearch] = useState("");
  return (
    <Box >
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography variant="h6" component="div">
            HOME
          </Typography>

          <Typography variant="h6" component="div">
            ABOUT
          </Typography>
          <Typography variant="h6" component="div">
            CONTAC
          </Typography>
          <Typography variant="h6" component="div">
            SERVESE
          </Typography>
          <form onSubmit={((e) => {
            e.preventDefault();
            obj.method(search);
            setSearch("");
          })}>

            <TextField
              onChange={(e) => { setSearch(e.target.value) }}
              value={search}
              type="search" placeholder='search' variant='standard' style={{ backgroundColor: "white", marginLeft: "30vw", padding: 2, paddingLeft: 8 }} />
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
