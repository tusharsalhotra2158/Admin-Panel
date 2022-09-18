import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconButton } from "@chakra-ui/react";
import "./dashboard.css";

export default function Action() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <IconButton
          className="active-btn"
          icon={<FiEdit />}
          style={{
            borderColor: "transparent",
            borderRadius: "100%",
            color: "red",
            width: "30px",
            height: "35px",
          }}
        />
      </div>
      <div>
        <IconButton
          className="active-btn"
          icon={<RiDeleteBin5Line />}
          style={{
            borderColor: "transparent",
            borderRadius: "100%",
            color: "black",
            width: "30px",
            height: "35px",
          }}
        />
      </div>
    </div>
  );
}
