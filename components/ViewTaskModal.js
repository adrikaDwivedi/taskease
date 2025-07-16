import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './Styles'

const ViewTaskModal = ({ selectedTask, setViewModalVisible, getPriorityColor }) => (
  <View style={styles.modalContainer}>
    <Text style={styles.modalTitle}>{selectedTask?.title}</Text>
    <Text style={styles.modalSubtitle}>
      Priority: <Text style={{ color: getPriorityColor(selectedTask?.priority) }}>{selectedTask?.priority}</Text>
    </Text>
    <ScrollView style={{ maxHeight: 200 }}>
      <Text style={{ fontSize: 16, color: '#333' }}>{selectedTask?.description}</Text>
    </ScrollView>
    <TouchableOpacity onPress={() => setViewModalVisible(false)}>
      <Text style={styles.closeText}>Close</Text>
    </TouchableOpacity>
  </View>
)

export default ViewTaskModal
