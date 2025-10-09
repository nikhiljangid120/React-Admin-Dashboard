import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { tasksData } from '../data/MockData';

const Kanban = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [filter, setFilter] = useState('all');

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  const addTask = () => {
    if (newTask.title) {
      const newTaskObj = { id: Date.now().toString(), ...newTask };
      setTasks({
        ...tasks,
        todo: {
          ...tasks.todo,
          items: [...tasks.todo.items, newTaskObj],
        },
      });
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="page-content">
      <h1 className="kanban-heading">Kanban Board</h1>

      <div className="task-form">
        <h3>Add New Task</h3>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-dropdown"
      >
        <option value="all">All Tasks</option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.entries(tasks)
            .filter(([columnId]) => filter === 'all' || columnId === filter)
            .map(([columnId, column]) => (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    className="kanban-column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h3>{column.name}</h3>
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`kanban-card ${snapshot.isDragging ? 'dragging' : ''}`}
                          >
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;