import { Box, Typography } from "@mui/material";
import IphoneSeriesSection from "./IphoneSeries";
import WhoWeServeScreen from "./WhoWeServe";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";

const IphoneRepair = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          fontSize: "24px",
          px: { xs: 2, md: 4 },
          py: 6,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 6,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: { xs: 36, md: 44 }, mb: 3 }}>
              IPhone Repair
            </Typography>

            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              iPhone Repair Services for Schools and Small Businesses
            </Typography>

            <Typography sx={{ color: "#555", mb: 3, lineHeight: 1.7 }}>
              Your organization relies on iPhones to keep students and teams
              connected. When devices fail, you need a dependable partner that
              restores uptime fast. Gophermods provides depot repair programs
              designed for education and small business fleets, with consistent
              quality, clear SLAs, and streamlined logistics.
            </Typography>

            <Box component="ul" sx={{ pl: 3, color: "#555" }}>
              <li>Screen and glass replacement</li>
              <li>Battery and charging issues</li>
              <li>No power and boot failures</li>
              <li>Button, camera, speaker, and microphone repair</li>
              <li>Liquid damage evaluation with recovery when feasible</li>
            </Box>

            <Typography sx={{ mt: 3, color: "#555" }}>
              Every repair includes quality control and a one year warranty for
              covered work.
            </Typography>
          </Box>

          {/* RIGHT CARD */}
          <Box
            sx={{
              backgroundColor: "#f2f2f2",
              p: 4,
              borderRadius: 2,
              height: "fit-content",
            }}
          >
            <Typography
              sx={{
                color: "#e53935",
                fontSize: 26,
                fontWeight: 600,
                mb: 3,
                textAlign: "center",
              }}
            >
              What We Do
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>Depot Repairs</Typography>
            <Typography sx={{ mb: 2, color: "#555" }}>
              Screen, battery, keyboard, port, camera, and board level work. One
              to three business day turnaround after check in.
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>Buyback</Typography>
            <Typography sx={{ mb: 2, color: "#555" }}>
              Unlock budget with fair market value offers and certified data
              disposition.
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>
              White glove services
            </Typography>
            <Typography sx={{ mb: 2, color: "#555" }}>
              Provisioning, kitting, labeling, case install, screen protectors,
              ready to issue.
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>Protection plans</Typography>
            <Typography sx={{ color: "#555" }}>
              Accidental damage coverage and extended warranty options.
            </Typography>
          </Box>
        </Box>
      </Box>
      <>
        <IphoneSeriesSection />
        <WhoWeServeScreen/>
        <TestimonialSection/>
        <FAQSection/>
      </>
    </>
  );
};

export default IphoneRepair;
