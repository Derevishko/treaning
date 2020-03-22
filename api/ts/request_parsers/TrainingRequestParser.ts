import RequestParser from "./RequestParser";
import { XOR } from 'ts-xor';

class TrainingRequestParser extends RequestParser {
  public get(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    return {
      status: true,
      body,
      query,
      params,
    };
  }
  public create(req: any): XOR<App.RequestParser.SuccessResult<App.Training.TrainingData>, App.RequestParser.FailedResult> {
    const {body, query, params} = req;
    return {
      status: true,
      body,
      query,
      params,
    };
  }
  public update(req: any): XOR<App.RequestParser.SuccessResult<App.Training.TrainingData, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
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

export default TrainingRequestParser;