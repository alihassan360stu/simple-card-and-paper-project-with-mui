import { Paper, Box, Typography, Button } from "@mui/material";

let PaperCom = (obj) => {

  return (

    <Paper style={{ padding: 15, height: 284, position: "relative" , display:"flex", justifyContent:"center" }}>
      <Box>
        <Box mt={3}><Typography>{obj.des}</Typography></Box>
        <Box mt={2}><Typography>{obj.cat}</Typography></Box>
        <Box mt={2}><Typography>{obj.brand}</Typography></Box>
      </Box>
      <Box textAlign="center" position="absolute" bottom="2vh">
        <Button variant="contained" onClick={() => { obj.method(-1) }}>
          BACK
        </Button></Box>
    </Paper>
  )
}

export default PaperCom;