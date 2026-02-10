import { ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Logbook() {
  const router = useRouter();
  const [logbook, setLogbook] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://10.238.5.235:3000/logbook"; // ganti IP sesuai laptopmu

  useEffect(() => {
    fetchLogbook();
  }, []);

  const fetchLogbook = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLogbook(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetch logbook:", error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#00508D", paddingTop: 40 }}>

      {/* TITLE */}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "800",
          color: "white",
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        preview logbook
      </Text>

      {/* TABLE WRAPPER */}
      <ScrollView
        style={{
          marginHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 10,
        }}
      >
        {/* TABLE HEADER */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#DDC9BB",
            paddingVertical: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ flex: 1, textAlign: "center", fontWeight: "700" }}>No.</Text>
          <Text style={{ flex: 2, textAlign: "center", fontWeight: "700" }}>TANGGAL</Text>
          <Text style={{ flex: 2, textAlign: "center", fontWeight: "700" }}>DESKRIPSI</Text>
          <Text style={{ flex: 3, textAlign: "center", fontWeight: "700" }}>DOKUMENTASI</Text>
        </View>

        {/* LOADING */}
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        ) : (
          logbook.map((item, index) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <Text style={{ flex: 1, textAlign: "center" }}>{index + 1}</Text>
              <Text style={{ flex: 2, textAlign: "center" }}>{item.tanggal}</Text>
              <Text style={{ flex: 2, textAlign: "center" }}>{item.deskripsi}</Text>
              <Text style={{ flex: 3, textAlign: "center" }}>{item.foto}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* BUTTONS */}
      <View style={{ marginHorizontal: 20, marginTop: 25 }}>

        {/* edit LOG */}
        <TouchableOpacity
          style={{
            backgroundColor: "#FFC107",
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#000",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            EDIT LOG
          </Text>
        </TouchableOpacity>

        {/* TAMBAH LOGBOOK */}
        <TouchableOpacity
          onPress={() => router.push("/form_logbook")}
          style={{
            backgroundColor: "#34C759",
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            LOGBOOK
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
