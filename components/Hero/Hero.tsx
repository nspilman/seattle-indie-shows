import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";

export type Props = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImg: string;
};

export const Hero: React.FC<Props> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImg,
}) => {
  return (
    <Box
      bgImage={`url(${backgroundImg})`}
      bgSize="cover"
      bgPosition="center"
      minHeight="60vh"
      py={10}
      px={4}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="100%"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" color="white">
            {title}
          </Heading>
          <Text fontSize="xl" color="white">
            {subtitle}
          </Text>
          <Link href={buttonLink}>
            <Button as="a" colorScheme="blue" size="lg">
              {buttonText}
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};
