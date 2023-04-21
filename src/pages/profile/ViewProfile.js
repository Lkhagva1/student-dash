import React, { useContext, useEffect } from "react";
import MyProfile from "./MyProfile";
import Platformset from "./Platformset";
import ProfileInfo from "./ProfileInfo";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const ViewProfile = () => {
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
  return (
    <Flex direction="column">
      <MyProfile data={profile} />
      <Box
        flexDirection="column"
        pt={{ base: "120px", md: "25px" }}
        ml="250px"
        mr={"20px"}
      >
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap="22px"
        >
          <ProfileInfo data={profile} />
          {/* <Platformset /> */}
        </Grid>
      </Box>
    </Flex>
  );
};

export default ViewProfile;
