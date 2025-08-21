import { Box, Container } from "@mui/material";

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-900">
            <Container maxWidth="lg">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
                        <p className="mt-4 opacity-80 text-white">
                            We are a community-driven car sharing platform helping people find reliable rides quickly. Our listings are curated and verified to ensure safety, and our team assists you from discovery to contact.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl border border-white/10 shadow-sm">
                                <p className="text-3xl font-bold text-white">10k+</p>
                                <p className="opacity-70 text-white">Happy riders</p>
                            </div>
                            <div className="p-5 rounded-2xl border border-white/10 shadow-sm">
                                <p className="text-3xl font-bold text-white">1k+</p>
                                <p className="opacity-70 text-white">Verified owners</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Box className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1400&auto=format&fit=crop"
                                alt="About image"
                                className="w-full h-[320px] object-cover"
                            />
                        </Box>
                    </div>
                </div>
            </Container>
        </section>
    )
}
