import { Feather } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { type Todo } from '../../../types/todo'
import CircleButton from '../../components/circle_button'
import { auth, db } from '../../config'
// import { ScrollView } from 'react-native-gesture-handler'
 
const handlePress = (id:string): void => {
    router.push({pathname: '/todo/edit', params: {id}})
}

const Detail = () :JSX.Element=> {
    const id = String(useLocalSearchParams().id)
    console.log('id@detail',id)
    
    const[todo,setTodo]=useState<Todo | null>(null)
    useEffect(() =>{
        if(auth.currentUser===null){return}
        const ref =doc(db,'user/$(auth.currentUser.uid)/todos',String(id))
        const unsubscribe=onSnapshot(ref,(todoDoc)=>{
            console.log(todoDoc.data())
            const{bodyText,updatedAt}=todoDoc.data() as Todo
            setTodo({
                id:todoDoc.id,
                bodyText:bodyText,
                updatedAt:updatedAt
            })
        })
        

    return unsubscribe
},[])

    // const router = useRouter();
    // const handlePress = (): void => {
    //     router.back();
    // };
 
 
    return (
 
        <View style={styles.container}>
       
            {/* <Header /> */}
            <View style={styles.todoHeader}>
                <Text style={styles.todoTitle}>{todo?.bodyText}</Text>
                <Text style={styles.todoDate}>{todo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
 
            </View>
            <View>
                <Text style={styles.todoBody}>
                   {todo?.bodyText}
                </Text>
            </View>    
            {/* <CircleButton onPress={()=>{handlePress(id) }} style={{top: 160, bottom: 'auto'}}>
                <Feather name='edit-2' size={40} color="#ffffff" />
                {console.log('edit',bodyText)}
            </CircleButton> */}
            <CircleButton onPress={() => {handlePress(id);
            console.log('edit', bodyText);
    }} 
    style={{ top: 160, bottom: 'auto' }}>
    <Feather name='edit-2' size={40} color="#ffffff" />
</CircleButton>

                   
        </View>
 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // backgroundColor: 'pink'
    },
    todoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
 
    },
    todoTitle:{
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    todoDate:{
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    todoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    todoText:{
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
 
 
})
 
export default Detail
