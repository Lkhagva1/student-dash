import React, { useEffect, useState } from "react";
import {
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
const TimeTable = () => {
  const toast = useToast();
  const id = "test";
  const [time, setTime] = useState([]);
  const [profile, setProfile] = useState();
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
  useEffect(() => {
    axios
      .get("http://localhost:5000/allSub", {})
      .then((res) => {
        console.log("branch ---", res.data);
        setTime(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const className = profile && profile[0].clsName;
  const filterSub = time && time.filter((item) => item.sub_class == className);
  var TheroSub = [];
  var PracSub = [];
  const sepSub = () => {
    filterSub &&
      filterSub.map((item) => {
        if (item.sub_type == "Theory") {
          TheroSub.push(item.sub_name);
        } else {
          PracSub.push(item.sub_name);
        }
      });
  };

  sepSub();
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            хуваарь
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
                  <Th w="10%">8:30AM-10:00AM</Th>
                  <Th w="10%">10:05AM-11:30AM </Th>
                  <Th w="10%">11:30AM:12.00PM</Th>
                  <Th w="10%">12.00PM-1:30PM</Th>
                  <Th w="10%">1:30PM- 3:00PM</Th>
                  <Th w="10%">3:00PM- 3:40PM</Th>
                  <Th w="10%">3:40PM-5:00PM </Th>
                  <Th w="10%">5:10PM: 6.30PM </Th>
                  <Th w="10%">action </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{PracSub[0]}</Td>
                  <Td>{TheroSub[0]}</Td>
                  <Td>амралт</Td>
                  <Td>{TheroSub[0]}</Td>
                  <Td>{TheroSub[0]}</Td>
                  <Td>амралт</Td>
                  <Td>{TheroSub[0]}</Td>
                  <Td>{TheroSub[0]}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          {/* <div style={{ display: "flex", width: "80%", margin: "auto" }}>
          <div style={{ height: "600px", width: "600px" }}>
            <Pie
              data={stateData}
              options={{
                title: {
                  display: true,
                  text: "",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div style={{ marginLeft: "50px", marginTop: "70px" }}>
            <p style={{ fontSize: "150px" }}>{Math.ceil(percentage)}%</p>
          </div>
        </div> */}
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

export default TimeTable;
