import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
const drawerWidth = 240;
const navItems = ["Türkçe", "Giriş Yap", "Kayıt ol"];

function Header(props) {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    TR: "+90",
    DE: "+49",
    IT: "+39",
    IN: "+91",
    FR: "+33",
    ES: "+34",
    BR: "+55",
    RU: "+7",
    CN: "+86",
    CA: "+1",
    MX: "+52",
    AR: "+54",
    CO: "+57",
    CL: "+56",

  };
  // * ülke alan kodlarını bir objede tuttum.

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          data-testid="main-image"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yNi4wMzggOS4yNGMwLTIuNzQtMi4yMzctNC41MjctNS41Mi00LjUyNy0zLjExMSAwLTYuMzY3IDIuMjM3LTYuMzY3IDcuMjE1IDAgMy43OTkgMi4zMDMgNi42MDYgNi4yNzUgNi42MDYgMi4yMzcgMCA0LjY5OS0xLjI3MSA1LjMyMi0yLjE0NSAwIDAtLjQyNC0xLjY0Mi0xLjU4OC0xLjY0Mi0uNjA5IDAtMS4wNTkuMjM4LTEuNTYyLjQzNy0uNTE2LjIxMi0xLjEzOC40MS0xLjkzMy40MS0xLjExMiAwLTMuMDE4LS40MzctMy4wMTgtMi44MzMgMCAwIC45LjI2NSAyLjkzOS4yNjUgNC4zOTUuMDEzIDUuNDU0LTEuODQgNS40NTQtMy43ODZ6TTIwLjY1IDcuNjc4YzEuNTA5IDAgMi4yMzcuODIxIDIuMjM3IDEuNTc1IDAgLjg4Ny0uNzk0IDEuNDU2LTIuMjM3IDEuNDU2LTIuMTA1IDAtMi44OTktLjI5MS0yLjg5OS0uMzA1LS4wMTMtMS4yNTguOTkzLTIuNzI3IDIuODk5LTIuNzI3em0xMy41NTYgNy45NDNjLTEuNTA5IDAtMi4yOS0xLjI3MS0yLjQzNi0xLjgyNy0uMTQ2LS41NDMtLjIzOC0xLjMyNC0uMjM4LTIuMTMxbC4wMjYtNC4xMDRoMS4wOTljLjg4NyAwIDEuNTYyLS4yNjUgMi4wNTItLjc4MS40NzctLjUxNi43MjgtMS4yMTguNzI4LTIuMDc4aC0zLjg2NWwtLjAyNi0xLjgxNC4wMTMtMS40MDMuMDQtLjg0Ny4wNTMtLjU0M2MtMS4xNzggMC0yLjA2NS4yNTItMi42ODcuNzU1cy0uOTI3IDEuMzI0LS45MjcgMi40ODlsLS4wMjYgOS4wODFjMCAzLjcyIDEuNzc0IDYuMTQyIDUuMTYzIDYuMTQyIDEuNjY4IDAgMi44ODYtLjkgMi44ODYtMi4yNjQgMC0uNDc3LS4wNjYtLjcyOC0uMTA2LS44ODctLjMwNS4wOC0uODQ3LjIxMi0xLjc0Ny4yMTJ6bTguNDg2LjE3MWMtLjc1NSAwLTEuMjMxLS41NDMtMS4yMzEtMS40NDNWNy43OTdsLjAxMy0xLjQwMy4wNC0uODQ3LjA1My0uNTQzYy0xLjE5MSAwLTIuMDkyLjI1Mi0yLjcxNC43NTVzLS45MjcgMS4zMjQtLjkyNyAyLjQ4OUwzNy45IDE0LjkyYzAgMi4zODMgMS41MzUgMy43MDcgMy40NjggMy42MjcgMS4yMTgtLjA1MyAyLjI3Ny0uNjIyIDIuMjc3LTEuOTA2IDAtLjUyOS0uMDkzLS45NjYtLjA5My0uOTY2LS4yNjUuMDY2LS40NjMuMTE5LS44NjEuMTE5ek01MS4zNjMgNS4wM2MtLjcyOCAwLTEuNDY5LjA3OS0yLjIxMS4yNTItLjc0MS4xNTktMS40MTYuNDc3LTIuMDEyLjk0cy0xLjA4NiAxLjA5OS0xLjQ1NiAxLjkxOS0uNTY5IDEuODY3LS41NjkgMy4xNjR2My43NDZjMCAxLjE1Mi4xNDYgMi4yMjQuODQ3IDIuNzU0Ljc1NS41ODIgMS42NDIuNjA5IDIuODIuNjA5bC0uMDUzLS42NzUtLjA0LS44NDctLjAxMy0xLjQwM3YtNC44MDVjMC0xLjEzOC4xODUtMi41OTUgMi4xODQtMi43NjcgMS4xMjUtLjA5MyAyLjExOC0uNTMgMi4xMTgtMS43NDcgMC0uMjc4LS4wNjYtLjgyMS0uMjEyLTEuMTM4aC0xLjQwM3pNNi4yNDggNC43MTNDMi4xNDUgNC43MTMgMCA3LjU4NSAwIDExLjA4YzAgMy4yMyAxLjk3MiA2LjI2MiA1LjU2IDYuMjYyIDEuODUzIDAgMi45MzktLjc5NCAzLjIwNC0xLjAxOXYxLjYxNWMwIDEuODUzLS43MjggMy4wOTgtMi41OTUgMy4wOTgtLjkgMC0xLjU3NS0uMjUyLTIuMTg0LS41NDMtLjU1Ni0uMjY1LS45NjYtLjU2OS0xLjUwOS0uNTY5LTEuMzkgMC0xLjc3NCAxLjcyMS0xLjc3NCAxLjczNEMxLjc0NyAyMy4wMDcgNC4xNDMgMjQgNi4xNTYgMjRjMy45NTggMCA2LjE0Mi0yLjMwMyA2LjE0Mi02Ljg4NHYtNS4zNjFjLS4wMTMtNC4xODMtMS44NjctNy4wNDMtNi4wNS03LjA0M3ptLS4wMTMgOS41MThjLTEuNTM2IDAtMi43MTQtLjk2Ni0yLjcxNC0zLjA5OCAwLTIuMjc3IDEuMjA1LTMuNDU1IDIuNzE0LTMuNDU1IDEuNDgzIDAgMi41NjguOSAyLjU2OCAzLjI4MyAwIDIuNDM2LTEuMTc4IDMuMjctMi41NjggMy4yN3pNMzguOCAzLjY5M2EyLjA0IDIuMDQgMCAwIDAgLjg4Ny4yMTJjLjcyOCAwIDEuMjk3LS4zNDQgMS43MjEtMS4wMzNhMi4wOCAyLjA4IDAgMCAwIC4yNjUtMS4wMDYgMi4wMyAyLjAzIDAgMCAwLS4yMzgtLjk1MyAxLjYxIDEuNjEgMCAwIDAtLjcxNS0uNjc1QTEuNjkgMS42OSAwIDAgMCAzOS44NTkgMGMtLjMzMSAwLS42NjIuMDkzLS45OC4yNzhzLS41NTYuNDUtLjc0MS43ODFjLS4xNzIuMjkxLS4yNjUuNjM1LS4yNjUgMS4wMDZhMS44NiAxLjg2IDAgMCAwIC4yMzguOTI3Yy4xNTkuMjkxLjM5Ny41My42ODguNzAyeiIgZmlsbD0iI2ZmZDMwMCIvPjxnIGZpbGw9IiNmNGYyZmQiPjxwYXRoIGQ9Ik04MS45NDIgOS40MjljMC0yLjc2Ny0yLjI2NC00LjU2Ny01LjU2LTQuNTY3LTMuMTM3IDAtNi40MiAyLjI1LTYuNDIgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDI0LTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2NS4yNjUgNC40MzUgMCA1LjUwNy0xLjg4IDUuNTA3LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2NCAxLjQ2OS0yLjExOCAwLTIuOTI1LS4yOTEtMi45MjUtLjMwNCAwLTEuMjg0IDEuMDA2LTIuNzUzIDIuOTM5LTIuNzUzem0tOS4yMTQuMDhhMjUuMzEgMjUuMzEgMCAwIDEtLjk1MyAyLjk5MmwtMS4xNjUgMi43OTMtMS4wOTkgMi4zMy0uNzgxIDEuNTc1LTEuNDU2IDIuNzE0Yy0uNDM3LjcyOC0uODYgMS4yOTctMS4yNTggMS43MzQtLjQxLjQzNy0uODIxLjc0MS0xLjIzMS45NC0uNDEuMTg1LS44Ni4yOTEtMS4zMzcuMjkxLS41MTYgMC0uOTQtLjExOS0xLjI0NC0uMzU3LS4zMTgtLjIzOC0uNDc3LS41MDMtLjQ3Ny0uNzgxdi0uODQ3aDEuMDcyYy4yNjUgMCAuNTE2LS4wMjYuNzQxLS4wOTMuMjI1LS4wNTMuNDYzLS4xODUuNzE1LS4zOTdzLjUxNi0uNTMuODA3LS45NTMuNjIyLTEuMDA2IDEuMDA2LTEuNzM0Yy0uNTE2LS43OTQtMS4wMzMtMS43MDgtMS41NjItMi43MTRsLTEuNDgzLTMuMTY0TDU2LjM1NCA4LjlhMjUuNTIgMjUuNTIgMCAwIDEtLjg0Ny0zLjM2MmgxLjI5N2MuNDYzIDAgLjc5NC4xNDYuOTkzLjQzN2EzLjEzIDMuMTMgMCAwIDEgLjQxLjkxM2wuNTgyIDIuMTU4LjgyMSAyLjM1NiAxLjAxOSAyLjM3Yy4zNzEuNzgxLjc2OCAxLjUyMiAxLjE5MSAyLjE5N2wxLjEyNS0yLjI2NCAxLjEzOC0yLjc5My45NTMtMi44NzNjLjI3OC0uOTUzLjQ3Ny0xLjc4Ny41ODMtMi41MjhoLjljLjMwNSAwIC41NTYuMDY2Ljc1NS4yMTJzLjMwNS40MS4zMDUuODA4YzAgLjEzMi0uMDQuMzU3LS4xMDYuNjYybC0uMTcyLjc0MXoiLz48cGF0aCBkPSJNNTguMDIxIDIzLjk1MWMtLjY3NSAwLTEuMjE4LS4xNzItMS42NDEtLjQ5LS41OTYtLjQ1LS43MjgtLjk0LS43MjgtMS4yODR2LTEuNDgzaDEuNzA4YTIuMTMgMi4xMyAwIDAgMCAuNTU2LS4wNjZsLjA0LS4wMTNjLjA5My0uMDI2LjIzOC0uMDc5LjQ1LS4yNjUuMTk5LS4xNTkuNDI0LS40MzcuNjg4LS44MjFhMTUuNTQgMTUuNTQgMCAwIDAgLjc5NC0xLjMzN2wtMS4zOS0yLjQ0OWMtLjUxNi0uOTY2LTEuMDA2LTIuMDI1LTEuNTA5LTMuMjE3bC0xLjI3MS0zLjQxNWMtLjM3MS0xLjExMi0uNjYyLTIuMjc3LS44NjEtMy40NDJsLS4xMzItLjc1NWgyLjA2NWMuODYgMCAxLjI5Ny4zODQgMS41MjIuNzE1bC4wMTMuMDEzYy4yMzguMzcxLjM5Ny43NDEuNDkgMS4wOTl2LjAxM2MuMTMyLjYyMi4zMzEgMS4zMzcuNTY5IDIuMTA1bC44MDcgMi4zMTcgMS4wMDYgMi4zMy41ODMgMS4xNTIuNTY5LTEuMjA1IDEuMTI1LTIuNzUzLjk0LTIuODMzYy4yNzgtLjk2Ni40NjMtMS43NzQuNTY5LTIuNDM2bC4wNzktLjU1NmgxLjQ1NmMuNDUgMCAuODM0LjExOSAxLjEzOC4zMzEuMzcxLjI3OC41NjkuNzE1LjU2OSAxLjMyNCAwIC4xNzItLjA0LjQxLS4xMTkuNzk0bC0uMTg1Ljc2OGEyNS41NyAyNS41NyAwIDAgMS0uOTggMy4wNThsLTEuMTc4IDIuODMzLS4xMTkuMjUyLS45OTMgMi4xMDUtLjI2NS41MTYtLjUxNiAxLjA0Ni0xLjQ4MyAyLjc4Yy0uNDM3LjcxNS0uODg3IDEuMzM3LTEuMzM3IDEuODQtLjQ1LjQ5LS45MjcuODQ3LTEuNDMgMS4wODVsLS4wMTMuMDEzYy0uNDkuMjEyLTEuMDMzLjMzMS0xLjU4OS4zMzF6bS0xLjA3Mi0xLjk4NnYuMjEyYzAgLjA1My4wNTMuMTQ2LjIyNS4yNjUuMTk5LjE1OS40OS4yMjUuODYxLjIyNXMuNzI4LS4wNzkgMS4wNzItLjIyNWMuMzQ0LS4xNzIuNzAyLS40MzcgMS4wMzMtLjc5NC4zODQtLjQyNC43ODEtLjk4IDEuMTc4LTEuNjI4LjQ2My0uNzY4Ljk0LTEuNjY4IDEuNDMtMi42NjFsLjUzLTEuMDcyLjI1Mi0uNTE2Ljk4LTIuMDY1LjExOS0uMjM4IDEuMTUyLTIuNzUzYy4zODQtLjk4LjY4OC0xLjkzMy45MjctMi45MTJ2LS4wMjZhOS43MSA5LjcxIDAgMCAwIC4xNTktLjcwMmwuMDkzLS41M2MwLS4yMjUtLjA1My0uMjkxLS4wNTMtLjI5MS0uMDc5LS4wNTMtLjE5OS0uMDc5LS4zNzEtLjA3OWgtLjM1N2EyMC4zOCAyMC4zOCAwIDAgMS0uNTE2IDIuMDY1bC0uOTY2IDIuOTEyLTEuMTUyIDIuODMzTDYyLjM5IDE2LjNsLS41MjkuOTUzLS41ODItLjkxM2MtLjQyNC0uNjYyLS44MzQtMS40My0xLjIzMS0yLjI2NGwtMS4wMzItMi40MDktLjgzNC0yLjM5Ni0uNTk2LTIuMTk3Yy0uMDUzLS4yMjUtLjE1OS0uNDUtLjMxOC0uNzAyLS4wMjYtLjA0LS4xMTktLjE0Ni0uNDYzLS4xNDZoLS41MTZsLjY3NSAyLjUyOGEzNC4zMSAzNC4zMSAwIDAgMCAxLjIzMSAzLjMwOWwxLjQ1NiAzLjExMSAxLjUzNiAyLjY2MS4xOTkuMzE4LS4xNzIuMzMxLTEuMDQ2IDEuOGMtLjM0NC40OS0uNjM2LjgzNC0uOTI3IDEuMDg2LS4zMzEuMjc4LS42MzUuNDUtLjk2Ni41MjktLjI2NS4wNzktLjU2OS4xMTktLjkuMTE5aC0uNDI0di0uMDUzem00NC4xMjEtMy42NjZjLS40MSAwLS43NTQtLjEzMi0xLjAxOS0uNDFzLS4zOTctLjY2Mi0uMzk3LTEuMTY1di01LjU4NmMwLTEuMzI0LS4yMzgtMi4yNzctLjcxNS0yLjg0NnMtMS4xMzgtLjg0Ny0yLjAxMi0uODQ3Yy0xLjA0NiAwLTEuOC4yNzgtMi4yNjQuODQ3cy0uNzAyIDEuNDk2LS43MDIgMi43NjdWMTguM2gtLjcyOGMtLjUxNiAwLS44ODctLjEzMi0xLjExMi0uNDFzLS4zMzEtLjY2Mi0uMzMxLTEuMTY1di01LjU4NmMwLTEuMTUyLS4yMzgtMi4wNTItLjcyOC0yLjcxNC0uNDktLjY0OS0xLjE5MS0uOTgtMi4xMDUtLjk4LS45NTMgMC0xLjY1NS4yOTEtMi4xMzEuODc0cy0uNzE1IDEuNTIyLS43MTUgMi44MnY3LjE3NWgtLjY4OGMtLjQ2MyAwLS44MjEtLjEzMi0xLjA4NS0uMzg0LS4yNjUtLjI2NS0uMzk3LS42NjItLjM5Ny0xLjE5MXYtNS44NjRjMC0uNzI4LjExOS0xLjQxNi4zNDQtMi4wNzhzLjU1Ni0xLjI0NC45OTMtMS43MzRjLjQzNy0uNTAzLjk4LS44ODcgMS42MTUtMS4xNzguNjQ5LS4yOTEgMS4zNzctLjQzNyAyLjE5Ny0uNDM3Ljk1MyAwIDEuNzM0LjE5OSAyLjM4My41OTYuNjM1LjM5NyAxLjE1Mi45NjYgMS41NDkgMS43MDhBNC43OSA0Ljc5IDAgMCAxIDk0LjY5IDYuMDhjLjcwMi0uNDI0IDEuNDY5LS42MjIgMi4zMDMtLjYyMiAxLjU3NSAwIDIuNzguNDYzIDMuNjAxIDEuNDAzczEuMjMxIDIuMzU2IDEuMjMxIDQuMjQ5djcuMjQxaC0uNzU1di0uMDUzeiIvPjxwYXRoIGQ9Ik0xMDIuNDMzIDE4Ljk2MWgtMS45NzJ2LS4xMzJhMS43NiAxLjc2IDAgMCAxLS44NDctLjUxNmMtLjM3MS0uMzk3LS41NjktLjkyNy0uNTY5LTEuNTg4di01LjU4NmMwLTEuMTY1LS4xOTktMi4wMTItLjU2OS0yLjQ2Mi0uMzU3LS40MjQtLjg0Ny0uNjM1LTEuNTQ5LS42MzUtLjg2IDAtMS40NTYuMTk5LTEuNzg3LjYyMi0uMzcxLjQ1LS41NjkgMS4yODQtLjU2OSAyLjM4M3Y3Ljg1aC0xLjMzN2MtLjcxNSAwLTEuMjQ0LS4yMTItMS41ODgtLjYzNS0uMzE4LS4zODQtLjQ2My0uODg3LS40NjMtMS41NDl2LTUuNTg2YzAtMS4wMzMtLjE5OS0xLjgtLjYwOS0yLjM1Ni0uMzcxLS40OS0uOS0uNzI4LTEuNjE1LS43MjgtLjc1NSAwLTEuMjk3LjIxMi0xLjY2OC42NDktLjM4NC40NjMtLjU4MyAxLjI4NC0uNTgzIDIuNDM2djcuNzg0aC0xLjI4NGMtLjYwOSAwLTEuMTEyLS4xODUtMS41MDktLjU1NmwtLjAxMy0uMDEzYy0uMzg0LS4zODQtLjU2OS0uOTI3LS41NjktMS42MTV2LTUuODY0YTcuNDMgNy40MyAwIDAgMSAuMzcxLTIuMjc3Yy4yNTEtLjc0MS42MjItMS40MDMgMS4xMTItMS45NDYuNDc3LS41NDMgMS4wODYtLjk5MyAxLjgxNC0xLjMyNHMxLjU0OS0uNDkgMi40NDktLjQ5YzEuMDU5IDAgMS45NDYuMjI1IDIuNzAxLjY4OGE0Ljk0IDQuOTQgMCAwIDEgMS4yNTggMS4xNTIgNS4zNyA1LjM3IDAgMCAxIDEuMzI0LTEuMTEyYy43ODEtLjQ3NyAxLjY1NS0uNzE1IDIuNjIxLS43MTUgMS43NjEgMCAzLjEyNC41NDMgNC4wNSAxLjYxNS45MTQgMS4wNDYgMS4zNzcgMi42MDggMS4zNzcgNC42NDZ2Ny44NjNoLjAyNnptLTE3LjY3Mi0xLjQ1NmMuMTU5LjE0Ni4zNzEuMjEyLjY2Mi4yMTJoLjA3OVYxMS4xNWMwLTEuNDU2LjI3OC0yLjUwMi44NDctMy4yMDMuNTk2LS43MjggMS40NjktMS4wOTkgMi41OTUtMS4wOTkgMS4xMTIgMCAxLjk3Mi40MSAyLjU5NSAxLjIxOC41NjkuNzgxLjg0NyAxLjc3NC44NDcgMy4wODR2NS41ODZjMCAuMzU3LjA2Ni42MjIuMTk5Ljc4MS4xMTkuMTU5LjQxLjE4NS42MzUuMTg1aC4xMTlWMTEuMDdjMC0xLjQwMy4yNzgtMi40NjIuODM0LTMuMTUxLjU4Mi0uNzE1IDEuNDk2LTEuMDcyIDIuNzQtMS4wNzIgMS4wNDYgMCAxLjg4LjM1NyAyLjQ3NSAxLjA1OS41ODIuNjg4Ljg2IDEuNzQ3Ljg2IDMuMjN2NS41ODZjMCAuMzQ0LjA4LjU4Mi4yMjUuNzQxYS43NS43NSAwIDAgMCAuNTgzLjIyNWguMTQ1di02LjU3OWMwLTEuNzM0LS4zNTctMy4wMzEtMS4wODUtMy44NTItLjcwMi0uODA4LTEuNzM0LTEuMTkxLTMuMTUxLTEuMTkxLS43NDEgMC0xLjM5LjE3Mi0xLjk4Ni41My0uNjA5LjM3MS0xLjA5OS44Ni0xLjQ1NiAxLjQ1NmwtLjU0My45MjctLjUwMy0uOTRjLS4zNDQtLjY0OS0uNzk0LTEuMTM4LTEuMzM3LTEuNDgzLS41NTYtLjM0NC0xLjIzMS0uNTAzLTIuMDY1LS41MDMtLjc0MSAwLTEuMzc3LjExOS0xLjk0Ni4zODQtLjU4My4yNjUtMS4wMzMuNTk2LTEuNDAzIDEuMDE5YTQuMjcgNC4yNyAwIDAgMC0uODc0IDEuNTM2IDUuNzIgNS43MiAwIDAgMC0uMzE4IDEuODh2NS44NjRjLjAxMy4zNTcuMDkzLjYyMi4yMjUuNzY4em0zMS40NTMtOC4wNzZjMC0yLjc2Ny0yLjI2My00LjU2Ny01LjU1OS00LjU2Ny0zLjEzOCAwLTYuNDIxIDIuMjUtNi40MjEgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDIzLTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2Ni4yNjUgNC40NDcgMCA1LjUwNi0xLjg4IDUuNTA2LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2MyAxLjQ2OS0yLjExOCAwLTIuOTI2LS4yOTEtMi45MjYtLjMwNS4wMTMtMS4yODQgMS4wMTktMi43NTMgMi45MzktMi43NTN6bTEwLjczNS00Ljc4MnY3Ljg3NGMxLjI3My0xLjY2IDIuNTItMy4zNDQgNC4wMy00Ljc5Mi43ODctLjczNiAxLjU3My0uODYxIDIuNjIxLS44NjFoMS44ODR2LjEyNWMtLjkzNi43ODYtMy45OTMgNC4yNTUtNS4zNTMgNS45OWwzLjI1NyAzLjg0M2MxLjE5OCAxLjE5OCAxLjczNCAxLjQ0OCAyLjU0NSAxLjcxLS4zMzcgMS4wNDgtLjg4NiAxLjYxLTIuMjIxIDEuNjEtLjczNiAwLTEuNTg1LS4zMzctMi4xNTktLjkxMS0xLjY4NC0xLjczNS0zLjE1Ny0zLjY5NC00LjYwNC01LjYyOHY2LjQzOWwtMS4wNDguMDI1Yy0xLjUyMy4wMjUtMi4yNDctLjc4Ni0yLjI0Ny0yLjMyMVYuODg4aDEuMDQ5YzEuNTg0IDAgMi4yNDYuOTExIDIuMjQ2IDIuMTg0eiIvPjwvZz48L3N2Zz4="
          alt="GetirYemek"
          shape="NORMAL"
          class="style__Image-sc-__sc-1h9bp23-0 ezAmPr"
        ></img>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              data-testid="main-image"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yNi4wMzggOS4yNGMwLTIuNzQtMi4yMzctNC41MjctNS41Mi00LjUyNy0zLjExMSAwLTYuMzY3IDIuMjM3LTYuMzY3IDcuMjE1IDAgMy43OTkgMi4zMDMgNi42MDYgNi4yNzUgNi42MDYgMi4yMzcgMCA0LjY5OS0xLjI3MSA1LjMyMi0yLjE0NSAwIDAtLjQyNC0xLjY0Mi0xLjU4OC0xLjY0Mi0uNjA5IDAtMS4wNTkuMjM4LTEuNTYyLjQzNy0uNTE2LjIxMi0xLjEzOC40MS0xLjkzMy40MS0xLjExMiAwLTMuMDE4LS40MzctMy4wMTgtMi44MzMgMCAwIC45LjI2NSAyLjkzOS4yNjUgNC4zOTUuMDEzIDUuNDU0LTEuODQgNS40NTQtMy43ODZ6TTIwLjY1IDcuNjc4YzEuNTA5IDAgMi4yMzcuODIxIDIuMjM3IDEuNTc1IDAgLjg4Ny0uNzk0IDEuNDU2LTIuMjM3IDEuNDU2LTIuMTA1IDAtMi44OTktLjI5MS0yLjg5OS0uMzA1LS4wMTMtMS4yNTguOTkzLTIuNzI3IDIuODk5LTIuNzI3em0xMy41NTYgNy45NDNjLTEuNTA5IDAtMi4yOS0xLjI3MS0yLjQzNi0xLjgyNy0uMTQ2LS41NDMtLjIzOC0xLjMyNC0uMjM4LTIuMTMxbC4wMjYtNC4xMDRoMS4wOTljLjg4NyAwIDEuNTYyLS4yNjUgMi4wNTItLjc4MS40NzctLjUxNi43MjgtMS4yMTguNzI4LTIuMDc4aC0zLjg2NWwtLjAyNi0xLjgxNC4wMTMtMS40MDMuMDQtLjg0Ny4wNTMtLjU0M2MtMS4xNzggMC0yLjA2NS4yNTItMi42ODcuNzU1cy0uOTI3IDEuMzI0LS45MjcgMi40ODlsLS4wMjYgOS4wODFjMCAzLjcyIDEuNzc0IDYuMTQyIDUuMTYzIDYuMTQyIDEuNjY4IDAgMi44ODYtLjkgMi44ODYtMi4yNjQgMC0uNDc3LS4wNjYtLjcyOC0uMTA2LS44ODctLjMwNS4wOC0uODQ3LjIxMi0xLjc0Ny4yMTJ6bTguNDg2LjE3MWMtLjc1NSAwLTEuMjMxLS41NDMtMS4yMzEtMS40NDNWNy43OTdsLjAxMy0xLjQwMy4wNC0uODQ3LjA1My0uNTQzYy0xLjE5MSAwLTIuMDkyLjI1Mi0yLjcxNC43NTVzLS45MjcgMS4zMjQtLjkyNyAyLjQ4OUwzNy45IDE0LjkyYzAgMi4zODMgMS41MzUgMy43MDcgMy40NjggMy42MjcgMS4yMTgtLjA1MyAyLjI3Ny0uNjIyIDIuMjc3LTEuOTA2IDAtLjUyOS0uMDkzLS45NjYtLjA5My0uOTY2LS4yNjUuMDY2LS40NjMuMTE5LS44NjEuMTE5ek01MS4zNjMgNS4wM2MtLjcyOCAwLTEuNDY5LjA3OS0yLjIxMS4yNTItLjc0MS4xNTktMS40MTYuNDc3LTIuMDEyLjk0cy0xLjA4NiAxLjA5OS0xLjQ1NiAxLjkxOS0uNTY5IDEuODY3LS41NjkgMy4xNjR2My43NDZjMCAxLjE1Mi4xNDYgMi4yMjQuODQ3IDIuNzU0Ljc1NS41ODIgMS42NDIuNjA5IDIuODIuNjA5bC0uMDUzLS42NzUtLjA0LS44NDctLjAxMy0xLjQwM3YtNC44MDVjMC0xLjEzOC4xODUtMi41OTUgMi4xODQtMi43NjcgMS4xMjUtLjA5MyAyLjExOC0uNTMgMi4xMTgtMS43NDcgMC0uMjc4LS4wNjYtLjgyMS0uMjEyLTEuMTM4aC0xLjQwM3pNNi4yNDggNC43MTNDMi4xNDUgNC43MTMgMCA3LjU4NSAwIDExLjA4YzAgMy4yMyAxLjk3MiA2LjI2MiA1LjU2IDYuMjYyIDEuODUzIDAgMi45MzktLjc5NCAzLjIwNC0xLjAxOXYxLjYxNWMwIDEuODUzLS43MjggMy4wOTgtMi41OTUgMy4wOTgtLjkgMC0xLjU3NS0uMjUyLTIuMTg0LS41NDMtLjU1Ni0uMjY1LS45NjYtLjU2OS0xLjUwOS0uNTY5LTEuMzkgMC0xLjc3NCAxLjcyMS0xLjc3NCAxLjczNEMxLjc0NyAyMy4wMDcgNC4xNDMgMjQgNi4xNTYgMjRjMy45NTggMCA2LjE0Mi0yLjMwMyA2LjE0Mi02Ljg4NHYtNS4zNjFjLS4wMTMtNC4xODMtMS44NjctNy4wNDMtNi4wNS03LjA0M3ptLS4wMTMgOS41MThjLTEuNTM2IDAtMi43MTQtLjk2Ni0yLjcxNC0zLjA5OCAwLTIuMjc3IDEuMjA1LTMuNDU1IDIuNzE0LTMuNDU1IDEuNDgzIDAgMi41NjguOSAyLjU2OCAzLjI4MyAwIDIuNDM2LTEuMTc4IDMuMjctMi41NjggMy4yN3pNMzguOCAzLjY5M2EyLjA0IDIuMDQgMCAwIDAgLjg4Ny4yMTJjLjcyOCAwIDEuMjk3LS4zNDQgMS43MjEtMS4wMzNhMi4wOCAyLjA4IDAgMCAwIC4yNjUtMS4wMDYgMi4wMyAyLjAzIDAgMCAwLS4yMzgtLjk1MyAxLjYxIDEuNjEgMCAwIDAtLjcxNS0uNjc1QTEuNjkgMS42OSAwIDAgMCAzOS44NTkgMGMtLjMzMSAwLS42NjIuMDkzLS45OC4yNzhzLS41NTYuNDUtLjc0MS43ODFjLS4xNzIuMjkxLS4yNjUuNjM1LS4yNjUgMS4wMDZhMS44NiAxLjg2IDAgMCAwIC4yMzguOTI3Yy4xNTkuMjkxLjM5Ny41My42ODguNzAyeiIgZmlsbD0iI2ZmZDMwMCIvPjxnIGZpbGw9IiNmNGYyZmQiPjxwYXRoIGQ9Ik04MS45NDIgOS40MjljMC0yLjc2Ny0yLjI2NC00LjU2Ny01LjU2LTQuNTY3LTMuMTM3IDAtNi40MiAyLjI1LTYuNDIgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDI0LTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2NS4yNjUgNC40MzUgMCA1LjUwNy0xLjg4IDUuNTA3LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2NCAxLjQ2OS0yLjExOCAwLTIuOTI1LS4yOTEtMi45MjUtLjMwNCAwLTEuMjg0IDEuMDA2LTIuNzUzIDIuOTM5LTIuNzUzem0tOS4yMTQuMDhhMjUuMzEgMjUuMzEgMCAwIDEtLjk1MyAyLjk5MmwtMS4xNjUgMi43OTMtMS4wOTkgMi4zMy0uNzgxIDEuNTc1LTEuNDU2IDIuNzE0Yy0uNDM3LjcyOC0uODYgMS4yOTctMS4yNTggMS43MzQtLjQxLjQzNy0uODIxLjc0MS0xLjIzMS45NC0uNDEuMTg1LS44Ni4yOTEtMS4zMzcuMjkxLS41MTYgMC0uOTQtLjExOS0xLjI0NC0uMzU3LS4zMTgtLjIzOC0uNDc3LS41MDMtLjQ3Ny0uNzgxdi0uODQ3aDEuMDcyYy4yNjUgMCAuNTE2LS4wMjYuNzQxLS4wOTMuMjI1LS4wNTMuNDYzLS4xODUuNzE1LS4zOTdzLjUxNi0uNTMuODA3LS45NTMuNjIyLTEuMDA2IDEuMDA2LTEuNzM0Yy0uNTE2LS43OTQtMS4wMzMtMS43MDgtMS41NjItMi43MTRsLTEuNDgzLTMuMTY0TDU2LjM1NCA4LjlhMjUuNTIgMjUuNTIgMCAwIDEtLjg0Ny0zLjM2MmgxLjI5N2MuNDYzIDAgLjc5NC4xNDYuOTkzLjQzN2EzLjEzIDMuMTMgMCAwIDEgLjQxLjkxM2wuNTgyIDIuMTU4LjgyMSAyLjM1NiAxLjAxOSAyLjM3Yy4zNzEuNzgxLjc2OCAxLjUyMiAxLjE5MSAyLjE5N2wxLjEyNS0yLjI2NCAxLjEzOC0yLjc5My45NTMtMi44NzNjLjI3OC0uOTUzLjQ3Ny0xLjc4Ny41ODMtMi41MjhoLjljLjMwNSAwIC41NTYuMDY2Ljc1NS4yMTJzLjMwNS40MS4zMDUuODA4YzAgLjEzMi0uMDQuMzU3LS4xMDYuNjYybC0uMTcyLjc0MXoiLz48cGF0aCBkPSJNNTguMDIxIDIzLjk1MWMtLjY3NSAwLTEuMjE4LS4xNzItMS42NDEtLjQ5LS41OTYtLjQ1LS43MjgtLjk0LS43MjgtMS4yODR2LTEuNDgzaDEuNzA4YTIuMTMgMi4xMyAwIDAgMCAuNTU2LS4wNjZsLjA0LS4wMTNjLjA5My0uMDI2LjIzOC0uMDc5LjQ1LS4yNjUuMTk5LS4xNTkuNDI0LS40MzcuNjg4LS44MjFhMTUuNTQgMTUuNTQgMCAwIDAgLjc5NC0xLjMzN2wtMS4zOS0yLjQ0OWMtLjUxNi0uOTY2LTEuMDA2LTIuMDI1LTEuNTA5LTMuMjE3bC0xLjI3MS0zLjQxNWMtLjM3MS0xLjExMi0uNjYyLTIuMjc3LS44NjEtMy40NDJsLS4xMzItLjc1NWgyLjA2NWMuODYgMCAxLjI5Ny4zODQgMS41MjIuNzE1bC4wMTMuMDEzYy4yMzguMzcxLjM5Ny43NDEuNDkgMS4wOTl2LjAxM2MuMTMyLjYyMi4zMzEgMS4zMzcuNTY5IDIuMTA1bC44MDcgMi4zMTcgMS4wMDYgMi4zMy41ODMgMS4xNTIuNTY5LTEuMjA1IDEuMTI1LTIuNzUzLjk0LTIuODMzYy4yNzgtLjk2Ni40NjMtMS43NzQuNTY5LTIuNDM2bC4wNzktLjU1NmgxLjQ1NmMuNDUgMCAuODM0LjExOSAxLjEzOC4zMzEuMzcxLjI3OC41NjkuNzE1LjU2OSAxLjMyNCAwIC4xNzItLjA0LjQxLS4xMTkuNzk0bC0uMTg1Ljc2OGEyNS41NyAyNS41NyAwIDAgMS0uOTggMy4wNThsLTEuMTc4IDIuODMzLS4xMTkuMjUyLS45OTMgMi4xMDUtLjI2NS41MTYtLjUxNiAxLjA0Ni0xLjQ4MyAyLjc4Yy0uNDM3LjcxNS0uODg3IDEuMzM3LTEuMzM3IDEuODQtLjQ1LjQ5LS45MjcuODQ3LTEuNDMgMS4wODVsLS4wMTMuMDEzYy0uNDkuMjEyLTEuMDMzLjMzMS0xLjU4OS4zMzF6bS0xLjA3Mi0xLjk4NnYuMjEyYzAgLjA1My4wNTMuMTQ2LjIyNS4yNjUuMTk5LjE1OS40OS4yMjUuODYxLjIyNXMuNzI4LS4wNzkgMS4wNzItLjIyNWMuMzQ0LS4xNzIuNzAyLS40MzcgMS4wMzMtLjc5NC4zODQtLjQyNC43ODEtLjk4IDEuMTc4LTEuNjI4LjQ2My0uNzY4Ljk0LTEuNjY4IDEuNDMtMi42NjFsLjUzLTEuMDcyLjI1Mi0uNTE2Ljk4LTIuMDY1LjExOS0uMjM4IDEuMTUyLTIuNzUzYy4zODQtLjk4LjY4OC0xLjkzMy45MjctMi45MTJ2LS4wMjZhOS43MSA5LjcxIDAgMCAwIC4xNTktLjcwMmwuMDkzLS41M2MwLS4yMjUtLjA1My0uMjkxLS4wNTMtLjI5MS0uMDc5LS4wNTMtLjE5OS0uMDc5LS4zNzEtLjA3OWgtLjM1N2EyMC4zOCAyMC4zOCAwIDAgMS0uNTE2IDIuMDY1bC0uOTY2IDIuOTEyLTEuMTUyIDIuODMzTDYyLjM5IDE2LjNsLS41MjkuOTUzLS41ODItLjkxM2MtLjQyNC0uNjYyLS44MzQtMS40My0xLjIzMS0yLjI2NGwtMS4wMzItMi40MDktLjgzNC0yLjM5Ni0uNTk2LTIuMTk3Yy0uMDUzLS4yMjUtLjE1OS0uNDUtLjMxOC0uNzAyLS4wMjYtLjA0LS4xMTktLjE0Ni0uNDYzLS4xNDZoLS41MTZsLjY3NSAyLjUyOGEzNC4zMSAzNC4zMSAwIDAgMCAxLjIzMSAzLjMwOWwxLjQ1NiAzLjExMSAxLjUzNiAyLjY2MS4xOTkuMzE4LS4xNzIuMzMxLTEuMDQ2IDEuOGMtLjM0NC40OS0uNjM2LjgzNC0uOTI3IDEuMDg2LS4zMzEuMjc4LS42MzUuNDUtLjk2Ni41MjktLjI2NS4wNzktLjU2OS4xMTktLjkuMTE5aC0uNDI0di0uMDUzem00NC4xMjEtMy42NjZjLS40MSAwLS43NTQtLjEzMi0xLjAxOS0uNDFzLS4zOTctLjY2Mi0uMzk3LTEuMTY1di01LjU4NmMwLTEuMzI0LS4yMzgtMi4yNzctLjcxNS0yLjg0NnMtMS4xMzgtLjg0Ny0yLjAxMi0uODQ3Yy0xLjA0NiAwLTEuOC4yNzgtMi4yNjQuODQ3cy0uNzAyIDEuNDk2LS43MDIgMi43NjdWMTguM2gtLjcyOGMtLjUxNiAwLS44ODctLjEzMi0xLjExMi0uNDFzLS4zMzEtLjY2Mi0uMzMxLTEuMTY1di01LjU4NmMwLTEuMTUyLS4yMzgtMi4wNTItLjcyOC0yLjcxNC0uNDktLjY0OS0xLjE5MS0uOTgtMi4xMDUtLjk4LS45NTMgMC0xLjY1NS4yOTEtMi4xMzEuODc0cy0uNzE1IDEuNTIyLS43MTUgMi44MnY3LjE3NWgtLjY4OGMtLjQ2MyAwLS44MjEtLjEzMi0xLjA4NS0uMzg0LS4yNjUtLjI2NS0uMzk3LS42NjItLjM5Ny0xLjE5MXYtNS44NjRjMC0uNzI4LjExOS0xLjQxNi4zNDQtMi4wNzhzLjU1Ni0xLjI0NC45OTMtMS43MzRjLjQzNy0uNTAzLjk4LS44ODcgMS42MTUtMS4xNzguNjQ5LS4yOTEgMS4zNzctLjQzNyAyLjE5Ny0uNDM3Ljk1MyAwIDEuNzM0LjE5OSAyLjM4My41OTYuNjM1LjM5NyAxLjE1Mi45NjYgMS41NDkgMS43MDhBNC43OSA0Ljc5IDAgMCAxIDk0LjY5IDYuMDhjLjcwMi0uNDI0IDEuNDY5LS42MjIgMi4zMDMtLjYyMiAxLjU3NSAwIDIuNzguNDYzIDMuNjAxIDEuNDAzczEuMjMxIDIuMzU2IDEuMjMxIDQuMjQ5djcuMjQxaC0uNzU1di0uMDUzeiIvPjxwYXRoIGQ9Ik0xMDIuNDMzIDE4Ljk2MWgtMS45NzJ2LS4xMzJhMS43NiAxLjc2IDAgMCAxLS44NDctLjUxNmMtLjM3MS0uMzk3LS41NjktLjkyNy0uNTY5LTEuNTg4di01LjU4NmMwLTEuMTY1LS4xOTktMi4wMTItLjU2OS0yLjQ2Mi0uMzU3LS40MjQtLjg0Ny0uNjM1LTEuNTQ5LS42MzUtLjg2IDAtMS40NTYuMTk5LTEuNzg3LjYyMi0uMzcxLjQ1LS41NjkgMS4yODQtLjU2OSAyLjM4M3Y3Ljg1aC0xLjMzN2MtLjcxNSAwLTEuMjQ0LS4yMTItMS41ODgtLjYzNS0uMzE4LS4zODQtLjQ2My0uODg3LS40NjMtMS41NDl2LTUuNTg2YzAtMS4wMzMtLjE5OS0xLjgtLjYwOS0yLjM1Ni0uMzcxLS40OS0uOS0uNzI4LTEuNjE1LS43MjgtLjc1NSAwLTEuMjk3LjIxMi0xLjY2OC42NDktLjM4NC40NjMtLjU4MyAxLjI4NC0uNTgzIDIuNDM2djcuNzg0aC0xLjI4NGMtLjYwOSAwLTEuMTEyLS4xODUtMS41MDktLjU1NmwtLjAxMy0uMDEzYy0uMzg0LS4zODQtLjU2OS0uOTI3LS41NjktMS42MTV2LTUuODY0YTcuNDMgNy40MyAwIDAgMSAuMzcxLTIuMjc3Yy4yNTEtLjc0MS42MjItMS40MDMgMS4xMTItMS45NDYuNDc3LS41NDMgMS4wODYtLjk5MyAxLjgxNC0xLjMyNHMxLjU0OS0uNDkgMi40NDktLjQ5YzEuMDU5IDAgMS45NDYuMjI1IDIuNzAxLjY4OGE0Ljk0IDQuOTQgMCAwIDEgMS4yNTggMS4xNTIgNS4zNyA1LjM3IDAgMCAxIDEuMzI0LTEuMTEyYy43ODEtLjQ3NyAxLjY1NS0uNzE1IDIuNjIxLS43MTUgMS43NjEgMCAzLjEyNC41NDMgNC4wNSAxLjYxNS45MTQgMS4wNDYgMS4zNzcgMi42MDggMS4zNzcgNC42NDZ2Ny44NjNoLjAyNnptLTE3LjY3Mi0xLjQ1NmMuMTU5LjE0Ni4zNzEuMjEyLjY2Mi4yMTJoLjA3OVYxMS4xNWMwLTEuNDU2LjI3OC0yLjUwMi44NDctMy4yMDMuNTk2LS43MjggMS40NjktMS4wOTkgMi41OTUtMS4wOTkgMS4xMTIgMCAxLjk3Mi40MSAyLjU5NSAxLjIxOC41NjkuNzgxLjg0NyAxLjc3NC44NDcgMy4wODR2NS41ODZjMCAuMzU3LjA2Ni42MjIuMTk5Ljc4MS4xMTkuMTU5LjQxLjE4NS42MzUuMTg1aC4xMTlWMTEuMDdjMC0xLjQwMy4yNzgtMi40NjIuODM0LTMuMTUxLjU4Mi0uNzE1IDEuNDk2LTEuMDcyIDIuNzQtMS4wNzIgMS4wNDYgMCAxLjg4LjM1NyAyLjQ3NSAxLjA1OS41ODIuNjg4Ljg2IDEuNzQ3Ljg2IDMuMjN2NS41ODZjMCAuMzQ0LjA4LjU4Mi4yMjUuNzQxYS43NS43NSAwIDAgMCAuNTgzLjIyNWguMTQ1di02LjU3OWMwLTEuNzM0LS4zNTctMy4wMzEtMS4wODUtMy44NTItLjcwMi0uODA4LTEuNzM0LTEuMTkxLTMuMTUxLTEuMTkxLS43NDEgMC0xLjM5LjE3Mi0xLjk4Ni41My0uNjA5LjM3MS0xLjA5OS44Ni0xLjQ1NiAxLjQ1NmwtLjU0My45MjctLjUwMy0uOTRjLS4zNDQtLjY0OS0uNzk0LTEuMTM4LTEuMzM3LTEuNDgzLS41NTYtLjM0NC0xLjIzMS0uNTAzLTIuMDY1LS41MDMtLjc0MSAwLTEuMzc3LjExOS0xLjk0Ni4zODQtLjU4My4yNjUtMS4wMzMuNTk2LTEuNDAzIDEuMDE5YTQuMjcgNC4yNyAwIDAgMC0uODc0IDEuNTM2IDUuNzIgNS43MiAwIDAgMC0uMzE4IDEuODh2NS44NjRjLjAxMy4zNTcuMDkzLjYyMi4yMjUuNzY4em0zMS40NTMtOC4wNzZjMC0yLjc2Ny0yLjI2My00LjU2Ny01LjU1OS00LjU2Ny0zLjEzOCAwLTYuNDIxIDIuMjUtNi40MjEgNy4yODEgMCAzLjgzOSAyLjMxNyA2LjY3MiA2LjMyOCA2LjY3MiAyLjI2NCAwIDQuNzM5LTEuMjg0IDUuMzYxLTIuMTcxIDAgMC0uNDIzLTEuNjU1LTEuNjAyLTEuNjU1LS42MjIgMC0xLjA3Mi4yMzgtMS41NzUuNDUtLjUyOS4yMTItMS4xNTIuNDEtMS45NTkuNDEtMS4xMjUgMC0zLjA0NS0uNDUtMy4wNDUtMi44NTkgMCAwIC45LjI2NSAyLjk2Ni4yNjUgNC40NDcgMCA1LjUwNi0xLjg4IDUuNTA2LTMuODI2em0tNS40MjctMS41NzVjMS41MjIgMCAyLjI1LjgzNCAyLjI1IDEuNTg5IDAgLjktLjgwNyAxLjQ2OS0yLjI2MyAxLjQ2OS0yLjExOCAwLTIuOTI2LS4yOTEtMi45MjYtLjMwNS4wMTMtMS4yODQgMS4wMTktMi43NTMgMi45MzktMi43NTN6bTEwLjczNS00Ljc4MnY3Ljg3NGMxLjI3My0xLjY2IDIuNTItMy4zNDQgNC4wMy00Ljc5Mi43ODctLjczNiAxLjU3My0uODYxIDIuNjIxLS44NjFoMS44ODR2LjEyNWMtLjkzNi43ODYtMy45OTMgNC4yNTUtNS4zNTMgNS45OWwzLjI1NyAzLjg0M2MxLjE5OCAxLjE5OCAxLjczNCAxLjQ0OCAyLjU0NSAxLjcxLS4zMzcgMS4wNDgtLjg4NiAxLjYxLTIuMjIxIDEuNjEtLjczNiAwLTEuNTg1LS4zMzctMi4xNTktLjkxMS0xLjY4NC0xLjczNS0zLjE1Ny0zLjY5NC00LjYwNC01LjYyOHY2LjQzOWwtMS4wNDguMDI1Yy0xLjUyMy4wMjUtMi4yNDctLjc4Ni0yLjI0Ny0yLjMyMVYuODg4aDEuMDQ5YzEuNTg0IDAgMi4yNDYuOTExIDIuMjQ2IDIuMTg0eiIvPjwvZz48L3N2Zz4="
              alt="GetirYemek"
              shape="NORMAL"
              class="style__Image-sc-__sc-1h9bp23-0 ezAmPr"
            ></img>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
      <Box
        sx={{ display: { xs: "none", md: "block" } }}
        className=""
        style={{
          position: "absolute",
          zIndex: "4",
          top: "300px",
          left: "100px",
        }}
      >
        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
      </Box>
      <Box
        sx={{ display: { xs: "none", lg: "block" } }}
        style={{
          position: "absolute",
          zIndex: "4",
          top: "500px",
          left: "90px",
        }}
      >
        <Typography
          variant="h6"
          style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}
        >
          Dakikalar İçinde <br /> Kapınızda
        </Typography>
      </Box>

      <Box
        className="rounded d-none d-sm-none d-md-none d-lg-block d-xl-block"
        style={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: "4",
          top: "300px",
          right: "50px",
          padding: "10px",
        }}
      >
        <Typography color="secondary" className="text-center">Giriş yap veya kayıt ol</Typography>
        {/* color direk verilebilir. */}

        {/* <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}

        <div className="d-flex gap-3 mt-3">
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            //! burada bayrakları getirdi object.keys in içine objeyi at.
            customLabels={phones}
            placeholder="Select Language"
            onSelect={(code) => setSelected(code)}
            //* burada seçilen bayrağı set ediyor.
            selected={selected}
            className ="p-2"
          />

          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
        <div className="mt-3" style= {{display : "flex" , justifyContent : "center" , width : "100%"}}>
        <button  style= {{ width : "100%"}}  type="button" className="btn btn-warning">
          <span className="opacity-75">Telefon Numarası ile devam et</span>
          </button>
        </div>
      
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
