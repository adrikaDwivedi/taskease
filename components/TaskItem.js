import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './Styles'

const TaskItem = ({ item, index, getPriorityColor, openTask, startEditTask, handleDeleteTask }) => (
  <TouchableOpacity onPress={() => openTask(item)}>
    <View style={[styles.taskItem, { backgroundColor: getPriorityColor(item.priority) }]}>
      <View style={styles.taskContent}>
        <Text style={styles.taskText}>{item.title}</Text>
        <Text style={styles.priorityText}>{item.priority} Priority</Text>
      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => startEditTask(item, index)}>
          <FontAwesome name="pencil" size={20} color="black" style={styles.iconBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <FontAwesome name="trash" size={20} color="#148c7c" style={styles.iconBtn} />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
)

export default TaskItem
