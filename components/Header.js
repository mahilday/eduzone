import React, { useState } from "react";
import Image from "next/image";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  Button,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  PhoneInTalkOutlined,
  LocationOnOutlined,
  ScheduleOutlined,
  DraftsOutlined,
  Menu,
  Search,
} from "@material-ui/icons";
import styles from "../styles/Header.module.css";

const contact = {
  phone: "+00 888 6668811",
  location: "1073 W Stephen Ave, Clawson",
  time: "Mon - Sat 8.00 - 18.00 ",
  email: "info@example.com",
};
const color = "#2ec4b6";
const navComp = [
  "HOME",
  "FEATURES",
  "PAGES",
  "SHOP",
  "BLOG",
  "ELEMENT",
  "CONTACT US",
];

export function MobileHeader() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "left";
  return (
    <div className={`${styles.mobilePadding}`}>
      <Grid container>
        <Grid item xs={10}>
          <Image
            src="/images/logo-1.png"
            className={styles.logo}
            alt="logo"
            width={150}
            height={35}
          />
        </Grid>
        <Grid item xs={1}>
          <Box component="span" ml={-2}>
            <Button>
              <Search className={styles.flipIcon} />
            </Button>
          </Box>
        </Grid>

        <React.Fragment>
          <Grid item xs={1}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <Menu />
            </Button>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            My name is Mathilda
          </Drawer>
        </React.Fragment>
      </Grid>
    </div>
  );
}
const useStyles = makeStyles({
    root:{
        minWidth: "50px",
        fontWeight: "700",
    },
    button:{
        '&.MuiButton-root':{
            textTransform: "capitalize",
            color: "#fff",
            fontWeight: "700"
        }
    }
})

export function DesktopHeader() {
    const classes = useStyles()
  const [desktopValue, setDesktopValue] = useState(0);

  const handleDesktopChange = (event, newValue) => {
    setDesktopValue(newValue);
  };
  return (
    <div>
      {/* topNav */}
      <Box className={styles.desktopWrapper}>
        <Box className={styles.topNav}>
          <Grid container className={styles.spaceBetween}>
            <Grid item xs={6}>
              <Box className={`${styles.flexRow}`} spacing={2}>
                <Grid
                  item
                  xs={6}
                  className={`${styles.flexRow} ${styles.addRightBorder}`}
                >
                  <PhoneInTalkOutlined className={styles.icon} />
                  <Typography variant="subtitle1" className={styles.pxSmall}>
                    {contact.phone}
                  </Typography>
                </Grid>
                <span style={{ color: "#777" }}>|</span>
                <Grid item xs={6} className={`${styles.flexRow}`}>
                  <LocationOnOutlined className={styles.icon} />
                  <Typography variant="subtitle1" className={styles.pxSmall}>
                    {contact.location}
                  </Typography>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                className={`${styles.flexRow} ${styles.centralize}`}
                spacing={2}
              >
                <Grid item className={`${styles.flexRow}`}>
                  <ScheduleOutlined className={styles.icon} />
                  <Typography variant="subtitle1" className={styles.pxSmall}>
                    {contact.time}
                  </Typography>
                </Grid>
                <Grid item className={`${styles.flexRow}`}>
                  <DraftsOutlined className={styles.icon} />
                  <Typography variant="subtitle1" className={styles.pxSmall}>
                    {contact.email}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container className={`${styles.mainNav}`}>
          <Grid item xs={3} className={`${styles.addRightBorder} ${styles.flexRow}`}>
            <Image
              src="/images/logo-1.png"
              className={`${styles.logo}`}
              alt="logo"
              width={200}
              height={35}
            />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Tabs
                value={desktopValue}
                onChange={handleDesktopChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                {navComp.map((item, index) => (
                  <Tab className={classes.root} key={index} label={item} />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={1} className={`${styles.flexRow} ${styles.centralize}`}>
              <Search className={`${styles.flipIcon}`} />
          </Grid>
          <Grid item xs={2}>
              <Button className={classes.button} variant ="contained" color="primary" disableElevation>Apply Now</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
