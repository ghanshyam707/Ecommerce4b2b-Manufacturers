"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.scss";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FireTruckOutlinedIcon from "@mui/icons-material/FireTruckOutlined";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

const NavBarItems = [
  {
    id: 1,
    label: "DashBaord",
    path: "/user",
    active: true,
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: 2,
    label: "Orders",
    path: "/user/orders",
    active: false,
    icon: <FireTruckOutlinedIcon />,
  },
  {
    id: 3,
    label: "Products",
    path: "/user/myproducts",
    active: false,
    icon: <Inventory2OutlinedIcon />,
  },
  {
    id: 4,
    label: "Add New Product",
    path: "/user/addnewproduct",
    active: false,
    icon: <CreateOutlinedIcon />,
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [tiles, SetTiles] = useState(NavBarItems);
  const router = useRouter()
  const handleTileClick = (id) => {
    SetTiles((pre) => {
      return pre.map((item) => {
        if (item.id === id) {
          router.push(item.path)
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
    });
  };
  const handleToggle = () => {
    setOpen((pre) => !pre);
  };

  return (
    <SpeedDial
      ariaLabel=""
      icon={<SpeedDialIcon />}
      open={open}
      onClick={handleToggle}
    >
      {tiles.map((item) => {
        return (
          <SpeedDialAction
            key={item.id}
            icon={<span className={styles["icon-style"]}>{item.icon}</span>}
            tooltipTitle={
              <span className={styles["label-style"]}>{item.label}</span>
            }
            tooltipOpen
            onClick={() => handleTileClick(item.id)}
          ></SpeedDialAction>
        );
      })}
    </SpeedDial>
  );
}
