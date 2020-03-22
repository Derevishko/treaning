import { XOR } from 'ts-xor';
import TreaningDatabase from '../interfaces/TreaningDatabase';

class ExerciseStaticDatabase extends TreaningDatabase {
  public get(id: App.IdType): XOR<App.Database.SuccessResponse<App.Treaning.Treaning>, App.Database.FailedResponse> {
    return {
      status: true,
      data: {
        id: 1,
        name: "test",
        exercises: []
      }
    }
  }
  public getList(): XOR<App.Database.SuccessResponse<Array<App.Treaning.Treaning>>, App.Database.FailedResponse> {
    return {
      status: true,
      data: [{
        id: 1,
        name: "test",
        exercises: []
      }]
    }
  }
  public create(data: App.Treaning.TreaningData): XOR<App.Database.SuccessResponse<App.IdType>, App.Database.FailedResponse> {
    return {
      status: true,
      data: 1
    }
  }
  public update(id: App.IdType, data: App.Treaning.TreaningData): XOR<App.Database.SuccessResponse, App.Database.FailedResponse> {
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