import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  FlatList
} from 'react-native';
import styles from '../components/Styles';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import TaskItem from '../components/TaskItem';
import TaskModal from '../components/TaskModal';
import ViewTaskModal from '../components/ViewTaskModal';
import FAB from '../components/FAB';
import { saveTasksToStorage, getTasksFromStorage } from '../components/Async';
import { registerForPushNotificationsAsync } from '../components/Notifications';
import * as Notifications from 'expo-notifications';

const HomePage = ({ route }) => {
  const { user } = route.params || {};
  const userEmail = user?.email;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const loadTasks = async () => {
      if (userEmail) {
        const storedTasks = await getTasksFromStorage(userEmail);
        setTasks(storedTasks);
      }
    };
    loadTasks();
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      saveTasksToStorage(tasks, userEmail);
    }
  }, [tasks, userEmail]);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') return;

    setTasks([...tasks, { title, description, priority, completed: false }]);
    setTitle('');
    setDescription('');
    setPriority('');
    setModalVisible(false);

    // Send immediate and delayed notifications
    Notifications.scheduleNotificationAsync({
      content: {
        title: "📝 New Task Added",
        body: `Title: ${title}`,
      },
      trigger: null,
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "⏰ Reminder",
        body: `Don’t forget: ${title}`,
      },
      trigger: { seconds: 10 },
    });
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = () => {
    if (title.trim() === '' || description.trim() === '') return;
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = { title, description, priority };
    setTasks(updatedTasks);
    setEditModalVisible(false);
    setTitle('');
    setDescription('');
    setPriority('');
    setEditIndex(null);
  };

  const startEditTask = (task, index) => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setEditIndex(index);
    setEditModalVisible(true);
  };

  const openTask = (task) => {
    setSelectedTask(task);
    setViewModalVisible(true);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#f4afb4';
      case 'Medium': return '#f79256';
      case 'Low': return '#809bce';
      default: return '#f1f1f1';
    }
  };

  const filteredTasks = filter === 'All'
    ? tasks
    : tasks.filter(t => t.priority === filter);

  if (!userEmail) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red' }}>User not logged in</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header dateString={dateString} />
      <Text style={styles.mytask}>My Tasks</Text>
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        getPriorityColor={getPriorityColor}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            item={item}
            index={index}
            getPriorityColor={getPriorityColor}
            openTask={openTask}
            startEditTask={startEditTask}
            handleDeleteTask={handleDeleteTask}
            toggleComplete={toggleComplete}
          />
        )}
      />

      <FAB onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <TaskModal
            isEdit={false}
            {...{
              title,
              description,
              priority,
              setTitle,
              setDescription,
              setPriority,
              handleAddTask,
              setModalVisible,
              getPriorityColor,
            }}
          />
        </View>
      </Modal>

      <Modal visible={editModalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <TaskModal
            isEdit
            {...{
              title,
              description,
              priority,
              setTitle,
              setDescription,
              setPriority,
              handleEditTask,
              setEditModalVisible,
              getPriorityColor,
            }}
          />
        </View>
      </Modal>

      <Modal visible={viewModalVisible} animationType="fade" transparent>
        <View style={styles.modalBackground}>
          <ViewTaskModal
            selectedTask={selectedTask}
            setViewModalVisible={setViewModalVisible}
            getPriorityColor={getPriorityColor}
          />
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
