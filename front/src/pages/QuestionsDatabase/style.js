import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: "100%",
    },
    listCards: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    registerButton: {
        position: "absolute",
        top: 600,
        right: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C066B",
        resizeMode: "contain",
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    registerText: {
        color: "#fff",
        textAlign: "center",
        lineHeight: 50,
        fontSize: 40,
    }
})
