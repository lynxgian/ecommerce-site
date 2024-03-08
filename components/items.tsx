import { Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Item } from '@prisma/client';
import Link from 'next/link';
interface LoadItems {
  items: Item[];
}
export default function Items({ items }: LoadItems) {
  return (
    <>
      <Stack
        py={16}
        px={8}
        bg={'#374151'}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}
      >
        <Heading fontWeight={600} textAlign={'center'}>
          The Best Products
        </Heading>
        <Text>
          Here at CompanyName we offer high quality products at an amazing
          price!
        </Text>
      </Stack>
      <Center py={12}>
        {items.map((x) =>
           (
            <Link href={`/items/${x.id}`}>
              <Box
                role={'group'}
                p={6}
                marginX={12}
                maxWidth={'330px'}
                width={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={
                      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
                    }
                    alt="#"
                  />
                </Box>
                <Stack align={'center'}>
                  <Heading>{x.name}</Heading>
                  <Text size={'xl'}>${x.price}</Text>
                </Stack>
              </Box>
            </Link>
          ))
        }
      </Center>
    </>
  )
}
