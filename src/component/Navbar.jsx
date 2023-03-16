import { Box, Flex, Heading, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react';
import {CgMenuGridO, CgProfile} from "react-icons/cg";
import {BsChevronDown} from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
import {HiOutlineInformationCircle} from "react-icons/hi";
import {IoMdNotificationsOutline} from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <Flex justifyContent={"space-between"} bg="rgb(10,47,84)" color={"white"} p={2} alignItems="center" fontFamily={"sans-serif"}>
      <Flex alignItems="center" gap={5}>
        <Box borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>
          <CgMenuGridO fontSize={"30px"} />
        </Box>
        <Heading size={"md"} cursor="pointer" borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>Trello</Heading>
        <Flex alignItems="center" gap={2} cursor="pointer" borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>
          <Text cursor="pointer">Workspaces</Text>
          <BsChevronDown />
        </Flex>
        <Flex alignItems="center" gap={2} cursor="pointer" borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>
          <Text cursor="pointer">Recent</Text>
          <BsChevronDown />
        </Flex>
        <Flex alignItems="center" gap={2} cursor="pointer" borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>
          <Text cursor="pointer">Starred</Text>
          <BsChevronDown />
        </Flex>
        <Text cursor="pointer" borderRadius={3} p={"5px 15px"} _hover={{bg: "rgb(50,125,166)"}}>Create</Text>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <InputGroup borderRadius={3} _hover={{bg: "rgb(50,125,166)"}} border="1px solid white.50">
          <InputLeftAddon children={<BiSearch fontSize={"25px"}/>} pointerEvents='none' bg={"none"}/>
          <Input type={"text"} placeholder="Search"/>
        </InputGroup>
        <Box cursor="pointer" borderRadius={"50%"} p={2} _hover={{bg: "rgb(50,125,166)"}}>
        <HiOutlineInformationCircle fontSize={"25px"}/>
        </Box>
        <Box cursor="pointer" borderRadius={"50%"} p={2} _hover={{bg: "rgb(50,125,166)"}}>
        <IoMdNotificationsOutline fontSize={"25px"}/>
        </Box>
        <Box  borderRadius={"50%"} p={2} _hover={{bg: "rgb(50,125,166)"}}>
        <CgProfile fontSize={"25px"}/>
        </Box>
      </Flex>
    </Flex>
    </>
  )
}

export default Navbar;