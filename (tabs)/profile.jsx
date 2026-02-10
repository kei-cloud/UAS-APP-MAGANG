import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah kamu yakin ingin logout?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => router.replace("/"), // balik ke Login
        },
      ]
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#00508D" }}>
      
      {/* WRAPPER PUTIH */}
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 40,
          marginBottom: 40,
          marginHorizontal: 20,
          borderRadius: 25,
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        {/* PROFILE PICTURE */}
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#E3ECF9",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 10,
            elevation: 6,
          }}
        >
          <Image
            source={require("../../assets/images/user.jpeg")}
            style={{ width: 180, height: 180, borderRadius: 90 }}
          />
        </View>

        {/* NAMA + NIM */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          esnupi
        </Text>

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "#444",
            marginTop: 5,
            marginBottom: 25,
          }}
        >
          123456789
        </Text>

        {/* CARD DATA MAHASISWA */}
        <View
          style={{
            backgroundColor: "#E5E5E5",
            padding: 20,
            borderRadius: 20,
            marginBottom: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 4,
          }}
        >
          <Text style={{ color: "#000", marginBottom: 5 }}>Jurusan</Text>
          <Text style={{ fontWeight: "700", marginBottom: 15 }}>
            D-3 Manajemen Informatika
          </Text>

          <Text style={{ color: "#000", marginBottom: 5 }}>Alamat E-mail</Text>
          <Text
            style={{
              fontWeight: "700",
              marginBottom: 15,
              textDecorationLine: "underline",
            }}
          >
            esnupi@mail.com
          </Text>

          <Text style={{ color: "#000", marginBottom: 5 }}>Telepon</Text>
          <Text style={{ fontWeight: "700", marginBottom: 15 }}>
            080812345678
          </Text>

          <Text style={{ color: "#000", marginBottom: 5 }}>Alamat</Text>
          <Text style={{ fontWeight: "700" }}>somewhere somewhere</Text>
        </View>

        {/* CARD DOSEN PENDAMPING */}
        <View
          style={{
            backgroundColor: "#E5E5E5",
            padding: 20,
            borderRadius: 20,
            marginBottom: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 4,
          }}
        >
          <Text style={{ color: "#000", marginBottom: 5 }}>
            Dosen Pendamping
          </Text>
          <Text style={{ fontWeight: "700", marginBottom: 15 }}>
            dosen a
          </Text>

          <Text style={{ color: "#000", marginBottom: 5 }}>Alamat E-mail</Text>
          <Text
            style={{
              fontWeight: "700",
              marginBottom: 15,
              textDecorationLine: "underline",
            }}
          >
            dosen@mail.com
          </Text>

          <Text style={{ color: "#000", marginBottom: 5 }}>Telepon</Text>
          <Text style={{ fontWeight: "700" }}>080812345678</Text>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#FF3B30",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: 10,
            marginHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
