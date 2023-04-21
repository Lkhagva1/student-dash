import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Card,
  Heading,
  HStack,
  Link,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import {
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiTrash2, FiEdit, FiUserPlus, FiEdit2 } from "react-icons/fi";
import { FcGraduationCap } from "react-icons/fc";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment/moment";
const Result = () => {
  const [profile, setProfile] = useState();
  const [sub, setSub] = useState([]);
  const [show, setShow] = useState();
  const createProfile = async (id) => {
    console.log("profile..", id);
    try {
      const response = await axios.post("http://localhost:5000/profile", {
        id,
      });
      console.log(response.data);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Cookies.get("CurrentUser")) {
      const userId = JSON.parse(Cookies.get("CurrentUser")).user._id;
      createProfile(userId);
    }
  }, []);
  var pointArr = [];
  const calculateCPGA = () => {
    profile &&
      profile[0].markList &&
      profile[0].markList.forEach((user) => {
        if (user.smark >= 95) {
          pointArr.push(4.0);
        } else if (user.smark < 94 && user.smark >= 90) {
          pointArr.push(3.6);
        } else if (user.smark < 89 && user.smark >= 85) {
          pointArr.push(3.1);
        } else if (user.smark < 84 && user.smark >= 80) {
          pointArr.push(2.8);
        } else if (user.smark < 79 && user.smark >= 75) {
          pointArr.push(2.4);
        } else if (user.smark < 74 && user.smark >= 70) {
          pointArr.push(2.0);
        } else if (user.smark < 69 && user.smark >= 65) {
          pointArr.push(1.6);
        } else if (user.smark < 64 && user.smark >= 60) {
          pointArr.push(1.0);
        } else {
          pointArr.push(0.0);
        }
      });
  };

  calculateCPGA();

  var cgpa = pointArr.reduce((a, b) => a + b, 0) / pointArr.length;
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            хичээлийн дүн
          </Text>
        </HStack>
      </Card>
      <Flex
        direction="column"
        // pt={{ base: "50px", md: "10px" }}
        w={{ sm: "50%", md: "100%", lg: "100%" }}
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: "4px", md: "12px" }}
            align="center"
            me="12px"
            my="24px"
            ml={"20px"}
            minW={{ sm: "100px", md: "200px" }}
          >
            <Select
              // value={pageSize}
              // onChange={(e) => setPageSize(Number(e.target.value))}
              color="#45a735"
              size="sm"
              borderRadius="12px"
              maxW="75px"
              cursor="pointer"
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </Select>
            <Text fontSize="xs" color="#45a735" fontWeight="normal">
              хуудасны хувиарлалт
            </Text>
          </Stack>
          <Input
            type="text"
            placeholder="хайх..."
            minW="75px"
            maxW="175px"
            fontSize="sm"
            _focus={{ borderColor: "#45a735" }}
            // onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>
        <Flex p={6} direction="column">
          <Heading mb={4}></Heading>
          <TableContainer>
            <Table size="sm" variant="striped" alignItems="flex-end">
              <Thead>
                <Tr>
                  <Th w="10%">No.</Th>
                  <Th w="10%">Хичээлийн нэр</Th>
                  <Th w="10%">Хичээлийн дүн</Th>
                  <Th w="10%">Хичээлийн үсгэн үнэлгээ</Th>
                  <Th w="10%">Голч</Th>
                </Tr>
              </Thead>
              {profile &&
                profile[0].markList &&
                profile[0].markList.map((user, index) => (
                  <Tbody key={user.name}>
                    <Tr>
                      <Td>{index + 1}</Td>
                      <Td>{user.subject}</Td>
                      <Td> {user.smark}</Td>
                      <Td>
                        {user.smark >= 95 && <>A+</>}
                        {user.smark < 94 && user.smark >= 90 && <>A</>}
                        {user.smark < 89 && user.smark >= 85 && <>B+</>}
                        {user.smark < 84 && user.smark >= 80 && <>B</>}
                        {user.smark < 79 && user.smark >= 75 && <>C+</>}
                        {user.smark < 74 && user.smark >= 70 && <>C</>}
                        {user.smark < 69 && user.smark >= 65 && <>D+</>}
                        {user.smark < 64 && user.smark >= 60 && <>D</>}
                        {user.smark < 59 && user.smark >= 0 && <>F</>}
                      </Td>
                      <Td>
                        {user.smark >= 95 && <>4.0</>}
                        {user.smark < 94 && user.smark >= 90 && <>3.6</>}
                        {user.smark < 89 && user.smark >= 85 && <>3.1</>}
                        {user.smark < 84 && user.smark >= 80 && <>2.8</>}
                        {user.smark < 79 && user.smark >= 75 && <> 2.4</>}
                        {user.smark < 74 && user.smark >= 70 && <>2.0</>}
                        {user.smark < 69 && user.smark >= 65 && <>1.6</>}
                        {user.smark < 64 && user.smark >= 60 && <>1.0</>}
                        {user.smark < 59 && user.smark >= 0 && <>0.0</>}
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
            </Table>
          </TableContainer>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          justify="space-between"
          align="center"
          px="22px"
          w="100%"
          paddingX={{ md: "22px" }}
        >
          <Text
            fontSize="sm"
            color="#45a735"
            fontWeight="normal"
            mb={{ sm: "24px", md: "0px" }}
          >
            Голч дүн:{cgpa.toFixed(2)}
          </Text>
          <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
            <Button
              variant="no-hover"
              // onClick={() => previousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="#fff"
              border="1px solid lightgray"
              // display={
              //   pageSize === 5 ? "none" : canPreviousPage ? "flex" : "none"
              // }
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
            >
              <Icon as={GrFormPrevious} w="16px" h="16px" color="gray.400" />
            </Button>

            <Button
              variant="no-hover"
              // onClick={() => nextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="160px"
              bg="#fff"
              border="1px solid lightgray"
              // display={pageSize === 5 ? "none" : canNextPage ? "flex" : "none"}
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
            >
              <Icon as={GrFormNext} w="16px" h="16px" color="gray.400" />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Result;
