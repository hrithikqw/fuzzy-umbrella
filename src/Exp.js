import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import nodebrew from "./images/nodebrew.png";
import zillion from "./images/zillion.jpg";
import fit from "./images/logo.png";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const Exp = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  return (
    <Box mb="10rem">
      <Heading name="My Experience" />

      <Box mt="3rem" maxWidth={"80%"} ml="auto" mr="auto">
        <Fade cascade damping={0.5}>
          {/* GeoLedger */}
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Founder & CEO - GeoLedger
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Current
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fit}
                  width={isNotMobile ? "80px" : "100px"}
                  height={isNotMobile ? "80px" : "100px"}
                  style={{ objectFit: "cover" }}
                  alt="GeoLedger"
                />
              </a>
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Developing a permissioned blockchain platform that mints
                location-based property deeds as unique NFTs—ensuring only
                authorized registry offices can issue or transfer titles,
                preventing title counterfeiting. Engineering a unified system
                for high-resolution deed digitization, secure off-chain (IPFS)
                storage, and rapid, tamper-resistant on-chain transfers with
                one-click verification.
              </Typography>
            </Box>
          </Box>

          {/* Zillion Technologies */}
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Software Developer Intern - Zillion Technologies Inc.
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                June 2024 - Present
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <a
                href="https://zilliontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={zillion}
                  width={isNotMobile ? "80px" : "100px"}
                  height={isNotMobile ? "80px" : "100px"}
                  style={{ objectFit: "cover" }}
                  alt="Zillion"
                />
              </a>
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Currently working on a smart auto-labeling pipeline using
                machine learning and large language models (LLMs) to label raw
                data, and on fine-tuning transformer-based models to generate
                auto labels for multimodal datasets.
              </Typography>
            </Box>
          </Box>

          {/* Wayhike */}
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Junior Software Developer Intern - Wayhike Inc.
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                May 2024 - Dec 2024
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <a
                href="https://wayhike.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={nodebrew}
                  width={isNotMobile ? "80px" : "100px"}
                  height={isNotMobile ? "80px" : "100px"}
                  style={{ objectFit: "cover" }}
                  alt="Wayhike"
                />
              </a>
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                During my internship, I contributed significantly to front-end
                development and business logic implementation for an
                international car dealership's inventory management system built
                with React Native. My responsibilities included developing
                features for efficient real-time inventory tracking and stock
                management, expense management with detailed reporting, and
                seamless media uploads. Additionally, I collaborated closely
                with the development team to integrate real-time updates and
                business logic, ensuring accurate, responsive stock management
                and an enhanced, user-friendly experience for dealership staff.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>

      <Navbar prev="Fun" next="Contact" />
    </Box>
  );
};

export default Exp;
