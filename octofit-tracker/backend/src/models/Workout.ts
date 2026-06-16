import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IWorkout extends Document {
  userId: Types.ObjectId;
  title: string;
  description: string;
  duration: number; // in minutes
  calories: number;
  exercises: string[];
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      default: 0,
    },
    exercises: [{
      type: String,
    }],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
