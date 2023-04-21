import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Text,
  useColorMode,
  useColorModeValue,
  Link,
  Heading,
  Avatar,
  Center,
  Stack,
  Badge,
  CardHeader,
  CardBody,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdClearAll,
  MdCastForEducation,
} from "react-icons/md";
import {
  calendarDataCalendar,
  columnsDataComplex,
  tableDataComplex,
} from "../../components/Data/CalendarData";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FiCheck } from "react-icons/fi";
import MiniStatictic from "../../components/Card/MiniStatictic";
import IconBox from "../../components/Icons/IconBox";
import ComplexTable from "../../components/Data/ComplexTable";
import Tasks from "../../components/Card/Tasks";
// import MyCalendar from "../calendar/MyCalendar";
import MCalendar from "../../components/calendar/MCalendar";
import img from "../../assets/img/BackgroundCard1.png";
import ProfileBgImage from "../../assets/img/ProfileBackground.png";
import MyProfile from "../profile/MyProfile";
import Cookies from "js-cookie";
const Dashboard = () => {
  const name = Cookies.get("name");
  const surname = Cookies.get("surname");
  const cls = Cookies.get("cls");
  const roll = Cookies.get("roll");
  const email = Cookies.get("email");
  return (
    <Box>
      <MyProfile
        name={name}
        email={email}
        surname={surname}
        cls={cls}
        roll={roll}
      />
      <Box
        flexDirection="column"
        pt={{ base: "120px", md: "25px" }}
        ml="250px"
        mr={"20px"}
      >
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <MCalendar h="100%" minW="100%" selectRange={false} />
            <Tasks />
          </SimpleGrid>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Dashboard;
