declare namespace App {
  export type IdType = number;
  export namespace Exercise {
    interface Exercise {
      name: string;
    }
  }
  export namespace Database {
    interface SuccessResponse<T = null> {
      status: true,
      data: T;
    }
    interface FailedResponse {
      status: false,
      error: string,
    }
  }
  export namespace RequestParser {
    interface SuccessResult<body = null, query = null, params = null> {
      status: true,
      body: body,
      query: query,
      params: params,
    }
    interface FailedResult {
      status: false,
      error: string,
    }
  }

}