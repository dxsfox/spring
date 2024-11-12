// import { Link } from 'expo-router';
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const TodoListItem = (): JSX.Element => {
//     return (
//         <View style={styles.todoListItem}>
//             <Link href='/todo/detail' asChild>
//                 <TouchableOpacity style={styles.todoContent}>
//                     <View>
//                         <Text style={styles.todoListItemTitle}>Todo</Text>
//                         <Text style={styles.todoListItemDate}>2021-06-10</Text>
//                     </View>
//                 </TouchableOpacity>
//             </Link>
//             <TouchableOpacity>
//                 <Text style={styles.cross}>✗</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     todoListItem: {
//         backgroundColor: '#ffffff',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 16,
//         paddingHorizontal: 19,
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: 'rgba(0, 0, 0, 0.15)'
//     },
//     todoContent: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     todoListItemTitle: {
//         fontSize: 16,
//         lineHeight: 24
//     },
//     todoListItemDate: {
//         fontSize: 12,
//         lineHeight: 18,
//         color: '#000000'
//     },
//     cross: {
//         color: 'red',
//         fontSize: 18
//     }
// });

// export default TodoListItem;


import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 
const TodoListItem = () :JSX.Element=> {
 
    return (
        <Link href='/todo/detail' asChild>
       
            <TouchableOpacity style={styles.todoListItem}>
                <View >
                    <Text style={styles.todoListItemTitle}>未完了のTODO</Text>
                    <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text>
                </View>
                <TouchableOpacity>
                    <Text>X</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
        
        
 
    )
}
 
const styles = StyleSheet.create({
    todoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)'
 
    },
    todoListItemTitle: {
        fontSize: 16,
        lineHeight: 24
    },
    todoListItemDate: {
        fontSize: 12,
        lineHeight: 18,
        color: '#000000'
    }
    
})
  
export default TodoListItem