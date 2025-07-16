import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles'

const TaskModal = ({
  isEdit,
  title,
  description,
  priority,
  setTitle,
  setDescription,
  setPriority,
  handleEditTask,
  handleAddTask,
  setEditModalVisible,
  setModalVisible,
  getPriorityColor
}) => (
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
              { backgroundColor: priority === p ? getPriorityColor(p) : '#eee' },
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
      onPress={() => (isEdit ? setEditModalVisible(false) : setModalVisible(false))}
    >
      <Text style={styles.closeText}>Cancel</Text>
    </TouchableOpacity>
  </View>
)

export default TaskModal
