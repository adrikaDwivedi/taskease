import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'

const FilterBar = ({ filter, setFilter, getPriorityColor }) => (
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
)

export default FilterBar
