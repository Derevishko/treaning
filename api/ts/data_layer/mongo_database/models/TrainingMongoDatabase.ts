import TrainingDatabase from "../../interfaces/TrainingDatabase";
import {model} from 'mongoose';
import TrainingSchema from '../schemas/TrainingSchema';

const TrainingModel = model('Training', TrainingSchema);


class TrainingMongoDatabase extends TrainingDatabase {
  public async get(id: string): Promise<App.Training.Training> {
    // @ts-ignore
    return await TrainingModel.findById(id);
  }

  public async getList(): Promise<Array<App.Training.Training>> {
    // @ts-ignore
    return await TrainingModel.find();
  }

  public async create(data: App.Training.TrainingData): Promise<string> {
    return (await TrainingModel.create(data))._id;

  }

  public async update(id: string, data: App.Training.TrainingData) {
    await TrainingModel.findByIdAndUpdate(id, data);
    return 
  }

  public async delete(id: string) {
    await TrainingModel.findByIdAndDelete(id);
    return 
  }
}

export default TrainingMongoDatabase;