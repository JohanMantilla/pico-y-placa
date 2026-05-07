import { Injectable } from '@nestjs/common';
import { CreateVehicleRestrictionDto } from './dto/create-vehicle-restriction.dto';
import { UpdateVehicleRestrictionDto } from './dto/update-vehicle-restriction.dto';

@Injectable()
export class VehicleRestrictionService {
  create(createVehicleRestrictionDto: CreateVehicleRestrictionDto) {
    return 'This action adds a new vehicleRestriction';
  }

  findAll() {
    return `This action returns all vehicleRestriction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleRestriction`;
  }

  update(id: number, updateVehicleRestrictionDto: UpdateVehicleRestrictionDto) {
    return `This action updates a #${id} vehicleRestriction`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleRestriction`;
  }
}
