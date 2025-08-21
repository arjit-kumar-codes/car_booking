import { Box, Button, Chip, Container } from "@mui/material";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-gray-900">
            <div className="absolute -top-40 -right-40 h-96 w-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-gradient-to-br from-rose-500/30 to-amber-500/30 rounded-full blur-3xl" />
            <Container maxWidth="lg" className="py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                            Drive your next trip with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">comfort & style</span>
                        </h1>
                        <p className="mt-4 text-lg opacity-80 text-white">
                            Instant car bookings from trusted owners near you. Transparent pricing, flexible options, and 24x7 support.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#cars"><Button variant="contained" size="large">Explore Cars</Button></a>
                            <a href="#contact"><Button variant="outlined" size="large">Contact Us</Button></a>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <Chip label="No hidden fees" sx={{ color: "white", bgcolor: "gray" }} />
                            <Chip label="Verified owners" sx={{ color: "white", bgcolor: "gray" }} />
                            <Chip label="Instant contact" sx={{ color: "white", bgcolor: "gray" }} />
                        </div>
                    </div>
                    <div>
                        <Box className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
                                alt="Hero car"
                                className="w-full h-[320px] object-cover"
                            />
                        </Box>
                    </div>
                </div>
            </Container>
        </section>
    );
}