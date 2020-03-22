import TrainingDatabase from '../data_layer/interfaces/TrainingDatabase';

class TrainingController {
  private database: TrainingDatabase;
  constructor(database) {
    this.database = database;
  }

  public async get(id: App.IdType): Promise<App.Training.Training> {
    return await this.database.get(id);
  }

  public async getList(): Promise<Array<App.Training.Training>> {
    return await this.database.getList();
  }

  public async create(data: App.Training.TrainingData): Promise<App.IdType> {
    return await this.database.create(data);
  }

  public async update(id: App.IdType, data: App.Training.TrainingData): Promise<void> {
    await this.database.update(id, data);
    return 
  }

  public async delete(id: App.IdType): Promise<void> {
    await this.database.delete(id);
    return
  }
}

export default TrainingController;