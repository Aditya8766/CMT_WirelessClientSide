import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "iPad Repair", img: "/assets/Ipad.png", route: "/ipad-repair" },
  { title: "MacBook Repair", img: "/assets/MacBook.png", route: "/macbook-repair" },
  { title: "Chromebook Repair", img: "/assets/ChromeBook.png", route: "/chromebook-repair" },
  { title: "iPhone Repair", img: "/assets/Iphone16.png", route: "/iphone-repair" },
  { title: "Windows Laptop Repair", img: "/assets/Microsoft.png", route: "/windows-laptop-repair" },
  { title: "Android Repair", img: "/assets/GooglePixel.png", route: "/android-repair" },
  { title: "Tablet Repair", img: "/assets/Galaxy.png", route: "/tablet-repair" },
  { title: "Laptop Repair", img: "/assets/MacStudio.png", route: "/laptop-repair" },
];

const ServicesStrip = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* RED STRIP */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#ff0000",
          color: "#fff",
          textAlign: "center",
          py: { xs: 4, md: 5 },
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 16, md: 20 },
            fontWeight: 500,
            maxWidth: 950,
            mx: "auto",
          }}
        >
          We are a depot repair and lifecycle partner for iPhone, iPad, Mac,
          Chromebooks, and Windows laptops.
        </Typography>

        {/* ARROW */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: -18,
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "18px solid transparent",
            borderRight: "18px solid transparent",
            borderTop: "18px solid #ff0000",
          }}
        />
      </Box>

      {/* SERVICES GRID */}
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 8 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(4, 1fr)",
          },
          gap: { xs: 4, md: 6 },
          textAlign: "center",
        }}
      >
        {services.map((item) => (
          <Box
            key={item.title}
            onClick={() => navigate(item.route)}
            sx={{
              cursor: "pointer",
              "&:hover img": { transform: "scale(1.05)", transition: "0.3s" },
              "&:hover": { color: "#000" },
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                height: { xs: 110, md: 150 },
                mb: 2,
                objectFit: "contain",
                transition: "transform 0.3s",
              }}
            />
            <Typography
              sx={{
                fontSize: 15,
                color: "#777",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesStrip;
