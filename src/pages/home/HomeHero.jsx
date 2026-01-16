import { Box, Typography, Button, Rating } from "@mui/material";

const HomeHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 10 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 45, md: 64 },
              lineHeight: 1.15,
              fontWeight: 300,
              color: "#333",
              mb: 3,
            }}
          >
            A better way to
            <br />
            support your
            <br />
            technology.
          </Typography>

          {/* Rating */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating value={5} readOnly sx={{ color: "#f5b400" }} />
            <Typography sx={{ ml: 1, fontSize: 14, color: "#777" }}>
              4.8 rating of 612 reviews
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 18,
              color: "#555",
              maxWidth: 420,
              mb: 4,
            }}
          >
            Your <em>complete technology solutions</em> provider for
            schools and small businesses.
          </Typography>

          {/* CTA BUTTONS */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              sx={{
                backgroundColor: "#ff0000",
                color: "#fff",
                px: 4,
                py: 1.4,
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": { backgroundColor: "#e60000" },
              }}
            >
              K12 SCHOOLS
            </Button>

            <Button
              sx={{
                backgroundColor: "#ff0000",
                color: "#fff",
                px: 4,
                py: 1.4,
                fontWeight: 600,
                borderRadius: 0,
                "&:hover": { backgroundColor: "#e60000" },
              }}
            >
              BUSINESSES
            </Button>
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/hero-devices.png"
            alt="Devices"
            sx={{
              width: "100%",
              maxWidth: 520,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
