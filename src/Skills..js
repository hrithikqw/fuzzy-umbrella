import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Langs from "./components/langs";
import { useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="My Skills" />
      <Box
        maxWidth={isNotMobile ? "60%" : "100%"}
        ml="auto"
        mr="auto"
        mt="2rem"
        mb="10rem"
        display="grid"
        gridTemplateColumns={isNotMobile ? "repeat(4,1fr)" : "repeat(3,1fr)"}
      >
        <Fade cascade damping={0.1}>
          <Langs
            name="HTML"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <Langs
            name="CSS"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          {/* <Langs
            name="Tailwind CSS"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          /> 
          <Langs
            name="Material UI"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />*/}

          <Langs
            name="Javascript"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <Langs
            name="ReactJs"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />

         {/* <Langs
            name="Figma"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
          {/*
          <Langs
            name="ExpresJs"
            exp="yes"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
            
          <Langs
            name="NodeJs"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />
 */}
          <Langs
            name="MongoDB"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />

           <Langs
            name="Supabase"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
            />



          <Langs
          name="SQL"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />


          <Langs
            name="AWS"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"            />


        {/*   <Langs
            name="Azure"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          />

      <Langs
            name="Spring Boot"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
          /> */}

          <Langs
            name="Python"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />

          <Langs
            name="Java"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          />
          <Langs
            name="C"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          />
          <Langs
             name="Dart"
             url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          />

          <Langs
            name="Flutter"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          />
          <Langs
        name="Node.js"
           url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />

        <Langs
         name="Bootstrap"
           url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />

        <Langs
         name="Next.js"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />


          <Langs
          name="Django"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          />

          <Langs
            name="Git"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />

          <Langs
          name="GitHub"
          url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />


          <Langs
            name="Figma"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
          

        </Fade>
      </Box>

      <Navbar prev="Projects" next="Fun" />
    </Box>
  );
};

export default Skills;
