import { Box, Typography } from "@mui/material";

const WhoWeServeSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* FLEX ROW */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* COLUMN 1 */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ color: "#e53935", mb: 2 }}>
              Who We Serve
            </Typography>

            <Typography fontWeight={600}>
              Built for education and small business
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We keep student and staff devices in service with consistent
              quality, clear SLAs, and simple logistics.
            </Typography>

            <Typography fontWeight={600}>Education</Typography>
            <Typography sx={{ mb: 2 }}>
              District wide programs, white glove deployments, protection plans,
              reporting, spare pool management.
            </Typography>

            <Typography fontWeight={600}>Small business</Typography>
            <Typography>
              Fast depot repair, asset refresh, protection plans, ongoing
              warranty and support.
            </Typography>
          </Box>

          {/* COLUMN 2 */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ color: "#e53935", mb: 2 }}>
              How it Works
            </Typography>

            <Typography fontWeight={600}>Open an Account</Typography>
            <Typography sx={{ mb: 2 }}>
              Set up education or small business terms, shipping, and contacts.
            </Typography>

            <Typography fontWeight={600}>Send Devices</Typography>
            <Typography sx={{ mb: 2 }}>
              Request a pickup or ship to our depot with prepaid labels.
            </Typography>

            <Typography fontWeight={600}>Approve</Typography>
            <Typography sx={{ mb: 2 }}>
              Get diagnostics, pricing, and timelines before we proceed.
            </Typography>

            <Typography fontWeight={600}>Return to service</Typography>
            <Typography>
              Track every RMA, receive devices ready for use.
            </Typography>
          </Box>

          {/* COLUMN 3 */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ color: "#e53935", mb: 2 }}>
              Gophermods
            </Typography>

            <Typography fontWeight={600} sx={{ mb: 1 }}>
              About Us
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li">
                15+ years focused on device repair and lifecycle services
              </Typography>
              <Typography component="li">
                1 to 3 business day repair options after depot check in
              </Typography>
              <Typography component="li">
                High quality parts and multi point testing on every device
              </Typography>
              <Typography component="li">
                One year warranty on covered repair work
              </Typography>
              <Typography component="li">
                4.8 average rating from schools and businesses
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeServeSection;
