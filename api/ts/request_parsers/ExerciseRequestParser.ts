import RequestParser from "./RequestParser";
import { XOR } from 'ts-xor';

class ExerciseRequestParser extends RequestParser {
  public get(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: number }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: null,
      query: null,
      params: {
        id: 1
      }
    };
  }
  public create(req: any): XOR<App.RequestParser.SuccessResult<{ name: string }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: {
        name: "test"
      },
      query: null,
      params: null,
    };
  }
  public update(req: any): XOR<App.RequestParser.SuccessResult<{ name: string }, null, { id: number }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: {
        name: "test"
      },
      query: null,
      params: {
        id: 1
      },
    };
  }

  public delete(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: number }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: null,
      query: null,
      params: {
        id: 1
      },
    };
  }
}

export default ExerciseRequestParser;