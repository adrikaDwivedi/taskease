import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'

const HomePage = () => {
  const today = new Date()
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [viewModalVisible, setViewModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [filter, setFilter] = useState('All')

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') return
    setTasks([...tasks, { title, description, priority }])
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setModalVisible(false)
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const handleEditTask = () => {
    if (title.trim() === '' || description.trim() === '') return
    const updatedTasks = [...tasks]
    updatedTasks[editIndex] = { title, description, priority }
    setTasks(updatedTasks)
    setEditModalVisible(false)
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setEditIndex(null)
  }

  const startEditTask = (task, index) => {
    setTitle(task.title)
    setDescription(task.description)
    setPriority(task.priority)
    setEditIndex(index)
    setEditModalVisible(true)
  }

  const openTask = (task) => {
    setSelectedTask(task)
    setViewModalVisible(true)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#f4afb4'
      case 'Medium':
        return '#f79256'
      case 'Low':
        return '#809bce'
      default:
        return '#f1f1f1'
    }
  }

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((t) => t.priority === filter)

  const renderModalContent = (isEdit = false) => (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>{isEdit ? 'Edit Task' : 'Add New Task'}</Text>
      <TextInput
        style={styles.modalInput}
        placeholder="Task title..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.modalInput, { height: 80 }]}
        placeholder="Task description..."
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <View style={styles.priorityContainer}>
        <Text style={styles.priorityLabel}>Priority:</Text>
        <View style={styles.priorityButtons}>
          {['Low', 'Medium', 'High'].map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.priorityButton,
                priority === p && styles.priorityButtonSelected,
                {
                  backgroundColor: priority === p ? getPriorityColor(p) : '#eee',
                },
              ]}
              onPress={() => setPriority(p)}
            >
              <Text style={styles.priorityButtonText}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.modalButton}
        onPress={isEdit ? handleEditTask : handleAddTask}
      >
        <Text style={styles.modalButtonText}>{isEdit ? 'Save' : 'Add'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          isEdit ? setEditModalVisible(false) : setModalVisible(false)
        }}
      >
        <Text style={styles.closeText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <View style={styles.searchbar}>
            <FontAwesome name="search" size={30} color="#aaa" style={styles.icon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
            />
          </View>
          <Text style={{color: 'white', fontSize: 15}}>Today :</Text>
          <Text style={styles.dateText}>{dateString}</Text>
        </View>
        <MaterialCommunityIcons name="dots-horizontal" size={40} color="#fff" style={styles.dots} />
      </View>

      <Text style={styles.mytask}>My Tasks</Text>

      {/* Filter Buttons */}
      <View style={styles.filterBar}>
        {['All', 'Low', 'Medium', 'High'].map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={[
              styles.filterBtn,
              filter === f && { backgroundColor: getPriorityColor(f) || '#ccc' },
            ]}
          >
            <Text style={styles.filterText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openTask(item)}>
            <View
              style={[
                styles.taskItem,
                { backgroundColor: getPriorityColor(item.priority) },
              ]}
            >
              <View style={styles.taskContent}>
                <Text style={styles.taskText}>{item.title}</Text>
                <Text style={styles.priorityText}>{item.priority} Priority</Text>
              </View>
              <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => startEditTask(item, index)}>
                  <FontAwesome
                    name="pencil"
                    size={20}
                    color="black"
                    style={styles.iconBtn}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                  <FontAwesome
                    name="trash"
                    size={20}
                    color="#148c7c"
                    style={styles.iconBtn}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={26} color="#fff" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>{renderModalContent(false)}</View>
      </Modal>

      <Modal visible={editModalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>{renderModalContent(true)}</View>
      </Modal>

      <Modal visible={viewModalVisible} animationType="fade" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedTask?.title}</Text>
            <Text style={styles.modalSubtitle}>
              Priority:{' '}
              <Text style={{ color: getPriorityColor(selectedTask?.priority) }}>
                {selectedTask?.priority}
              </Text>
            </Text>
            <ScrollView style={{ maxHeight: 200 }}>
              <Text style={{ fontSize: 16, color: '#333' }}>
                {selectedTask?.description}
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setViewModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f6f6f6',
   },
  header: {
    backgroundColor: '#148c7c',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: { 
    flex: 1
   },
  searchbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  icon: { 
    marginRight: 8,
   },
  searchInput: { 
    flex: 1, 
    fontSize: 16
   },
  dateText: { 
    color: '#fff', 
    fontSize: 16, 
    marginTop: 10,
     fontWeight: 'bold'
   },
  mytask: {
     fontSize: 22,
     fontWeight: 'bold',
      margin: 20 
    },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 25,
    marginBottom: 10,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#ddd',
  },
  filterText: { 
    fontSize: 14,
     fontWeight: '500'
     },
  taskItem: {
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  taskContent: { flex: 1 },
  taskText: { 
    fontSize: 18, 
    fontWeight: '600',
     color: '#333'
     },
  priorityText: {
     fontSize: 12,
     fontStyle: 'italic', 
     color: '#333' 
    },
  iconRow: { 
    flexDirection: 'row'
   },
  iconBtn: {
     marginLeft: 12
     },
     dots:{
      marginTop: 15,
      marginRight: 12,
      marginLeft: 12,

     },
  fab: {
    backgroundColor: '#148c7c',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: { 
    fontSize: 20,
     fontWeight: 'bold',
      marginBottom: 15
     },
  modalSubtitle: {
     fontSize: 16, 
     marginBottom: 10
     },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  priorityContainer: {
     marginBottom: 15
     },
  priorityLabel: {
     fontSize: 16, 
     marginBottom: 8
     },
  priorityButtons: {
     flexDirection: 'row',
      justifyContent: 'space-between'
     },
  priorityButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  priorityButtonSelected: {
    borderColor: '#444',
  },
  priorityButtonText: { 
    fontSize: 14
   },
  modalButton: {
    backgroundColor: '#148c7c',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: { 
    color: '#fff', 
    fontWeight: '600'
   },
  closeText: {
    color: '#148c7c', 
    textAlign: 'center', 
    marginTop: 8 
  },
})
