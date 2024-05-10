import { ConflictException, HttpException, HttpStatus } from "@nestjs/common";

export class Http500 {
  static throw(error: any) {
    // console.log(error);
    if (error.code === 11000) {
      throw new ConflictException(  {
        statusCode: 409,
        message: 'User with this email already exists',
        error: "E11000  Error detected || User with this email already exists"
      });
    } 
    throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
