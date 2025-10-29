import React, { useState } from "react";
import { Box, Typography, Modal, useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import ContactModal from "./components/ContactModal";
import file from "./images/file.png";
import resume from "./images/resume.pdf";

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

const Contact = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  const [openResume, setOpenResume] = useState(false);
  const handleOpenResume = () => setOpenResume(true);
  const handleCloseResume = () => setOpenResume(false);

  return (
    <Box>
      <Heading name="Contact Me" />

      <Fade cascade damping={0.5}>
        <Box
          display={isNotMobile ? "flex" : "grid"}
          gridTemplateColumns="repeat(2,1fr)"
          gap={isNotMobile ? "3rem" : "2rem"}
          maxWidth="80%"
          mx="auto"
          mt="6rem"
        >
          {/* Resume Download */}
          <Box>
            <button
              style={{ border: "none", cursor: "pointer" }}
              onClick={handleOpenResume}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={file} width="100px" alt="resume" />
                <Typography fontFamily="Poppins">Resume</Typography>
              </Box>
            </button>
            <Modal
              open={openResume}
              onClose={handleCloseResume}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(49, 48, 48, 0.8)",
              }}
            >
              <Box sx={style}>
                <Typography
                  backgroundColor="#69ADB5"
                  color="black"
                  fontFamily="Courier Prime"
                  fontSize="1.2rem"
                  textAlign="left"
                  borderRadius="5px 5px 0 0"
                  p="0.5rem 1rem"
                >
                  {">>"} Resume
                </Typography>
                <Box p="1rem" backgroundColor="#313030" borderRadius="0 0 10px 10px">
                  <a href={resume} download="Hrithik's_Resume" target="_blank" rel="noreferrer">
                    <Box
                      component="button"
                      sx={{
                        backgroundColor: "#313030",
                        fontFamily: "Courier Prime",
                        padding: "0.5rem",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        border: "1.5px solid #69ADB5",
                        borderRadius: "10px",
                        color: "#69ADB5",
                      }}
                    >
                      Download Resume
                    </Box>
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
          </Box>

          {/* Hire Me (handled by ContactModal) */}
          <ContactModal name="Hire Me" url="/hire-me" desc="Go to Hire Me page" />

          {/* Other contact links */}
          
          <ContactModal
            name="LinkedIn"
            url="https://www.linkedin.com/in/hrithik-roshan-65145718b"
            desc="View LinkedIn profile"
          />
          <ContactModal
            name="GitHub"
            url="https://github.com/hrithikqw"
            desc="View GitHub profile"
          />
          <ContactModal
            name="Leetcode"
            url="https://leetcode.com/u/hrithikm485/"
            desc="View Leetcode profile"
          />
          <ContactModal
            name="Hugging Face"
            url="https://huggingface.co"
            desc="View Hugging Face"
          />
          <ContactModal
            name="Discord"
            url="https://discord.gg/your-server"
            desc="View Discord profile"
          />
          <ContactModal
            name="Source Code"
            url="https://github.com/hrithikqw/Portfolio-website"
            desc="View source code"
          />
        </Box>
      </Fade>

      <Navbar prev="experience" />
    </Box>
  );
};

export default Contact;
