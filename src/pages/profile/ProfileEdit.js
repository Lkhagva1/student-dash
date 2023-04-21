import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { FcGraduationCap } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { Address, CName, Gender, QuaF } from "../../components/vareable/Quaf";
import { Tarea } from "./../../components/vareable/Quaf";
import { useEffect } from "react";
import Cookies from "js-cookie";
const ProfileEdit = () => {
  //   const history = useHistory();
  const toast = useToast();
  const id = "test";
  const [surname, setSurName] = useState("");
  const [name, setName] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [father_name, setFather_name] = useState("");
  const [email, setEmail] = useState("");
  const [Roll_No, setRoll_No] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [clsName, setClsName] = useState("");
  const [addmision_year, setAddmision_year] = useState("");
  const [password, setPasword] = useState("");
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState();
  const createProfile = async (id) => {
    // console.log("profile..", id);
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
      const user = JSON.parse(Cookies.get("CurrentUser")).user;
      setUserId(user._id);
      setName(user.name);
      setSurName(user.surname);
      setMother_name(user.mother_name);
      setFather_name(user.father_name);
      setEmail(user.email);
      setRoll_No(user.Roll_No);
      setAge(user.age);
      setGender(user.gender);
      setDate_of_birth(user.date_of_birth);
      setClsName(user.clsName);
      setAddmision_year(user.addmision_year);
      setAddress(user.address);
      setMobile(user.mobile);
      createProfile(user._id);
    }
  }, []);
  const UpdateStudent = () => {
    axios
      .post("http://localhost:5000/stuUpd", {
        name,
        surname,
        mother_name,
        father_name,
        email,
        Roll_No,
        age,
        gender,
        date_of_birth,
        address,
        mobile,
        clsName,
        addmision_year,
        password,
        userId,
      })
      .then(function (response) {
        // console.log("data", response);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "success",
            description: "Амжилттай!",
          });
        }
      })
      .catch(function (error) {
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "error",
            description: error.response.data.message
              ? error.response.data.message
              : "Алдаа гарлаа!",
          });
        }
        console.log(error);
      });
  };
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            Профайл засах
          </Text>
          {/* <HStack>
            <Button colorScheme={"green"} alignItems="center" textAlign={"end"}>
              <FiUserPlus />
            </Button>
          </HStack> */}
        </HStack>
      </Card>
      <Stack
        spacing={8}
        w="100%"
        bg={useColorModeValue("white", "gray.700")}
        rounded="lg"
        boxShadow="lg"
        p={{ base: 5, sm: 10 }}
        mt={"20px"}
        pl="230px"
      >
        <VStack spacing={4} w="100%">
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Овог</FormLabel>
              <Input
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                placeholder="овог"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Нэр</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Эхийн нэр</FormLabel>
              <Input
                value={mother_name}
                onChange={(e) => setMother_name(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Эцэг нэр</FormLabel>
              <Input
                value={father_name}
                onChange={(e) => setFather_name(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Хүйс</FormLabel>
              <Select
                placeholder="Хүйс сонгох"
                value={gender}
                id="selectId"
                onChange={(e) => setGender(e.target.value)}
              >
                {Gender.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>курс</FormLabel>
              <Select
                placeholder="курс сонгох"
                id="selectId"
                value={clsName}
                onChange={(e) => setClsName(e.target.value)}
              >
                {CName.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Хаяг</FormLabel>
              <Select
                placeholder="Хаяг сонгох"
                id="selectId"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                {Address.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Цахим хаяг</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>төрсөн он сар өдөр</FormLabel>
              <Input
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
                type="date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>элссэн он</FormLabel>
              <Input
                value={addmision_year}
                onChange={(e) => setAddmision_year(e.target.value)}
                type="number"
              />
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Нас</FormLabel>
              <NumberInput max={50} min={0}>
                <NumberInputField
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Утас</FormLabel>
              <Input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="number"
              />
            </FormControl>
            <FormControl>
              <FormLabel>овутны код</FormLabel>
              <Input
                value={Roll_No}
                onChange={(e) => setRoll_No(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Нууц үг</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPasword(e.target.value)}
                type="password"
              />
            </FormControl>
          </Stack>
        </VStack>
        <VStack w="100%">
          <Button
            bg="green.300"
            color="white"
            _hover={{
              bg: "green.500",
            }}
            rounded="md"
            w={{ base: "100%", md: "max-content" }}
            onClick={() => UpdateStudent()}
          >
            Шинэчлэх
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ProfileEdit;
