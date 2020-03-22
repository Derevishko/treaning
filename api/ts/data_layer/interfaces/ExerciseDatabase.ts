import { XOR } from 'ts-xor';

abstract class ExerciseDatabase {
  public abstract get(id: App.IdType): Promise<App.Exercise.Exercise>
  public abstract getList(): Promise<Array<App.Exercise.Exercise>>
  public abstract create(data: App.Exercise.ExerciseData): Promise<App.IdType>
  public abstract update(id: App.IdType, data: App.Exercise.ExerciseData): Promise<App.Exercise.Exercise>
  public abstract delete(id: App.IdType): Promise<boolean>
}

export default ExerciseDatabase;