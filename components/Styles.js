import { StyleSheet } from 'react-native'

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
    flex: 1,
  },
  searchbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: { 
    marginRight: 8,
  },
  searchInput: { 
    flex: 1, 
    fontSize: 16,
  },
  dateText: { 
    color: '#fff', 
    fontSize: 16, 
    marginTop: 20,
    fontWeight: 'bold',
  },
  mytask: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
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
    fontWeight: '500',
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
  taskContent: { 
    flex: 1,
  },
  taskText: { 
    fontSize: 18, 
    fontWeight: '600',
    color: '#333',
  },
  priorityText: {
    fontSize: 12,
    fontStyle: 'italic', 
    color: '#333',
  },
  iconRow: { 
    flexDirection: 'row',
  },
  iconBtn: {
    marginLeft: 12,
  },
  dots: {
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
    marginBottom: 15,
  },
  modalSubtitle: {
    fontSize: 16, 
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  priorityContainer: {
    marginBottom: 15,
  },
  priorityLabel: {
    fontSize: 16, 
    marginBottom: 8,
  },
  priorityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 14,
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
    fontWeight: '600',
  },
  closeText: {
    color: '#148c7c', 
    textAlign: 'center', 
    marginTop: 8,
  },
})

export default styles
