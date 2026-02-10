import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={34} color="#000" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: () => (
            <Ionicons name="person-circle-sharp" size={34} color="#000" />
          ),
        }}
      />
    </Tabs>
  );
}
