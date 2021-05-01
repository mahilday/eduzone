import main from "../styles/Main.module.css"
import Image from "next/image"
import {Grid, Typography} from "@material-ui/core"
export function Main(){
    return(
    <div className={main.container}>
      <Grid item className={main.writeup} sm={4} xs={10}>
        <Typography variant="h4" className={main.textWhite} gutterBottom>
          <strong>Best Education For EduZone University</strong>
        </Typography>
        <Typography variant="subtitle1" className={main.textWhite}>
          Labore amet sunt enim occaecat nostrud fugiat id irure. Dolor qui
          fugiat excepteur incididunt esse incididunt. Tempor amet Lorem do
          adipisicing adipisicing officia.
        </Typography>
        </Grid>
        </div>
    )
}