import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, onToggleComplete, onDelete }) => (
  <ListItem>
    <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
    <ListItemText primary={task.title} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
    <IconButton edge="end" onClick={() => onDelete(task.id)}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

export default TaskItem;