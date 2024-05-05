import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  Length,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class create_task {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true, maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  description: string;

  @ApiProperty({ required: false, type: 'string', format: 'binary' })
  @IsOptional()
  image: Express.Multer.File;

  @ApiProperty({ required: true, type: Date })
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ required: true, type: Date })
  @IsNotEmpty()
  endDate: Date;
}
