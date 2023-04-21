import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Kbd,
  SimpleGrid,
  useToast,
  Text,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";
import axios from "axios";
const Notice = () => {
  const toast = useToast();
  const id = "test";
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allnotice", {})
      .then((res) => {
        console.log("branch ---", res.data);
        setNotice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box ml="225px" mt={"30px"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            Мэдэгдэлүүд
          </Text>
        </HStack>
      </Card>
      <SimpleGrid
        spacing={4}
        columns={5}
        // templateColumns="repeat(auto-fill, minmax(200px, 2fr))"
        ml={"30px"}
      >
        {notice &&
          notice.posts &&
          notice.posts.map((item) => (
            <>
              <Card key={item._id}>
                <CardHeader>
                  <Heading size="Sm"> {item.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{item.content}</Text>
                </CardBody>
                {/* <CardFooter>
                  <Text>
                    <Kbd> Гомдол гаргасан</Kbd> - {item.postedBy.name}{" "}
                    {item.postedBy.surname}{" "}
                    <Kbd>{item.createdAt.substr(0, 10)}</Kbd>
                  </Text>
                </CardFooter> */}
              </Card>
            </>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Notice;
