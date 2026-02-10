import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function FormLogbook() {
  const router = useRouter();

  const [tanggal, setTanggal] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState("");

  const handleSubmit = async () => {
    if (!tanggal || !deskripsi || !foto) {
      Alert.alert("Error", "Semua field wajib diisi");
      return;
    }

    try {
      const response = await fetch("http://10.238.5.235:3000/logbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tanggal: tanggal,
          deskripsi: deskripsi,
          foto: foto,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Logbook berhasil disimpan");
        router.replace("/logbook");
      } else {
        Alert.alert("Error", data.message || "Gagal simpan logbook");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Tidak bisa connect ke server");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#00508D", paddingTop: 40 }}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "800",
          color: "white",
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        Form Logbook
      </Text>

      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
        }}
      >
        {/* TANGGAL */}
        <Text style={{ fontWeight: "700", marginBottom: 5 }}>Tanggal</Text>
        <TextInput
          placeholder="YYYY-MM-DD"
          value={tanggal}
          onChangeText={setTanggal}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
          }}
        />

        {/* DESKRIPSI */}
        <Text style={{ fontWeight: "700", marginBottom: 5 }}>
          Deskripsi Kegiatan
        </Text>
        <TextInput
          placeholder="Tuliskan kegiatan hari ini..."
          value={deskripsi}
          onChangeText={setDeskripsi}
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            height: 100,
            marginBottom: 15,
            textAlignVertical: "top",
          }}
        />

        {/* FOTO LINK */}
        <Text style={{ fontWeight: "700", marginBottom: 5 }}>
          Link Dokumentasi
        </Text>
        <TextInput
          placeholder="https://drive.google.com/..."
          value={foto}
          onChangeText={setFoto}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 20,
          }}
        />

        {/* BUTTON SIMPAN */}
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: "#34C759",
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 10,
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
            SIMPAN
          </Text>
        </TouchableOpacity>

        {/* BUTTON BATAL */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "#FFC107",
            paddingVertical: 15,
            borderRadius: 10,
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
            BATAL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
