import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const R2Logo = "/assets/R2Logo.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#3c3f41", color: "#bdbdbd", mt: 8 }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Grid container spacing={4}>
          {/* LEFT SECTION */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: 24,
                  letterSpacing: 2,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                <span style={{ color: "#9e9e9e" }}>GOPHER</span>{" "}
                <span style={{ color: "#e53935" }}>MODS</span>
              </Typography>

              <Typography sx={{ fontSize: 14, lineHeight: 1.8, maxWidth: 520 }}>
                Founded in 2010 at the University of Minnesota. Gophermods is a
                Minnesota leading consumer electronics company with a
                specialization in the repair of premium laptops, tablets and
                mobile devices. We service more than 50,000 devices per year
                with an emphasis in specializing in iPad Repair, iPhone Repair,
                MacBook Repair and other recent technology.
              </Typography>

              <Typography sx={{ fontSize: 13, mt: 3, lineHeight: 1.7, maxWidth: 350, }}>
                iPhone, iPod, iPad and Mac are registered trademarks of Apple,
                Inc. Gophermods is an independent service company and is in no
                way affiliated with Apple Inc.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: 18,
                letterSpacing: 1,
                color: "#fff",
                mb: 2,
              }}
            >
              CERTIFICATIONS
            </Typography>

            <Typography sx={{ fontSize: 14, color: "#fff", mb: 1 }}>
              Quality Management Systems
            </Typography>

            <Typography sx={{ fontSize: 13, mb: 0.5 }}>ISO 9001:2015</Typography>
            <Typography sx={{ fontSize: 13, mb: 0.5 }}>ISO 14001:2015</Typography>
            <Typography sx={{ fontSize: 13, mb: 2 }}>ISO 45001:2018</Typography>

            <Typography sx={{ fontSize: 14 }}>Recycling</Typography>
          </Grid>

          {/* R2 LOGO */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={R2Logo}
              alt="R2 V3"
              sx={{ width: 120, opacity: 0.9 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* BOTTOM BAR */}
      <Box
        sx={{
          borderTop: "1px solid #555",
          py: 3,
          px: { xs: 2, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: 13, mb: 1 }}>
          © Copyright 2009 - 2026 Gophermods All Rights Reserved |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Blog
          </Link>
          |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Sitemap
          </Link>
          |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Privacy Policy
          </Link>
          |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Terms & Conditions
          </Link>
          |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Careers
          </Link>
          |
          <Link sx={{ color: "#bdbdbd", mx: 0.5 }} href="#">
            Reviews
          </Link>
        </Typography>

        <Box>
          <IconButton sx={{ color: "#e53935" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#e53935" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#e53935" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#e53935" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
