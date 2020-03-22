import RequestParser from "./RequestParser";
import { XOR } from 'ts-xor';

class ExerciseRequestParser extends RequestParser {
  public get(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    return {
      status: true,
      body,
      query,
      params,
    };
  }
  public create(req: any): XOR<App.RequestParser.SuccessResult<App.Exercise.ExerciseData>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    console.log(req.body)
    return {
      status: true,
      body,
      query,
      params,
    };
  }
  public update(req: any): XOR<App.RequestParser.SuccessResult<App.Exercise.ExerciseData, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    return {
      status: true,
      body,
      query,
      params,
    };
  }

  public delete(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    return {
      status: true,
      body,
      query,
      params,
    };
  }
}

export default ExerciseRequestParser;