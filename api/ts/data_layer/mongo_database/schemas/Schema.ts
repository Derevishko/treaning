import {Schema} from 'mongoose';

export const Exercise = new Schema({
  name: String
});

Exercise.query.byId = (id) => {
  console.log("byid", id)
  return this.where({_id: id});
}

