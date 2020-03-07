import {XOR} from 'ts-xor';

abstract class ExerciseDatabase {
  public abstract get(id: App.IdType): XOR<App.Database.SuccessResponse<App.Exercise.Exercise>, App.Database.FailedResponse>
  public abstract getList(): XOR<App.Database.SuccessResponse<Array<App.Exercise.Exercise>>, App.Database.FailedResponse>
  public abstract create(data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse<App.IdType>, App.Database.FailedResponse>
  public abstract update(id: App.IdType, data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
  public abstract delete(id: App.IdType): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
} 

export default ExerciseDatabase;