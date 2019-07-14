import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Event', EventSchema);