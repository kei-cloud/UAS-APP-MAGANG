import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#00508D", paddingTop: 60 }}>

      {/* PROFILE CIRCLE */}
      <View
        style={{
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginBottom: 25,
        }}
      >
        <Image
          source={require("../../assets/images/user.jpeg")}
          style={{ width: 200, height: 200, borderRadius: 100, elevation: 10 }}
        />
      </View>

      {/* WRAPPER UNTUK TEXT + MENU */}
      <View>

        {/* WELCOME TEXT */}
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Selamat Datang, Esnupi
        </Text>

        {/* MENU GRID */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            paddingHorizontal: 20,
          }}
        >
          {/* MENU 1 – ABSENSI */}
          <TouchableOpacity
            onPress={() => router.push("/absensi")}
            style={{
              width: 140,
              height: 120,
              backgroundColor: "#FFCC00",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Ionicons name="clipboard-outline" size={50} color="#000" />
            <Text style={{ marginTop: 8, fontWeight: "600" }}>absensi</Text>
          </TouchableOpacity>

          {/* MENU 2 – LOGBOOK */}
          <TouchableOpacity
            onPress={() => router.push("/logbook")}
            style={{
              width: 140,
              height: 120,
              backgroundColor: "#FFF",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Ionicons name="book-outline" size={50} color="#000" />
            <Text style={{ marginTop: 8, fontWeight: "600" }}>logbook</Text>
          </TouchableOpacity>

          {/* MENU 3 – TUGAS AKHIR */}
          <TouchableOpacity
            style={{
              width: 140,
              height: 120,
              backgroundColor: "#FFCC00",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Ionicons name="document-text-outline" size={50} color="#000" />
            <Text style={{ marginTop: 8, fontWeight: "600" }}>tugas akhir</Text>
          </TouchableOpacity>

          {/* MENU 4 – ABOUT US */}
          <TouchableOpacity
            style={{
              width: 140,
              height: 120,
              backgroundColor: "#FFCC00",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={50}
              color="#000"
            />
            <Text style={{ marginTop: 8, fontWeight: "600" }}>about us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
