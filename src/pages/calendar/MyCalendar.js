import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { calendarDataCalendar } from "../../components/Data/CalendarData";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import MCalendar from "../../components/calendar/MCalendar";
const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  return (
    <Box maxW="8xl" ml={250} pt={20}>
      <Calendar
        bg="green"
        localizer={localizer}
        events={calendarDataCalendar}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      {/* <MCalendar h="100%" minW="100%" selectRange={false} /> */}
    </Box>
  );
};

export default MyCalendar;
