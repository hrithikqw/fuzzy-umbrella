import { Box, Typography, useMediaQuery } from "@mui/material";
import { Fade } from "react-reveal";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import Heading from "./components/heading";
import Navbar from "./components/navbar";

const Fun = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  return (
    <Box mb="2rem">
      <Heading name="My Education" />
      
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="90%"
        m="4rem auto auto auto"
      >
        <Box
          padding="1.5rem"
          width={isNotMobile ? "70vw" : "90vw"}
          backgroundColor="#090A18"
          border="2px solid #11D6F44F"
          borderRadius="0.4rem"
          mb="2rem"
          mx="auto"
        >
          {/* Education */}
          <Box display="flex" alignItems="center" mb={3}>
            <SchoolIcon sx={{ fontSize: 40, color: "#11D6F4", mr: 2 }} />
            <Fade bottom>
              <Box>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.8rem",
                    color: "#11D6F4",
                  }}
                >
                  Bachelor of Engineering in Computer Science
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                 Sathyabama University , 2022-2026
                </Typography>
              </Box>
            </Fade>
          </Box>

          {/* Coursework */}
          <Fade bottom cascade>
            <Box
              mb={2}
              p={2}
              backgroundColor="#0a0b1d"
              border="1px solid #11D6F41A"
              borderRadius="0.4rem"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <BookIcon sx={{ fontSize: 24, color: "#11D6F4", mr: 1 }} />
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.2rem",
                    color: "#11D6F4",
                  }}
                >
                  Coursework
                </Typography>
              </Box>
              
              <Box 
                p={1.5}
                backgroundColor="#090A18"
                border="1px solid #11D6F44F"
                borderRadius="0.4rem"
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ color: "#11D6F4" }}>Advanced coursework in:</span> Data Structures & Algorithms, 
                  Database Systems & RDBMS, Computer Networks & Network Security, Operating Systems, 
                  Software Engineering, Machine Learning, and Cloud Computing
                </Typography>
              </Box>
            </Box>
          </Fade>
          
          {/* Certifications */}
          <Fade bottom>
            <Box
              mb={2}
              p={2}
              backgroundColor="#0a0b1d"
              border="1px solid #11D6F41A"
              borderRadius="0.4rem"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <VerifiedIcon sx={{ fontSize: 24, color: "#11D6F4", mr: 1 }} />
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.2rem",
                    color: "#11D6F4",
                  }}
                >
                  Certifications
                </Typography>
              </Box>
              
              <Box 
                display="grid" 
                gridTemplateColumns={isNotMobile ? "repeat(3, 1fr)" : "1fr"}
                gap={2}
              >
                {/* MongoDB */}
                <Box
                  p={1}
                  backgroundColor="#090A18"
                  border="1px solid #11D6F44F"
                  borderRadius="0.4rem"
                >
                  <a href="https://drive.google.com/drive/folders/1ElmENCmxehmptJR7NSwMky-0dRJEIcRQ?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        color: "#11D6F4",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        cursor: "pointer"
                      }}
                    >
                      MongoDB
                    </Typography>
                  </a>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Introduction to MongoDB for Students
                  </Typography>
                </Box>
                
                {/* Machine Learning */}
                <Box
                  p={1}
                  backgroundColor="#090A18"
                  border="1px solid #11D6F44F"
                  borderRadius="0.4rem"
                >
                  <a href="https://drive.google.com/drive/folders/1ElmENCmxehmptJR7NSwMky-0dRJEIcRQ?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        color: "#11D6F4",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        cursor: "pointer"
                      }}
                    >
                      Machine Learning
                    </Typography>
                  </a>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Cognitiveclass
                  </Typography>
                </Box>
                
                {/* Data Analysis with Python */}
                <Box
                  p={1}
                  backgroundColor="#090A18"
                  border="1px solid #11D6F44F"
                  borderRadius="0.4rem"
                >
                  <a href="https://drive.google.com/drive/folders/1ElmENCmxehmptJR7NSwMky-0dRJEIcRQ?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        color: "#11D6F4",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        cursor: "pointer"
                      }}
                    >
                      Data Analysis with Python
                    </Typography>
                  </a>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Cognitiveclass
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
          
          {/* Achievements */}
          <Fade bottom>
            <Box
              p={2}
              backgroundColor="#0a0b1d"
              border="1px solid #11D6F41A"
              borderRadius="0.4rem"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <EmojiEventsIcon sx={{ fontSize: 24, color: "#11D6F4", mr: 1 }} />
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "1.2rem",
                    color: "#11D6F4",
                  }}
                >
                  Achievements
                </Typography>
              </Box>
              
              <Box 
                display="grid" 
                gridTemplateColumns={isNotMobile ? "repeat(2, 1fr)" : "1fr"}
                gap={2}
              >
                <Box
                  p={1}
                  backgroundColor="#090A18"
                  border="1px solid #11D6F44F"
                  borderRadius="0.4rem"
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "#11D6F4",
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    }}
                  >
                    Top 25 in SIH Internal Hackathon
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Developed An Indian Sign Language Recognition system using OpenCV.
                  </Typography>
                </Box>
                
                <Box
                  p={1}
                  backgroundColor="#090A18"
                  border="1px solid #11D6F44F"
                  borderRadius="0.4rem"
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "#11D6F4",
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    }}
                  >
                    Top 100 in RBI HaRBInger 
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    FinTech solution for currency identification for the visually impaired using AI and computer vision.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
      
      <Navbar prev="Skills" next="experience" />
    </Box>
  );
};

export default Fun;
