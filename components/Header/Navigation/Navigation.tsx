import { Box } from "@chakra-ui/react";
import { LocalNavigation } from "./LocalNavigation";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { NavigationModal } from "./NavigationModal/NavigationModal";

interface Props {
  title: string;
}

export const Navigation = ({ title }: Props) => {
  const localLinks = [
    { display: "About", link: "/" },
    { display: "Past Clients", link: "/" },
    { display: "Testimonials", link: "/" },
    { display: "Get a Quote", link: "/#contact-form" },
  ];

  const visibleAtMedWidth = {
    base: "hidden",
    md: "visible",
  } as const;

  const invisibleAtMed = {
    base: "block",
    md: "none",
  } as const;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavigationModal
        isModalOpen={isModalOpen}
        links={localLinks}
        close={() => setIsModalOpen(false)}
        title={title}
      />
      <Box visibility={visibleAtMedWidth}>
        <LocalNavigation isVisible links={localLinks} />
      </Box>
      <Box visibility={visibleAtMedWidth}>
        <SocialMediaIcons />
      </Box>
      <HamburgerIcon
        display={invisibleAtMed}
        onClick={() => setIsModalOpen(!isModalOpen)}
      />
    </>
  );
};
