import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  position,
} from "@chakra-ui/react";

interface TestimonialTypes {
  testimonials: {
    name: string;
    message: string;
    avatar: string;
    profession: string;
    keyMessage: string;
  }[];
}

const Testimonial = ({ name, message, avatar, profession, keyMessage }) => (
  <Box>
    <Stack
      m={4}
      boxShadow={"lg"}
      align={"center"}
      pos={"relative"}
      bg={"white"}
      p={4}
      rounded={"xl"}
    >
      <Heading as={"h2"} fontSize={"xl"}>
        {keyMessage}
      </Heading>
      <Text align={"center"} fontSize={"small"} color={"gray"}>
        {message}
      </Text>
      <Avatar src={avatar} mb={2} mt={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"small"}>{profession}</Text>
      </Stack>
    </Stack>
  </Box>
);

export default function Testimonials({ testimonials }: TestimonialTypes) {
  return (
    <>
      <Box>
        <Container as={Stack} spacing={12} maxWidth={"7xl"}>
          <Stack align={"center"}>
            <Heading>Why Customers Chose Us</Heading>
          </Stack>
          <Stack
            bg={"gray"}
            rounded={"xl"}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 15, md: 4, lg: 10 }}
          >
            {testimonials.map((x) => {
              return (
                <Testimonial
                  name={x.name}
                  message={x.message}
                  profession={x.profession}
                  keyMessage={x.keyMessage}
                  avatar={
                  x.avatar
                  }
                />
              );
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
