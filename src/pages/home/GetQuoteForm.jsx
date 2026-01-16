import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const GetQuoteForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    device: "",
    issue: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/get-quote", form);
      alert("Quote submitted successfully!");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        device: "",
        issue: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

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
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 3 }}>
          Get Your Free Quote Now
        </Typography>

        <Paper sx={{ backgroundColor: "#f4faf3", p: 3 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField name="fullName" label="Full Name *" size="small" value={form.fullName} onChange={handleChange} />
            <TextField name="phone" label="Phone *" size="small" value={form.phone} onChange={handleChange} />
            <TextField name="email" label="Email *" size="small" value={form.email} onChange={handleChange} />
            <TextField name="device" label="Device *" size="small" value={form.device} onChange={handleChange} />
            <TextField name="issue" label="Issue *" multiline rows={3} size="small" value={form.issue} onChange={handleChange} />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: "#7ce02c",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#6ad120" },
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
