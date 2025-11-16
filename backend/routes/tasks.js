const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const mongoose = require('mongoose');

// Middleware to validate MongoDB ObjectID
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid task ID format'
    });
  }
  next();
};

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const { status, priority, sort } = req.query;
    let query = {};

    if (status) query.status = status;
    if (priority) query.priority = priority;

    let tasks = Task.find(query);

    if (sort) {
      tasks = tasks.sort(sort);
    } else {
      tasks = tasks.sort({ createdAt: -1 });
    }

    const result = await tasks;
    res.json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single task
router.get('/:id', validateObjectId, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Create new task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Update task
router.put('/:id', validateObjectId, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Delete task
router.delete('/:id', validateObjectId, async (req, res) => {
  try {
    console.log('Attempting to delete task with ID:', req.params.id);
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      console.log('Task not found for deletion:', req.params.id);
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    console.log('Task deleted successfully:', req.params.id);
    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
