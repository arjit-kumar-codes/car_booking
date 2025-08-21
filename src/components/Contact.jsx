import { Alert, Box, Button, Container, Snackbar, TextField } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [openSnack, setOpenSnack] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenSnack(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
      <Container maxWidth="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Have questions or need help? Send us a message.
        </p>

        <Box
          component="form"
          onSubmit={onSubmit}
          className="mt-8 grid gap-6 p-6 rounded-3xl border border-gray-700 shadow-lg bg-gray-900"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-1">Your Name</label>
              <TextField
                placeholder="Enter your name"
                fullWidth
                InputProps={{
                  style: { color: "#f1f1f1", borderColor: "#ccc" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#aaa" },
                    "&:hover fieldset": { borderColor: "#fff" },
                    "&.Mui-focused fieldset": { borderColor: "#fff" },
                  },
                  "& input": { color: "#f1f1f1" },
                }}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <TextField
                placeholder="Enter your email"
                type="email"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#aaa" },
                    "&:hover fieldset": { borderColor: "#fff" },
                    "&.Mui-focused fieldset": { borderColor: "#fff" },
                  },
                  "& input": { color: "#f1f1f1" },
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Mobile Number</label>
            <TextField
              placeholder="Enter your number"
              type="tel"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#aaa" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                },
                "& input": { color: "#f1f1f1" },
              }}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <TextField
              placeholder="Write your message"
              fullWidth
              multiline
              minRows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#aaa" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                },
                "& textarea": { color: "#f1f1f1" },
              }}
            />
          </div>

          <div className="flex justify-end">
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </div>
        </Box>

        <Snackbar
          open={openSnack}
          autoHideDuration={3000}
          onClose={() => setOpenSnack(false)}
        >
          <Alert
            onClose={() => setOpenSnack(false)}
            severity="success"
            variant="filled"
          >
            Message sent! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
}
