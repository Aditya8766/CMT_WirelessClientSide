import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const GetQuoteForm = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 570 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 3,
          }}
        >
          Get Your Free Quote Now
        </Typography>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#f4faf3",
            p: { xs: 2.5, sm: 3 },
            borderRadius: 1,
          }}
        >
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Full Name *" placeholder="Full Name" size="small" />
            <TextField label="Phone *" placeholder="Phone" size="small" />
            <TextField label="Email *" placeholder="Email" size="small" />
            <TextField label="Device *" placeholder="Device" size="small" />
            <TextField
              label="Issue *"
              placeholder="Issue"
              multiline
              rows={3}
              size="small"
            />

            <Button
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: "#7ce02c",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#6ad120",
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

export default GetQuoteForm;
