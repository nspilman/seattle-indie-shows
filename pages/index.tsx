import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { VideoModal } from "../components/YoutubeVideoModal";

const Home: NextPage = () => {
  const youtubeSrc =
    "https://www.youtube.com/embed/LTJ8zMo-mus?controls=0&autoplay=1&mute=1&enablejsapi=1&loop=1";

  const contactFormSubtext =
    "Get in touch and let us know your film needs! We look forward to working with you, and will get back to you soon.";
  return (
    <Box>
      <Header title="Alex Gurevich Film" />
      <VideoModal src={youtubeSrc} />
      <ContactForm subtext={contactFormSubtext} />
    </Box>
  );
};

export default Home;
