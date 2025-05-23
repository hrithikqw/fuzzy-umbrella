import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import file from "../images/file.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20rem",
  boxShadow: 100,
  backgroundColor: "#313030",
  p: 0,
  borderRadius: "10px",
  textAlign: "center",
};

const ContactModal = ({ name, url, desc }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === "Hire Me") {
      navigate("/hire-me");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <button
        style={{ border: "none", cursor: "pointer" }}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={file} width="100px" alt={name.toLowerCase()} />
          <Typography fontFamily="Poppins">{name}</Typography>
        </Box>
      </button>

      {/* Only show modal for non–"Hire Me" items */}
      {name !== "Hire Me" && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            backdropFilter: "blur(0px)",
            backgroundColor: "#F0F0F047",
          }}
        >
          <Box sx={style}>
            <Typography
              backgroundColor="#75EBF8"
              color="black"
              fontFamily="Courier Prime"
              fontSize="1.2rem"
              textAlign="left"
              borderRadius="5px 5px 0 0"
              p="0.5rem 1rem"
            >
              {">>"} {name}
            </Typography>
            <Box p="1rem" backgroundColor="#313030" borderRadius="0 0 10px 10px">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    backgroundColor: "#313030",
                    fontFamily: "Courier Prime",
                    padding: "0.5rem",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    border: "1.5px solid #75EBF8",
                    borderRadius: "10px",
                    color: "#75EBF8",
                  }}
                >
                  {desc}
                </button>
              </a>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  backgroundColor: "#313030",
                  paddingTop: "1rem",
                }}
              >
                click anywhere to close
              </Typography>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default ContactModal;
