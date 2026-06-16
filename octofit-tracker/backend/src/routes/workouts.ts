import { Router, Request, Response } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

// Get all workouts
router.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().populate('userId', 'username email');
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// Get workouts by user ID
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId }).populate('userId', 'username email');
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user workouts' });
  }
});

// Get workout by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('userId', 'username email');
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workout' });
  }
});

// Create new workout
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, title, description, duration, calories, exercises, date } = req.body;

    // Validation
    if (!userId || !title || !duration) {
      return res.status(400).json({ error: 'userId, title, and duration are required' });
    }

    const newWorkout = new Workout({
      userId,
      title,
      description,
      duration,
      calories,
      exercises,
      date,
    });

    const savedWorkout = await newWorkout.save();
    await savedWorkout.populate('userId', 'username email');
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create workout' });
  }
});

// Update workout
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { title, description, duration, calories, exercises, date } = req.body;
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { title, description, duration, calories, exercises, date },
      { new: true, runValidators: true }
    ).populate('userId', 'username email');

    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

// Delete workout
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

export default router;
