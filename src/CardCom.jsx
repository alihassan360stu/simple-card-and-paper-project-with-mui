import { Card,CardActions,CardActionArea,CardMedia,Typography,Button ,CardContent} from "@mui/material"



const CardCom =(obj)=>{
    return(
        <Card style={{display:(true)?"block":"none"}}>
        <CardActionArea>
          <CardMedia style={{ height: 150, margin: 1 }} image={obj.url} />
          <CardContent style={{ height: 70 ,display: "flex", justifyContent: "center"  }}>
            <Typography varient="h4">
              {obj.title}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}>
          <Button  variant="contained" onClick={()=>{  obj.method(obj.id)}}>
            READ
          </Button>
        </CardActions>
      </Card>
    )
}

export default CardCom;