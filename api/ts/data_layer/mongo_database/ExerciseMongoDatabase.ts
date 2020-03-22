import ExerciseDatabase from '../interfaces/ExerciseDatabase';
import {model} from 'mongoose';
import { Exercise } from './schemas/Schema';

const ExerciseModel =  model('Exercise', Exercise);
const exerciseModel = new ExerciseModel();
exerciseModel.save();

class ExerciseMongoDatabase extends ExerciseDatabase {
  public async get(id: App.IdType): Promise<App.Exercise.Exercise> {
    // @ts-ignore
    return await ExerciseModel.findById(id);
  }
  public async getList(): Promise<Array<App.Exercise.Exercise>> {
    // @ts-ignore
    return await ExerciseModel.find();
  }
  public async create(data: App.Exercise.ExerciseData): Promise<App.IdType> {
    return (await ExerciseModel.create(data))._id;
  }
  public async update(id: App.IdType, data: App.Exercise.ExerciseData): Promise<App.Exercise.Exercise> {
    // @ts-ignore
    return await ExerciseModel.findByIdAndUpdate(id, data);
  }
  public async delete(id: App.IdType): Promise<boolean> {
    await ExerciseModel.findByIdAndDelete(id);
    return true;
  }
}

export default ExerciseMongoDatabase;