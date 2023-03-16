import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronUp, BsArrowRight } from 'react-icons/bs'
import { HiOutlineTable } from 'react-icons/hi'
import { AiOutlineDoubleRight, AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

let boardsArr = [
  {
    color: "blue",
    name: "Personal"
  }
];

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <>
    {sidebarToggle ? 
    <Box width={"20%"} bg="white">
      <Flex p={3} borderBlockEnd="1px solid rgb(225,227,231)" justifyContent={"space-between"} alignItems="center">
        <Flex>
          <Heading size={"md"} color="white" bg={"rgb(1,124,83)"} p={"7px 13px"} borderRadius={5}>P</Heading>
          <Box ml={3}>
            <Heading size={"sm"}>Personal</Heading>
            <Text fontSize={"14px"}>Free</Text>
          </Box>
        </Flex>
        <AiOutlineDoubleLeft fontSize={"25px"} cursor="pointer" onClick={() => setSidebarToggle(false)}/>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems="center" p={3}>
        <Text>Workspace views</Text>
        <BsChevronUp />
      </Flex>
      <Flex gap={2} alignItems="center" p={3}>
        <HiOutlineTable fontSize={"20px"}/>
        <Text>Workspace table</Text>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems="center" p={3}>
        <Text>Your boards</Text>
        <Flex gap={3}>
          <AiOutlinePlus fontSize={"18px"} cursor="pointer"/>
          <BsChevronUp /> 
        </Flex> 
      </Flex>
      {
        boardsArr.map((board) => (
          <Flex gap={2} alignItems="center" p={3}>
            <Box bg={board.color} borderRadius={3} width={"25px"} height="25px"></Box>
            <Heading size={"sm"}>{board.name}</Heading>
          </Flex>
        ))
      }
      <Flex justifyContent={"space-between"} alignItems="center" p={3}>
        <Text fontWeight={"500"}>See all Workspace boards</Text>
        <BsArrowRight fontSize={"20px"}/>
      </Flex>
    </Box>
     : 
     <Flex width={"2.5%"} bg="rgb(11,59,100)" p={1} direction="column" gap={2} alignItems="center">
      <Heading size={"md"} color="white" bg={"rgb(1,124,83)"} p={"7px 13px"} borderRadius={5}>P</Heading>
      <AiOutlineDoubleRight fontSize={"25px"} cursor="pointer" onClick={() => setSidebarToggle(true)}/>
     </Flex>
  }
    </>
  )
}

export default Sidebar