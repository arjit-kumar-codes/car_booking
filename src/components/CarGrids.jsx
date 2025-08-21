import { Container, Grid, Card, CardActions, CardContent, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material";
import { cars } from "../data/data";
import { CarFront, MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";

export default function CarsGrid() {
  const [anchorEl, setAnchorEl] = useState(null);
  const contactMenuOpen = Boolean(anchorEl);

  return (
    <section id="cars" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
      <Container maxWidth="lg">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Available Cars</h2>
            <p className="opacity-70">
              Choose from our popular options and contact the owner directly.
            </p>
          </div>
        </div>

        <Grid container spacing={3}>
          {cars.map((car) => {
            // ✅ contactLinks ab har card ke liye alag banega
            const contactLinks = {
              email: `mailto:${car.owner.email}?subject=Car%20Booking%20Inquiry%20-%20${encodeURIComponent(
                car.name
              )}&body=Hi%20${encodeURIComponent(
                car.owner.name
              )},%0AI'm%20interested%20in%20booking%20your%20${encodeURIComponent(
                car.name
              )}.%20Please%20let%20me%20know%20availability.%0AThanks!`,
              phone: `tel:${car.owner.phone}`,
              whatsapp: `https://wa.me/${car.owner.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
                `Hi ${car.owner.name}, I'm interested in booking your ${car.name}.`
              )}`,
            };

            return (
              <Grid size={{xs:12,sm:6,md:6}} key={car.id}>
                <Card className="rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all !bg-[#1e1e1e] ">
                  {/* ✅ Image full width & responsive */}
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={car.imgUrl}
                      alt={car.name}
                      className="w-full h-full object-fit"
                    />
                  </div>

                  <CardContent className="!bg-[#1e1e1e]">
                    <div className="flex items-start justify-between gap-2">
                      <Typography variant="h6" className="font-bold text-white">
                        {car.name}
                      </Typography>
                    </div>

                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <CarFront size={16} /> {car.seats} Seats
                      </div>
                    </div>
                  </CardContent>

                  <CardActions className="px-4 pb-4 flex items-center justify-between !bg-[#1e1e1e]">
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="Email">
                        <IconButton component="a" href={contactLinks.email}>
                          <MailIcon size={18} className="text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Call">
                        <IconButton component="a" href={contactLinks.phone}>
                          <PhoneIcon size={18} className="text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="WhatsApp">
                        <IconButton
                          component="a"
                          href={contactLinks.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#25D366"
                              d="M12 2.004c-5.514 0-9.996 4.482-9.996 9.996 0 1.76.461 3.442 1.268 4.902L2 22l5.27-1.248a9.953 9.953 0 0 0 4.73 1.248c5.514 0 9.996-4.482 9.996-9.996S17.514 2.004 12 2.004z"
                            />
                            <path
                              fill="#fff"
                              d="M16.54 13.24l-1.72-.39a1 1 0 0 0-.97.26l-.73.74a8.84 8.84 0 0 1-3.9-3.9l.74-.73a1 1 0 0 0 .26-.97l-.39-1.72a1 1 0 0 0-1.23-.74l-1.6.46a1.5 1.5 0 0 0-1.06 1.45c.08 5.47 4.53 9.92 10 10a1.5 1.5 0 0 0 1.45-1.06l.46-1.6a1 1 0 0 0-.74-1.23z"
                            />
                          </svg>
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    {/* Contact Menu (optional dropdown) */}
                    <Menu
                      anchorEl={anchorEl}
                      open={contactMenuOpen}
                      onClose={() => setAnchorEl(null)}
                      className="!bg-[#1e1e1e]"
                      PaperProps={{ className: "!bg-[#2a2a2a] !text-white" }}
                    >
                      <MenuItem component="a" href={contactLinks.email}>
                        <MailIcon size={16} className="mr-2" /> Email
                      </MenuItem>
                      <MenuItem component="a" href={contactLinks.phone}>
                        <PhoneIcon size={16} className="mr-2" /> Call
                      </MenuItem>
                      <MenuItem
                        component="a"
                        href={contactLinks.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            fill="#25D366"
                            d="M12 2.004c-5.514 0-9.996 4.482-9.996 9.996 0 1.76.461 3.442 1.268 4.902L2 22l5.27-1.248a9.953 9.953 0 0 0 4.73 1.248c5.514 0 9.996-4.482 9.996-9.996S17.514 2.004 12 2.004z"
                          />
                          <path
                            fill="#fff"
                            d="M16.54 13.24l-1.72-.39a1 1 0 0 0-.97.26l-.73.74a8.84 8.84 0 0 1-3.9-3.9l.74-.73a1 1 0 0 0 .26-.97l-.39-1.72a1 1 0 0 0-1.23-.74l-1.6.46a1.5 1.5 0 0 0-1.06 1.45c.08 5.47 4.53 9.92 10 10a1.5 1.5 0 0 0 1.45-1.06l.46-1.6a1 1 0 0 0-.74-1.23z"
                          />
                        </svg>
                        WhatsApp
                      </MenuItem>
                    </Menu>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
