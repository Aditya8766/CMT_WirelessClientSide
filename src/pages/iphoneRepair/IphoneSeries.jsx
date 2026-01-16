import { Box, Typography } from "@mui/material";

const phones = [
  { name: "iPhone 16", img: "/assets/Iphone16.png" },
  { name: "iPhone 15", img: "/assets/Iphone16.png" },
  { name: "iPhone 14", img: "/assets/Iphone16.png" },
  { name: "iPhone 13", img: "/assets/Iphone16.png" },
  { name: "iPhone 12", img: "/assets/Iphone16.png" },
  { name: "iPhone 11", img: "/assets/Iphone16.png" },
  { name: "iPhone SE (2022)", img: "/assets/Iphone16.png" },
  { name: "iPhone SE (2020)", img: "/assets/Iphone16.png" },
];

const IphoneSeriesSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden", // ✅ prevents horizontal scroll
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: 600,
          mb: 4,
        }}
      >
        Select your iPhone Series
      </Typography>

      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          maxWidth: "1400px", // ✅ constrains width safely
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 }, // ✅ safe padding
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 3, md: 5 },
        }}
      >
        {phones.map((phone) => (
          <Box
            key={phone.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.25s ease",
              "&:hover": {
                transform: "translateY(-6px)",
              },
            }}
          >
            <Box
              component="img"
              src={phone.img}
              alt={phone.name}
              sx={{
                maxWidth: "100%", // ✅ never overflow
                height: { xs: 150, sm: 170, md: 190 },
                objectFit: "contain",
                mb: 2,
              }}
            />

            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
              {phone.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IphoneSeriesSection;
