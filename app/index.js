import React, { useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../constants/theme";
import Welcome from "../components/home/welcome/Welcome";
import PopularJobs from "../components/home/popular/Popularjobs";
import NearbyJobs from "../components/home/nearby/Nearbyjobs";

const Home = () => {
  const router = useRouter();
const [searchTerm, setSearchTerm] = useState("")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
        }}
      />
      <Welcome
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={() => {
          if (searchTerm) {
            router.push(`search/${searchTerm}`);
          }
        }}
      />
      <PopularJobs/>
      <NearbyJobs/>
    </SafeAreaView>
  );
};
export default Home;
