class apiErrors extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if(stack){
      this.stack = stack;
    } else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
} 
export { apiErrors };

//Error is the class already provided in javascript. We are extending it to create our custom error class.
//We are passing the status code, message, errors, and stack trace to the constructor.
//We are setting the default values for message and errors.
//We are setting the default value for success to false.
//We are capturing the stack trace if it is not provided.   