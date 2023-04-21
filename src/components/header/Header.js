import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link,
  InputGroup,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
import { BiExpand, BiPaperPlane } from "react-icons/bi";
import { useContext } from "react";
import Cookies from "js-cookie";
import AuthContext from "../../context/AuthContext";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import avatar2 from "../../assets/logo/logo/avatar2.png";
import { navData } from "../sidebar/SideBarData";
const Header = ({ onOpen, ...rest }) => {
  const { logoutHandler } = useContext(AuthContext);
  const username = Cookies.get("name");
  const location = useLocation();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="14"
      w={{ base: "full", md: "85%", lg: "85%" }}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      boxShadow={"md"}
      rounded={"lg"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <VStack
        alignItems={"flex-start"}
        spacing={0}
        display={{ base: "none", base: "none", lg: "flex" }}
      >
        <Breadcrumb
          spacing="4px"
          separator={<FiChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" fontSize={12}>
              Хуудас
            </BreadcrumbLink>
          </BreadcrumbItem>
          {navData.filter((e) => e.toLink !== "/profile") ? (
            location.pathname === "/" ? null : location.pathname ? (
              <BreadcrumbItem>
                <BreadcrumbLink href={location.pathname} fontSize={12}>
                  {
                    navData.find(
                      (e) =>
                        e.toLink.split("/")[1] ===
                        location.pathname.split("/")[1]
                    ).title
                  }
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : null
          ) : null}
        </Breadcrumb>
        <Text color={"#45A735"} fontWeight={"medium"} fontSize={12}>
          {location.pathname === "/dashboard"
            ? "Хяналтын самбар"
            : location.pathname === "/profile"
            ? "Профайл"
            : location.pathname === "/attendance"
            ? "баталгаажуулалт"
            : location.pathname === "/timetable"
            ? "хуваарь"
            : location.pathname === "/result"
            ? "Дүн"
            : location.pathname === "/club"
            ? "клуб"
            : location.pathname === "/complain"
            ? "гомдол"
            : location.pathname === "/notice"
            ? "мэдэгдэл"
            : location.pathname === "/subject"
            ? "сонгосон хичээл"
            : location.pathname === "/calendar"
            ? "хуанли"
            : location.pathname === "/event"
            ? "үйл ажиллагаа"
            : location.pathname === "/library"
            ? "номын сан"
            : location.pathname === "/chat"
            ? "чат"
            : null}
        </Text>
      </VStack>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }}>
        <Box
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
        >
          <Stack spacing={5} mr="50px">
            <InputGroup bg="white" borderRadius="5px" color="black">
              <Input placeholder="хайх.." fontSize="10px" />
              <IconButton
                display={{ base: "flex", md: "flex" }}
                variant="outline"
                aria-label="open menu"
                icon={<FiSearch />}
              />
            </InputGroup>
          </Stack>
        </Box>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BiExpand />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BiPaperPlane />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={avatar2} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{username}</Text>
                  <Text fontSize="xs" color="#45a735">
                    Сурагч
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <Link href="/profile">Профайл</Link>
              </MenuItem>
              <MenuItem>Тохиргоо</MenuItem>
              <MenuItem>Данс</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Гарах</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
