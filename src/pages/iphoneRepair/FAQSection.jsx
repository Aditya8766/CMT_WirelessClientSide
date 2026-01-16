import { useState } from "react";
import { Box, Typography, Button, Collapse } from "@mui/material";

const faqs = [
  {
    question: "Are you sure you can fix it?",
    answer:
      "Yes. We’ve had tens of thousands of broken iPhones, iPads, and Samsung phones brought into Gophermods since 2009. I would guess 98% of the devices brought into our stores are repaired. We’ve seen so many devices you don’t have to worry if we haven’t seen it before.",
  },
  {
    question: "Can I bring you parts from the Apple Self-Repair Program?",
    answer:
      "Yes, if you purchased the parts through Apple’s self-repair program and (1) you don’t want to rent the tools from Apple, or (2) attempt the DIY repair. We will perform the repair for just our labor fee of $59.",
  },
  {
    question: "Do you accept AppleCare?",
    answer:
      "No we do not, the only place you can redeem AppleCare is Apple. If you are not sure whether you have AppleCare coverage, there are a few ways you can find that information. Here is how you can check your AppleCare coverage status.",
  },
  {
    question: "Will you need my passcode?",
    answer:
      "We prefer it, but it is not required. We need to test out the device to make sure our repair was successful. We run diagnostics on your device both before and after the repair to make sure it is still running in tip-top shape. If you do not wish to provide the passcode (and we understand the desire to preserve your privacy) we will not be able to guarantee a turnaround time as we will not have had the ability to test our work post-repair. All staff signs a customer data privacy policy before working on customer devices, any staff found to violate this policy is immediately terminated.",
  },
  {
    question: "How fast can you repair it?",
    answer: "Our repair times depend on the device, but typically 1–3 business days after check-in.",
  },
  {
    question: "Do you have any guarantees?",
    answer: "We guarantee our repair work for 1 year on covered repairs with high-quality parts and multi-point testing.",
  },
  {
    question: "What if you can't fix it?",
    answer: "If we cannot repair your device, you are not charged for labor, and we return your device promptly.",
  },
];

const FAQSection = () => {
  // first FAQ open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, sm: 5, md: 8 },
        backgroundColor: "#e53935",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
          fontSize: { xs: 22, sm: 26, md: 32 },
        }}
      >
        We’re ready for your questions.
      </Typography>

      <Typography
        sx={{
          mb: 6,
          fontSize: { xs: 15, sm: 16, md: 18 },
          maxWidth: "90%",
          mx: "auto",
        }}
      >
        We’ve been doing this a while, here are the most common questions
      </Typography>

      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "left" }}>
        {faqs.map((faq, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Button
              fullWidth
              onClick={() => toggleFAQ(index)}
              sx={{
                justifyContent: "space-between",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: 15, sm: 16, md: 18 },
                px: 2,
                py: 1.5,
                backgroundColor: openIndex === index ? "#d32f2f" : "transparent",
                borderRadius: 1,
                "&:hover": { backgroundColor: "#c62828" },
              }}
            >
              {faq.question}
              <Typography sx={{ fontSize: { xs: 20, md: 24 } }}>
                {openIndex === index ? "–" : "+"}
              </Typography>
            </Button>

            <Collapse in={openIndex === index}>
              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  color: "#fff",
                  lineHeight: 1.7,
                  px: 2,
                }}
              >
                {faq.answer}
              </Typography>
            </Collapse>
          </Box>
        ))}

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { backgroundColor: "#fff", color: "#e53935" },
              textTransform: "none",
              px: 5,
              py: 1.5,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            More FAQ
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;
