import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 6, md: 10 },
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 32, md: 40 },
              fontWeight: 700,
              mb: 4,
            }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ fontSize: 18, mb: 4, color: "#555" }}>
            We’re here to help. Please reach out to the appropriate department
            below or send us a message using the form.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
              Retail Client Support
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#555" }}>
              Monday – Friday: 9:00am – 5:00pm
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
              Email:{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                support@gophermods.com
              </Box>
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
              K12 & Business Support
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#555" }}>
              Monday – Friday: 8:00am – 5:00pm
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
              Email:{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                education@gophermods.com
              </Box>
            </Typography>
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: "#f4faf3",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 600,
              mb: 3,
            }}
          >
            Submit Retail Warranty Claim
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <TextField label="First Name *" size="small" />
              <TextField label="Last Name *" size="small" />
            </Box>

            <TextField label="Email *" size="small" />

            <TextField
              label="Message *"
              multiline
              rows={4}
              size="small"
            />

            <Button
              sx={{
                mt: 1,
                backgroundColor: "#e53935",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                py: 1.3,
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ContactUs;
