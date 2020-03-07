import {XOR} from 'ts-xor';
import ExerciseDatabase from "../interfaces/ExerciseDatabase";

class ExerciseStaticDatabase extends ExerciseDatabase {
  public get(id: App.IdType): XOR<App.Database.SuccessResponse<App.Exercise.Exercise>, App.Database.FailedResponse> {
    return {
      status: true,
      data: {
        name: "test"
      }
    }
  }
  public getList(): XOR<App.Database.SuccessResponse<Array<App.Exercise.Exercise>>, App.Database.FailedResponse> {
    return {
      status: true,
      data: [{
        name: "test"
      }]
    }
  }
  public create(data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse<App.IdType>, App.Database.FailedResponse> {
    return {
      status: true,
      data: 1
    }
  }
  public update(id: App.IdType, data: App.Exercise.Exercise): XOR<App.Database.SuccessResponse, App.Database.FailedResponse> {
    return {
      status: true,
      data: null
    }
  }
  public delete(id: App.IdType): XOR<App.Database.SuccessResponse, App.Database.FailedResponse> {
    return {
      status: true,
      data: null
    }
  }
} 

export default ExerciseStaticDatabase;