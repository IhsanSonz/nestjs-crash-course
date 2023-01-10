import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('ValidateCreateUserPipe triggered');
    console.log(value);
    console.log(value.age);
    console.log(metadata);

    if (isNaN(value.age)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${value.age} is a number. Returning...`);
    return { ...value, age: parseInt(value.age.toString()) };
  }
}
