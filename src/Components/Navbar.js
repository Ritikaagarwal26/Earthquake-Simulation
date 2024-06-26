import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            path: "/"
        },
        {
            text: "About",
            icon: <InfoIcon />,
            path: "/About"
          },
          {
            text: "How It Works",
            icon: <CommentRoundedIcon />,
            path: "/"
          },
          {
            text: "Contact us",
            icon: <PhoneRoundedIcon />,
            path: "/contact"
        },
          /*{
            text: "Testimonial",
            icon: <PhoneRoundedIcon />,
          },
          {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
          }*/
      
    ];
    return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" style={{height: '80px', width: '200px'}} />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        
        <a href="#work">How It Works</a>
        {/* <a href="#Testimonials">Testimonials</a> */}
        <a href="#About">About</a>
        <a href="#contact-us-section">Contact us</a>
        <Link to="/predict"> <a href="">
        <button className="primary-button" id="visual">Visualise Now</button>
        </a></Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
