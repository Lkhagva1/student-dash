// Chakra imports
import {
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
  Card,
  CardBody,
  CardHeader,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
// Custom components

import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const ProfileInfo = ({ data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  // const name = Cookies.get("name");
  const surname = Cookies.get("surname");
  const father_name = Cookies.get("father_name");
  const mother_name = Cookies.get("mother_name");
  const email = Cookies.get("email");
  const cls = Cookies.get("cls");
  const roll = Cookies.get("Roll_No");
  const addmision_year = Cookies.get("addmision_year");
  const mobile = Cookies.get("mobile");
  const gender = Cookies.get("gender");
  const date_of_birth = Cookies.get("date_of_birth");
  const age = Cookies.get("age");
  const address = Cookies.get("address");

  return (
    <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
      <CardHeader p="12px 5px" mb="12px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Ерөнхий мэдээлэл
        </Text>
      </CardHeader>
      <CardBody px="5px">
        <Flex direction="column">
          {data && (
            <>
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                {/* Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer
            is no. If two equally difficult paths, choose the one more painful
            in the short term pain avoidance is creating an illusion of equality */}
              </Text>
              <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }}
                gap="22px"
              >
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Овог нэр:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].surname}
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="400"
                    ml={"10px"}
                  >
                    {data[0].name}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Регистер дугаар:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].father_name}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Email:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].email}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Суралцах хэлбэр:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].mother_name}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Гэрийн хаяг:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].address}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Mobile:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].mobile}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Хүйс:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].gender}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    төрсөн он сар өдөр:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].date_of_birth}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    Нас:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].age}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    анги:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].clsName}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    -Курс
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    roll:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].Roll_No}
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    me="10px"
                  >
                    элссэн он:{" "}
                  </Text>
                  <Text fontSize="md" color="gray.500" fontWeight="400">
                    {data[0].addmision_year}
                  </Text>
                </Flex>
              </Grid>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Олон нийтийн сүлжээ:{" "}
                </Text>
                <Flex>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProfileInfo;
