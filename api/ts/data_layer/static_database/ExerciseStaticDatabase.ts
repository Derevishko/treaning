import {XOR} from 'ts-xor';
import ExerciseDatabase from "../interfaces/ExerciseDatabase";

class ExerciseStaticDatabase extends ExerciseDatabase {
  public async get(id: App.IdType): Promise<App.Exercise.Exercise> {
    return {
      id: 1,
      name: "test"
    }
  }
  public async getList(): Promise<Array<App.Exercise.Exercise>> {
    return [{
        id: 1,
        name: "test"
      }]
  }
  public async create(data: App.Exercise.Exercise): Promise<App.IdType> {
    return 1
  }
  public async update(id: App.IdType, data: App.Exercise.Exercise): Promise<App.Exercise.Exercise> {
    return {
      id: 1,
      name: "test"
    }
  }
  public async delete(id: App.IdType): Promise<boolean> {
    return true;
  }
} 

export default ExerciseStaticDatabase;