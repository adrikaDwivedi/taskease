import { View, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './Styles'

const Header = ({ dateString }) => (
  <View style={styles.header}>
    <View style={styles.leftSection}>
      <View style={styles.searchbar}>
        <FontAwesome name="search" size={30} color="#aaa" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#999" />
      </View>
      <Text style={{ color: 'white', fontSize: 15, marginTop: 12 }}>Today :</Text>
      <Text style={styles.dateText}>{dateString}</Text>
    </View>
    <MaterialCommunityIcons name="dots-horizontal" size={40} color="#fff" style={styles.dots} />
  </View>
)

export default Header
