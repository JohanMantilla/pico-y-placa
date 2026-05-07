import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleRestrictionDto } from './create-vehicle-restriction.dto';

export class UpdateVehicleRestrictionDto extends PartialType(CreateVehicleRestrictionDto) {}
