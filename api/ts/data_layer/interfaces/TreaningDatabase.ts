import { XOR } from 'ts-xor';

abstract class TreaningDatabase {
  public abstract get(id: App.IdType): XOR<App.Database.SuccessResponse<App.Treaning.Treaning>, App.Database.FailedResponse>
  public abstract getList(): XOR<App.Database.SuccessResponse<Array<App.Treaning.Treaning>>, App.Database.FailedResponse>
  public abstract create(data: App.Treaning.TreaningData): XOR<App.Database.SuccessResponse<App.IdType>, App.Database.FailedResponse>
  public abstract update(id: App.IdType, data: App.Treaning.TreaningData): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
  public abstract delete(id: App.IdType): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
}

export default TreaningDatabase;