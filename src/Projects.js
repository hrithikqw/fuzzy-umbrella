import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import sqlbot from "./images/sqlbot.png";
// Removed unused image: myfolio
import mvr from "./images/mvr.png";
import fashioned from "./images/fashioned.png";
import transactions from "./images/transactions.png";
import learnify from "./images/learnify.png";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectComponent from "./components/projects";

const Projects = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  return (
    <Box>
      <Heading name="My Projects" />

      <Box
        display="flex"
        maxWidth="80%"
        ml="auto"
        mr="auto"
        mt="3rem"
        flexDirection={"column"}
        gap="2rem"
        mb="10rem"
      >
        <Fade cascade damping={0.1}>
          <ProjectComponent
            title=" 🤖 SQLBOT – Chat with Your Database "
            description='SQLBOT is an AI-powered assistant that lets you chat with your SQLite or MySQL database using natural language. You can ask questions like "Show all customers from Canada" or just say "Hi" — and it responds instantly, like a smart database companion.'
            tech="Python, Streamlit, LangChain, Groq API, SQLAlchemy, SQLite/MySQL."
            img={sqlbot}
            link="https://github.com/hrithikqw/SQLBOT"
            isNotMobile={isNotMobile}
          />

          {/* 
          <ProjectComponent
            title=" StockSentinel: AI-Powered Market Sentiment Engine "
            description="Built An intelligent system that analyzes news, tweets, and earnings calls to generate real-time stock sentiment heatmaps."
            tech="Python, HuggingFace Transformers, FastAPI, PostgreSQL, Plotly, Docker."
            img={myfolio}
            link="https://github.com/hrithikqw"
            isNotMobile={isNotMobile}
          />
          */}

          <ProjectComponent
            title="Credit Card Fraud Detection "
            description="Developed backend for a Credit Card Fraud Detection system using ML with pandas and scikit-learn to identify fraud in real time, improving security and reducing risk"
            tech="Python, ML Libraries"
            img={fashioned}
            link="https://github.com/hrithikqw"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Smart Food Contribution Web Application"
            description="Developed a Smart Food Contribution web application to streamline food donations and reduce waste by efficiently connecting donors with recipients. Implemented secure backend logic for managing donations and enabled real-time interaction between users to promote sustainability and community support."
            tech="HTML, CSS, JavaScript, Node.js, PHP"
            img={mvr}
            link="https://github.com/hrithikqw"
            isNotMobile={isNotMobile}
          />

          {/* ChatME - AI ChatBot section */}
          <Box flexBasis="100%">
            <Typography
              fontSize="1.5rem"
              fontFamily={"Poppins"}
              color="#AEE3EB"
              fontWeight={400}
              pr="1rem"
              pt="0.5rem"
              pl="1rem"
            >
              {"    >>  "}ChatME - AI ChatBot
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
              <img
                src={learnify}
                width={isNotMobile ? "40%" : "100%"}
                alt="pic"
                style={{ padding: "1rem" }}
              />
              <Typography fontFamily={"Poppins"} p="1rem" color="#FFFFFF">
                Built an AI-powered chatbot using the Grok AI API for real-time, intelligent conversations. Designed a user-friendly interface and a scalable backend to ensure smooth interactions and fast response times.
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                  Tech Stack: HTML, CSS, JavaScript, Python, Grok AI API
                  <br />
                  <br />
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid white"
                  width="fit-content"
                  borderRadius="5px"
                  padding="0.3rem"
                >
                  <a
                    href="https://github.com/hrithikqw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                    <OpenInNewIcon fontSize="small" />
                  </a>
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* Single separator after custom ChatME block */}
          <Box width="100%" borderTop="1px solid grey" mt="2rem" mb="1rem" />

          <ProjectComponent
            title="Expense Tracker"
            description="Built a simple Expense Tracker to help users record and manage their daily transactions. The application allows easy tracking of income and expenses, helping users stay on top of their personal finances."
            tech="HTML, CSS, JavaScript, SQL"
            img={transactions}
            link="https://github.com/hrithikqw"
            isNotMobile={isNotMobile}
          />
        </Fade>
      </Box>

      <Navbar prev="" next="Skills" />
    </Box>
  );
};

export default Projects;
