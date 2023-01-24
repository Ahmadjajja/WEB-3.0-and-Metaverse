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
import styles from "../page.module.css";
// import star from "../../../public/star.jpeg"
const star = require("../../../public/star.jpeg")
import circle from "../../../public/circle.jpeg"
import starCircle from "../../../public/starCircle.jpeg"
import Image from 'next/image';

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
        className={styles.detailedPortion}
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
              <ListIcon as={MdCheckCircle} color="#652CD3" />
              International calling and messaging API
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="#652CD3" />
              Additional phone numbers
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="#652CD3" />
              Automated messages via Zapier
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="#652CD3" />
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
        <Flex p={10} w={"33.3%"}>
          <Image src={star} alt="star" />
          <Heading as="h6" size="sm" display={"flex"} pb={2}>
            30 days money back guarantee
          </Heading>
        </Flex>
        <Flex p={10} w={"33.4%"}>
        <Image src={starCircle} alt="starCircle" />
          <Heading as="h6" size="sm" display={"flex"}>
            No setup fees 100% hastle-free{" "}
          </Heading>
        </Flex>
        <Flex p={10} w={"33.3%"}>
          <Image src={circle} alt="circle" />
          <Heading as="h6" size="sm" display={"flex"}>
            No monthly subscription pay once and for all
          </Heading>
        </Flex>
      </Flex>
    </>
  );
}

export default PricingUI;
