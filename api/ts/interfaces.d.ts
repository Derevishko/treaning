declare namespace App {
  export type IdType = string;
  export type Role = 'user' | 'admin' | 'super_admin';
  export namespace Exercise {
    interface ExerciseData {
      name: string;
    }
    interface Exercise extends ExerciseData {
      id: IdType;
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

  export namespace User {
    interface UserData {
      name: string,
      password: string,
      image: string,
      role: App.Role
    }
    interface User extends UserData {
      id: IdType
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

  export namespace Treaning {
    interface TreaningData {
      name: string,
      exercises: Array<Exercise.Exercise>
    }

    interface Treaning extends TreaningData {
      id: IdType
    }
  }

}