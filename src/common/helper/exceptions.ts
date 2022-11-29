class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

class DataBaseConnectionError extends CustomError {
  private static message: string = "db connection error";
  constructor() {
    super(DataBaseConnectionError.message, 500);
  }
}

class NotFound extends CustomError {
  private static message: string = "not found";
  constructor(entity: string) {
    super(`${entity} ${NotFound.message}`, 404);
  }
}

class WrongContent extends CustomError {
  constructor(message: string) {
    super(message, 404);
  }
}

class EmailExists extends CustomError {
  private static message: string = "email already exists";
  constructor() {
    super(EmailExists.message, 404);
  }
}

class NotRegistered extends CustomError {
  private static message: string = "email is not registered";
  constructor() {
    super(NotRegistered.message, 404);
  }
}

class Unauthorized extends CustomError {
  private static message: string = "unauthorized";
  constructor() {
    super(Unauthorized.message, 404);
  }
}

export {
  DataBaseConnectionError,
  NotFound,
  WrongContent,
  EmailExists,
  NotRegistered,
  Unauthorized,
  CustomError,
};
