import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPai: {
        //flex: 1,
        height:"100%",
        backgroundColor: "lightslategrey",
        paddingTop:20
    },
    containerHead: {
        //flex: 2,
        height:200,
        backgroundColor: "lightslategrey"
    },
    containerMiddle: {
        //flex: 0.5,
        height:40,
        backgroundColor: "black",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    containerList: {
        //flex: 5,
        height:430,
        backgroundColor: "white",
        //position:"absolute"
        marginTop:0
        
    },
    txtMiddle: {
        fontSize: 20,
        color: "white",
        fontWeight: "700"

    },
    containerColuna: {
        flex: 1,
        flexDirection: "row"
    },
    containerEsq: {
        flex: 1,
        //backgroundColor: "red",
        alignItems:"center",
        justifyContent:"center"
    },
    containerDir: {
        flex: 1.5,
        //backgroundColor: "yellow",
        //alignItems:"center",
        //justifyContent:"center"
    },
    containerReceita: {
        flex: 1,
        
        //backgroundColor: "grey",
        alignItems:"center",
        justifyContent:"center"
    },
    containerDespesa: {
        flex: 1,
        //backgroundColor: "pink",
        alignItems:"center",
        justifyContent:"center"
    },
    txtInputDespesas:{
        width: '90%',
        height: 70,
        borderRadius: 15,
        fontSize: 20,
        borderWidth: 2,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:"indianred",
        borderWidth:0,
        textAlign:"center",
        fontSize:30
    },
    txtInputReceita:{
        width: '90%',
        height: 70,
        borderRadius: 15,
        fontSize: 20,
        borderWidth: 2,
        marginTop: 15,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:"lightgreen",
        borderWidth:0,
        textAlign:"center",
        fontSize:30
    },
    btnIserir:{
        width:80,
        height:80,
    },



})

export default styles;