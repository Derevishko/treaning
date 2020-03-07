import ExerciseDatabase from "../data_layer/interfaces/ExerciseDatabase";

class ExerciseController {
  private database: ExerciseDatabase;
  constructor(database) {
    this.database = database;
  }

  public get(id: App.IdType): App.Exercise.Exercise {
    const response = this.database.get(id);
    if (response.status) {
      return response.data;
    } 
    throw new Error(response.error);
  }
  public getList(): Array<App.Exercise.Exercise> {
    console.log(this)
    const response = this.database.getList();
    if (response.status) {
      return response.data;
    } 
    throw new Error(response.error);
  }
  public create(data: App.Exercise.Exercise): App.IdType {
    const response = this.database.create(data);
    if (response.status) {
      return response.data;
    } 
    throw new Error(response.error);
  }
  public update(id: App.IdType, data: App.Exercise.Exercise): void {
    const response = this.database.update(id, data);
    if (!response.status) {
      throw new Error(response.error);
    } 
  }
  public delete(id: App.IdType): void {
    const response = this.database.delete(id);
    if (!response.status) {
      throw new Error(response.error);
    } 
  }
}

export default ExerciseController;