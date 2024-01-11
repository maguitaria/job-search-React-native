import React from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons,  SIZES } from "../constants/theme";
import Welcome from "../components/home/welcome/Welcome";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
        }}
      />
      <Welcome searchTerm={"LA la la"} setSearchTerm={undefined} handleClick={undefined}/>
    </SafeAreaView>
  );
};
export default Home;
