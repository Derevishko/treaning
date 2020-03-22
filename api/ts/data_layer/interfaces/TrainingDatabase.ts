abstract class TrainingDatabase {
  public abstract get(id: App.IdType): Promise<App.Training.Training>
  public abstract getList(): Promise<Array<App.Training.Training>>
  public abstract create(data: App.Training.TrainingData): Promise<App.IdType>
  public abstract update(id: App.IdType, data: App.Training.TrainingData): Promise<void>
  public abstract delete(id: App.IdType): Promise<void>
}

export default TrainingDatabase;