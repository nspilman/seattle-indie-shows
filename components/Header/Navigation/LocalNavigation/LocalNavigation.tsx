import { Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  links: {
    display: string;
    link: string;
  }[];
  isVisible: boolean;
}

export const LocalNavigation = ({ links }: Props) => (
  <Stack direction="row" alignItems="center">
    {links.map((link, i) => (
      <Link href={link.link} key={i} px="2">
        <Text fontWeight="bold" fontSize="xs" casing="uppercase">
          {link.display}
        </Text>
      </Link>
    ))}
  </Stack>
);
