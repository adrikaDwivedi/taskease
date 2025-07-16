import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './Styles'

const FAB = ({ onPress }) => (
  <TouchableOpacity style={styles.fab} onPress={onPress}>
    <FontAwesome name="plus" size={26} color="#fff" />
  </TouchableOpacity>
)

export default FAB
