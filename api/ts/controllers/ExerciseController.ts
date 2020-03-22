import ExerciseDatabase from '../data_layer/interfaces/ExerciseDatabase';

class ExerciseController {
  private database: ExerciseDatabase;
  constructor(database) {
    this.database = database;
  }

  public get(id: App.IdType): Promise<App.Exercise.Exercise> {
    return this.database.get(id);
  }

  public getList(): Promise<Array<App.Exercise.Exercise>> {
    return this.database.getList();
  }

  public create(data: App.Exercise.ExerciseData): Promise<App.IdType> {
    return this.database.create(data);
  }

  public update(id: App.IdType, data: App.Exercise.ExerciseData): Promise<void> {
    this.database.update(id, data);
    return;
  }
  
  public delete(id: App.IdType): Promise<void> {
    this.database.delete(id);
    return;
  }
}

export default ExerciseController;