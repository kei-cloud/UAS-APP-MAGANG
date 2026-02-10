import { View, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://10.238.5.235:3000/user/login"; // ganti IP laptopmu

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Login Failed", "Username dan Password wajib diisi.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Login berhasil");
        router.replace("/home"); // replace biar ga balik ke login
      } else {
        Alert.alert("Login Failed", data.message);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Tidak bisa konek ke server");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#00508D",
      }}
    >
      <View
        style={{
          width: 500,
          height: 500,
          backgroundColor: "#E3ECF9",
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: -300,
          marginBottom: 20,
          elevation: 8,
        }}
      >
        <Image
          source={require("../assets/images/pasca.png")}
          style={{
            width: 300,
            height: 300,
            alignSelf: "center",
            marginTop: 100,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 30,
          marginTop: 10,
          textAlign: "center",
          color: "#fff",
        }}
      >
        PROGRAM MAGANG PASCASARJANA ITB STIKOM BALI
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 3,
          padding: 12,
          marginBottom: 10,
          borderRadius: 8,
          borderColor: "#00508D",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 3,
          padding: 12,
          borderRadius: 8,
          borderColor: "#00508D",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#34C759",
          padding: 15,
          marginTop: 25,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          SIGN IN
        </Text>
      </TouchableOpacity>
    </View>
  );
}