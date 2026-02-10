import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Absensi() {
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
        preview log absensi
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
          <Text style={{ flex: 1, textAlign: "center", fontWeight: "700" }}>
            No.
          </Text>
          <Text style={{ flex: 2, textAlign: "center", fontWeight: "700" }}>
            NIM
          </Text>
          <Text style={{ flex: 2, textAlign: "center", fontWeight: "700" }}>
            TANGGAL
          </Text>
          <Text style={{ flex: 3, textAlign: "center", fontWeight: "700" }}>
            TIMESTAMP
          </Text>
        </View>

        {/* ROWS */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: "#ddd",
            }}
          >
            <Text style={{ flex: 1, textAlign: "center" }}>{i}.</Text>
            <Text style={{ flex: 2, textAlign: "center" }}>123456789</Text>
            <Text style={{ flex: 2, textAlign: "center" }}>00/00/00</Text>
            <Text style={{ flex: 3, textAlign: "center" }}>
              08:05AM–3:40PM
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* BUTTONS */}
      <View style={{ marginHorizontal: 20, marginTop: 25 }}>

      {/* LIHAT SEMUA ABSENSI */}
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
            LIHAT SEMUA ABSENSI
          </Text>
        </TouchableOpacity>

        {/* LAKUKAN ABSENSI */}
        <TouchableOpacity
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
            LAKUKAN ABSENSI
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
