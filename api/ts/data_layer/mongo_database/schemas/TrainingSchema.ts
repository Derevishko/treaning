import {Schema} from 'mongoose';

export default new Schema({
  date: { type: Date, default: Date.now },
  exercises: [
    {
      id: String,
      approaches: [
        {
          weight: Number,
          count: Number
        }
      ]
    }
  ]

});
