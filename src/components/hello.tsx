import { StyleSheet, Text, View } from "react-native";

interface Props{
    children:string
    bang?:boolean
}

const hello=(props:Props):JSX.Element=>{
    // const children =props.children
    const{children,bang}=props
    return(
        <View>
        <Text style={styles.text}>
        Hello{children}{bang ?'!':''}
        </Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff45',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text:{
        color:'#a4565',
       backgroundColor:'orange',
        fontSize:150,
        fontWeight:'bold',
        padding:16
    }
  });
  
export default hello
