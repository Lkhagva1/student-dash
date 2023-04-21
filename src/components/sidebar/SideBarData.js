import { FiGrid, FiUsers, FiLayers, FiSlack } from "react-icons/fi";
import {
  BiBuildings,
  BiBookReader,
  BiCalendar,
  BiWallet,
  BiChat,
  BiCalendarEvent,
  BiBookBookmark,
  BiFace,
} from "react-icons/bi";

export const navData = [
  {
    title: "Хянах самбар",
    toLink: "/dashboard",
    icon: FiGrid,
  },
  {
    title: "хичээл",
    toLink: "/attendance",
    icon: BiFace,
  },
  {
    title: "цагийн хуваарь",
    toLink: "/timetable",
    icon: FiUsers,
  },
  {
    title: "Дүн",
    toLink: "/result",
    icon: BiBuildings,
  },
  {
    title: "Клубд нэгдэх",
    toLink: "/club",
    icon: BiBuildings,
  },
  {
    title: "сонгосон хичээлүүд",
    toLink: "/subject",
    icon: FiLayers,
  },
  {
    title: "Мэдэгдэл",
    toLink: "/notice",
    icon: BiBookReader,
  },
  {
    title: "Гомдол илгээх",
    toLink: "/complain",
    icon: FiSlack,
  },
  {
    title: "Хуанли",
    toLink: "/calendar",
    icon: BiCalendar,
  },

  {
    title: "Төлбөр",
    toLink: "/event",
    icon: BiCalendarEvent,
  },
  {
    title: "номын сан",
    toLink: "/library",
    icon: BiBookBookmark,
    subTitle: [
      {
        title: "Бүх номын сан",
        toLink: "/library/all",
        icon: BiBookBookmark,
      },
    ],
  },
  {
    title: "Чат",
    toLink: "/chat",
    icon: BiChat,
  },
  {
    title: "төлбөр төлөх",
    toLink: "/fees",
    icon: BiWallet,
  },
  {
    title: "х",
    toLink: "/profile",
    icon: BiWallet,
  },
];
