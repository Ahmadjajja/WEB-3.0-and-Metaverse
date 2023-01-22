import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { css } from "@emotion/react";
function PricingUI() {
  return (
    <>
      <Flex
        direction={"column"}
        color="white"
        alignItems={"center"}
        backgroundColor={"#6B46C1"}
        padding={"50px 10px 100px 10px"}
        className="top"
      >
        <Heading as="h2" size="lg" noOfLines={2}>
          Simple pricing for your business
        </Heading>
        <h3>Plans that are carefully crafted to suit your business.</h3>
      </Flex>
      <Box
        display={"flex"}
        padding={["0 20px", "0 20px", "0 150px"]}
        flexDirection={["column", "column", "row"]}
        mt={"-80px"}
        zIndex={100}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          w={["100%", "100%", "40%"]}
          backgroundColor={"#F0EAFB"}
          p={8}
        >
          <Heading as="h3" size="md" pb={2}>
            Premium PRO
          </Heading>
          <Heading as="h2" size="lg" pb={2}>
            $329
          </Heading>
          <Text pb={2}>billed just once</Text>
          <Button bgColor={"#6B46C1"} color={"white"} w={"100%"}>
            Get Started
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          w={["100%", "100%", "60%"]}
          p={8}
          backgroundColor={"white"}
        >
          <List spacing={3}>
            <Text>
              Access these features when you get this pricing package for your
              business
            </Text>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              International calling and messaging API
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Additional phone numbers
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Automated messages via Zapier
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              24/7 support and consulting
            </ListItem>
          </List>
        </Box>
      </Box>
      <Flex
        className="bottom"
        padding={["0 20px", "0 20px", "0 150px"]}
        backgroundColor={"white"}
      >
        <Flex p={10} bgColor={"#7345AC"} w={"33.3%"}>
          <Text display={'flex'}>
            <span className="star">...</span> 30 days money back guarantee
          </Text>
        </Flex>
        <Flex p={10} bgColor={"#F345DC"} w={"33.4%"}>
          No setup fees 100% hastle-free{" "}
        </Flex>
        <Flex p={10} bgColor={"#A322AC"} w={"33.3%"}>
          No monthly subscription pay once and for all
        </Flex>
      </Flex>
    </>
  );
}

export default PricingUI;