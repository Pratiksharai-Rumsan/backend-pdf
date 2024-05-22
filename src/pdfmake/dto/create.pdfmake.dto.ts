import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePdfDto {
  @IsString()
  name: string;
  @IsString()
  location: string;
  @IsString()
  dob: string;

  @IsOptional()
  @IsString()
  email?: string;
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  bloodGroup?: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  orgName: string;
}
