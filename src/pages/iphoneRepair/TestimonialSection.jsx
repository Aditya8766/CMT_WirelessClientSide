import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const mockReviews = [
  {
    name: "Rolf Orthal",
    rating: 5,
    text: "We use Gophermods platform at high school...",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "J.T",
    rating: 5,
    text: "The team at Gophermods is thorough...",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Chris Wodick",
    rating: 5,
    text: "We had our device repairs done efficiently...",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jesse Mortenson",
    rating: 5,
    text: "Had a great experience with the team...",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "John Kern",
    rating: 5,
    text: "Supportive staff, fast turnaround...",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Srinivasan Ramachandran",
    rating: 5,
    text: "Very efficient and professional service...",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Typography
          align="center"
          sx={{ mb: 4, fontSize: '36px'}}
        >
          Our service is “reasonable”, “fast”, and “friendly”.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {mockReviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                minHeight: 220,
              }}
            >
              {/* Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src={review.avatar} />
                <Box sx={{ ml: 2 }}>
                  <Typography fontWeight={600}>{review.name}</Typography>
                  <Box sx={{ display: "flex" }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ fontSize: 16, color: "#fbbc04" }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Content */}
              <Typography variant="body2" sx={{ mb: 2 }}>
                {review.text}
              </Typography>

              {/* Google Logo */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                  alt="Google"
                  width={18}
                />
                <Typography variant="caption">Google Review</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
