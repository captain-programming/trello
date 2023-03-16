import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiFlashlightFill} from 'react-icons/ri'

const Dashboard = () => {
  return (
    <>
    <Box bg={"rgb(11,70,122)"} width="100%">
      <Flex p={2} justifyContent="space-between">
        <Flex color={"white"} gap={3} alignItems="center" cursor={"pointer"}>
          <Flex alignItems={"center"} gap={2} p={2} bg="rgb(43,99,131)" borderRadius={3}> 
            <Heading size={"sm"} cursor={"pointer"}>Board</Heading>
            <BsChevronDown />
          </Flex>
          <Heading size={"md"} p={2} bg="rgb(43,99,131)" borderRadius={3} cursor={"pointer"}>Personal</Heading>
          <Flex p={2} bg="rgb(43,99,131)" borderRadius={3} justifyContent="center" alignItems={"center"} cursor={"pointer"}>
            <AiOutlineStar fontSize={"25px"}/>  
          </Flex>  
          <Box width={"2px"} h={'100%'} bg="rgb(43,86,131)"></Box>
          <Flex gap={2} p={2} bg="rgb(43,99,131)" borderRadius={3} alignItems="center">
            <Heading size={"sm"} cursor={"pointer"}>Personal</Heading>
            <Text fontWeight={500} fontSize="14px" bg={"rgb(45,120,131)"} cursor={"pointer"} borderRadius={8}>Free</Text>
          </Flex>
          <Box width={"2px"} h={'100%'} bg="rgb(43,86,131)"></Box>

          <Flex alignItems={"center"} gap={2} p={2} bg="rgb(43,99,131)" borderRadius={3} cursor={"pointer"}>
            <FaUserFriends /> 
            <Heading size={"sm"} cursor={"pointer"} >Workspace visible</Heading>
          </Flex>
          <Box width={"2px"} h={'100%'} bg="rgb(43,86,131)"></Box>

          <CgProfile fontSize={"25px"} p={2} bg="rgb(43,99,131)" borderRadius={3}/>
          <Heading size={"sm"} p={2} bg="rgb(43,99,131)" borderRadius={3} cursor={"pointer"}>Invite</Heading>
        </Flex>
        <Flex gap={2} color="white">
          <Flex alignItems={"center"} gap={2} p={2} bg="rgb(43,99,131)" borderRadius={3} cursor={"pointer"}>
            <RiFlashlightFill />
            <Heading size={"sm"} cursor={"pointer"}>Automation</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} p={2} bg="rgb(43,99,131)" borderRadius={3} cursor={"pointer"}>
            <BiDotsHorizontalRounded />
            <Heading size={"sm"} cursor={"pointer"}>Show menu</Heading>
          </Flex>
        </Flex>
      </Flex>
      
    </Box>
    </>
  )
}

export default Dashboard