import RequestParser from "./RequestParser";
import { XOR } from 'ts-xor';

class TreaningRequestParser extends RequestParser {
  public get(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: null,
      query: null,
      params: {
        id: 1
      }
    };
  }
  public create(req: any): XOR<App.RequestParser.SuccessResult<App.Treaning.TreaningData>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: {
        name: "test",
        exercises: []
      },
      query: null,
      params: null,
    };
  }
  public update(req: any): XOR<App.RequestParser.SuccessResult<App.Treaning.TreaningData, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
    return {
      status: true,
      body: {
        name: "test",
        exercises: []
      },
      query: null,
      params: {
        id: 1
      },
    };
  }

  public delete(req: any): XOR<App.RequestParser.SuccessResult<null, null, { id: App.IdType }>, App.RequestParser.FailedResult> {
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

export default TreaningRequestParser;