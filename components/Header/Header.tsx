import { Flex, Heading, Text } from "@chakra-ui/react";
import { Navigation } from "./Navigation";

interface Props {
  title: string;
}
export const Header = ({ title }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      bg="black"
      color="orange.200"
      px="10"
      py="4"
      alignItems="center"
    >
      <Heading size="md">
        <Text casing="uppercase">{title}</Text>
      </Heading>
      <Navigation title={title} />
    </Flex>
  );
};
