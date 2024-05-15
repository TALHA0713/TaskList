import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  Length,
  ArrayMaxSize,
  ArrayMinSize,
} from 'class-validator';

export class create_task {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  tittle: string;

  @ApiProperty({ required: true, maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  startDate: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  endDate: string;

 
  @ApiProperty({ required: true})
  @IsNotEmpty()
  users:string;
}
