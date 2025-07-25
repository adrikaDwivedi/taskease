// components/TaskItem.js
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import { Feather } from '@expo/vector-icons'

const TaskItem = ({ item, index, getPriorityColor, openTask, startEditTask, handleDeleteTask, toggleComplete }) => {
  return (
    <View style={[styles.taskItem, { backgroundColor: getPriorityColor(item.priority) }]}>
      <Checkbox
        value={item.completed}
        onValueChange={() => toggleComplete(index)}
        color={item.completed ? '#34c759' : undefined}
        style={styles.checkbox}
      />

      <TouchableOpacity style={styles.taskTextContainer} onPress={() => openTask(item)}>
        <Text
          style={[
            styles.taskTitle,
            item.completed && styles.completedText
          ]}
        >
          {item.title}
        </Text>
        <Text style={styles.taskDesc}>{item.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => startEditTask(item, index)} style={styles.iconButton}>
        <Feather name="edit" size={18} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleDeleteTask(index)} style={styles.iconButton}>
        <Feather name="trash-2" size={18} color="#c00" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
  },
  checkbox: {
    marginRight: 10,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskDesc: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  iconButton: {
    marginLeft: 10,
  },
})

export default TaskItem
