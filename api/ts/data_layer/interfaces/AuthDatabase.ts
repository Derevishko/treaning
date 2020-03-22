import { XOR } from 'ts-xor';

abstract class ExerciseDatabase {
  public abstract signin(id: App.IdType): XOR<App.Database.SuccessResponse<App.Exercise.Exercise>, App.Database.FailedResponse>
  public abstract signup(): XOR<App.Database.SuccessResponse<Array<App.Exercise.Exercise>>, App.Database.FailedResponse>
  public abstract refresh(data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse<App.IdType>, App.Database.FailedResponse>
  public abstract changePassword(id: App.IdType, data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
  public abstract dropPassword(id: App.IdType): XOR<App.Database.SuccessResponse, App.Database.FailedResponse>
}

export default ExerciseDatabase;