import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox, 
  IconButton,
  Card,
  CardContent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [stats, setStats] = useState({ total: 0, completed: 0 });

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks/`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats/`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const addTask = async () => {
    if (!newTaskTitle.trim()) return;
    try {
      const response = await axios.post(`${API_URL}/tasks/`, { title: newTaskTitle });
      setTasks([...tasks, response.data]);
      setNewTaskTitle('');
      fetchStats();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (taskId) => {
    try {
      const response = await axios.post(`${API_URL}/tasks/${taskId}/toggle/`);
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
      fetchStats();
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}/`);
      setTasks(tasks.filter(task => task.id !== taskId));
      fetchStats();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Task Manager
      </Typography>
      <Card>
        <CardContent>
          <TextField
            fullWidth
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="New task title"
            margin="normal"
          />
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            onClick={addTask}
          >
            Add Task
          </Button>
          <List>
            {tasks.map(task => (
              <ListItem key={task.id} disablePadding>
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <ListItemText 
                  primary={task.title} 
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                />
                <IconButton edge="end" onClick={() => deleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Typography variant="body2" color="textSecondary">
            Total tasks: {stats.total}, Completed: {stats.completed}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;