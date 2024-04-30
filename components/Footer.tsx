import { Container, Flex, Link, Text } from '@chakra-ui/react';

export default function Footer(props) {
  return (
    <Container maxWidth="container.lg">
      <Flex mt="auto" alignItems="center" justifyContent="space-between" textAlign="center" px="12" color="gray.500" height="16" {...props} fontSize="sm">
        <Text mt="1">
          Made by {' '}
          <Link href="https://themillenniumfalcon.github.io" fontWeight="500" color="blue.400" isExternal>Medhavini Mathur</Link>
          {' '}& {' '}
          <Link href="https://www.instagram.com/nxmxn_21" fontWeight="500" color="blue.400" isExternal>Kajal Pandey</Link>
        </Text>
      </Flex>
    </Container>
  );
}
