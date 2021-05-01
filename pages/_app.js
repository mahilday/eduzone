import '../styles/globals.css'
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {main:"#2ec4b6"}
  }
})
function MyApp({ Component, pageProps }) {

  return(
    <MuiThemeProvider theme ={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
     
     )
}

export default MyApp
