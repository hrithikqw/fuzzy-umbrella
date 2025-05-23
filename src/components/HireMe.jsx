import React from "react";
import { Box, Typography, useMediaQuery, Link, Avatar, Grid, Paper, Button } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Heading from "./heading";
import Navbar from "./navbar";

const testimonials = [
  { name: "Alice J.", text: "Working together leveled up my project — code was clean, fast, and awesome! 🚀" },
  { name: "Bob S.", text: "Built our app in record time and kept things fun. Totally recommend! 👍" },
  { name: "Carol L.", text: "Super chill developer, always on point and super creative. Loved it! 🌟" },
];

const HireMe = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();

  return (
    <Box mb={4} px={2} sx={{ background: "linear-gradient(135deg, #090A18 0%, #1A2130 100%)" }}>
      <Heading name="Hire Me ✨" />

      <Fade triggerOnce>
        <Paper
          elevation={3}
          sx={{
            maxWidth: isNotMobile ? "60%" : "90%",
            mx: "auto",
            p: 3,
            mt: 4,
            bgcolor: "#0A0B1D",
            border: "2px solid #11D6F41A",
            borderRadius: 2,
            textAlign: "center",
            transition: "transform 0.3s",
            '&:hover': { transform: 'scale(1.02)' },
          }}
        >
          <Typography
            variant={isNotMobile ? "h4" : "h5"}
            sx={{ fontFamily: "Poppins", color: "#11D6F4", mb: 2 }}
          >
            Looking for a passionate Software & Web Developer?
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", color: "#EEE", mb: 2 }}>
            I craft modern, responsive web apps and robust backend systems, with a dash of creativity.
          </Typography>

          {/* Email as a link, not a button */}
          <Typography sx={{ mb: 3 }}>
            <Link
              href="mailto:hrithikroshanm05@gmail.com"
              sx={{ fontFamily: "Poppins", color: "#11D6F4", textDecoration: "underline" }}
            >
              hrithikroshanm05@gmail.com
            </Link>
          </Typography>

          <Typography
            sx={{ fontFamily: "Poppins", color: "#EEE", fontStyle: 'italic', mb: 3 }}
          >
            Interested in my startup idea? Let’s build the next revolutionary digital asset tokens together!
          </Typography>
        </Paper>
      </Fade>


      <Box textAlign="center" mt={4}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ fontFamily: "Poppins", color: "#11D6F4", textTransform: "none" }}
        >
          ← Back
        </Button>
      </Box>

      <Navbar prev="contact" next={null} />
    </Box>
  );
};

export default HireMe;
