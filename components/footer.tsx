import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Footer() {
  const date = new Date()
  return (
    <>
      <Divider />
      <Box bg={"gray"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Text fontWeight={600} size={"lg"} pb={2}>
                {" "}
                Contact Us{" "}
              </Text>
              <Box>Email Us: example@gmail.com</Box>
              <Box>Call Us: 555-555-5555</Box>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={600} size={"lg"} pb={2}>
                {" "}
                Pages{" "}
              </Text>
            </Stack>
            <Stack>
              <Text fontWeight={600} size={"lg"} pb={2}>
                Legal
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
        <Divider />
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>©{date.getFullYear().toString()} Company Name. All Rights Reserved</Text>
        </Container>
      </Box>
    </>
  );
}
