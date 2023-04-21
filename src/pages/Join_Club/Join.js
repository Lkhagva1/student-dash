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
import { FiTrash2, FiEdit, FiUserPlus, FiEdit2, FiCheck } from "react-icons/fi";
import { FcGraduationCap } from "react-icons/fc";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment/moment";
const Join = () => {
  const [CuserId, setcuserId] = useState("");
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState();
  const [sub, setSub] = useState([]);
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
  const reqToJoinClubAction = async (user) => {
    // console.log("profile..", id);
    try {
      const res = await axios.post("http://localhost:5000/joinclub", user);

      console.log("join success", response.data);
      //   setProfile(response.data);
      const response = await axios.get("http://localhost:5000/allclub");

      console.log("allclub", response.data);
      //   setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllClubAction = async () => {
    // console.log("profile..", id);
    try {
      const response = await axios.get("http://localhost:5000/allclub");

      console.log("joi", response.data);
      //   setProfile(response.data)
      setSub(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Cookies.get("CurrentUser")) {
      const userId = JSON.parse(Cookies.get("CurrentUser")).user._id;
      createProfile(userId);
    }
    getAllClubAction();
  }, [show]);
  var userId;
  const sendReqToJoinClub = (clubId, clubName) => {
    userId = profile[0]._id;
    const userName = profile[0].name;
    const userClass = profile[0].clsName;

    const data = { userId, cuser: profile[0], clubId, clubName };
    reqToJoinClubAction(data);
    getAllClubAction();
    setShow(!show);
  };
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            клубд нэгдэх
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
                  <Th w="10%">нэр</Th>
                  <Th w="10%">тайлбар</Th>
                  <Th w="10%">action</Th>
                </Tr>
              </Thead>
              {sub &&
                sub.map((user, index) => (
                  <Tbody key={user._id}>
                    <Tr>
                      <Td>{index + 1}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.description}</Td>
                      <Td>
                        {user.members && user.members.includes(CuserId) ? (
                          <>
                            <Button bg={"transparent"} fontSize="13px">
                              <FiEdit2 />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              colorScheme="whatsapp"
                              fontSize="13px"
                              onClick={() =>
                                sendReqToJoinClub(user._id, user.name)
                              }
                            >
                              <FiCheck />
                            </Button>
                          </>
                        )}
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
          ></Text>
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

export default Join;
