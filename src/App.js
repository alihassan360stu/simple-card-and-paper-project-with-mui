import { useEffect } from "react";
import { useState } from "react"
import { Grid, Box} from "@mui/material";
import CardCom from "./CardCom";
import PaperCom from "./PaperCom";
import ButtonAppBar from "./ButtonAppBar";

// import paper from "./paper";
export default function App() {
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState(-1);
  const [search,setSearch]=useState("");
  const [show,setShow]=useState(0);
  useEffect(() => {
    let called = async () => {
      const url = await fetch("https://dummyjson.com/products");
      const urlupdate = await url.json();
      setData(urlupdate.products);
    }
    called();
  }, [])

  useEffect(()=>{

    data.map((value,index)=>{
      if(value.brand===search || value.category===search)
      {
        setShow(1);
        setGetId(index);
        console.log("matching");
      }
    })

  },[search])
  return (
    <div>
     < ButtonAppBar method={(n)=>{  setSearch(n)  }}/>
    
    <Grid mt={1.5} container spacing={0}>
      {
        data.map((item, index) => {

          if (index <= 400) {
            return (

              <Grid key={index} item lg={3} xs={12} sm={6} md={4} xl={2}>

                <Box p={2}>

                  {
                    (getId===item.id)?
                    <PaperCom des={item.description} cat={item.category} brand={item.brand} method={(n)=>{setGetId(n)}}/>
                    :
                    
                  <CardCom title={item.title} url={item.images[0]} method={(n) => {
                    setGetId(n);
                  }} id={item.id} />
                  }
                </Box>
              </Grid>
            )
          }
         return null
        })
      }
    </Grid>

    </div>
  )

}