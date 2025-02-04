import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: '100%', // Asegura que ocupe toda la pantalla
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(7,26,93,255)',
    },
    leftContainer: {
        alignItems: "flex-start",
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        color: '#fff',
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    }
});


export default styles;
