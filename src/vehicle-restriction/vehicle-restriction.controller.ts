import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleRestrictionService } from './vehicle-restriction.service';
import { CreateVehicleRestrictionDto } from './dto/create-vehicle-restriction.dto';
import { UpdateVehicleRestrictionDto } from './dto/update-vehicle-restriction.dto';

@Controller('vehicle-restriction')
export class VehicleRestrictionController {
  constructor(private readonly vehicleRestrictionService: VehicleRestrictionService) { }

  @Post()
  create(@Body() createVehicleRestrictionDto: CreateVehicleRestrictionDto) {
    return this.vehicleRestrictionService.create(createVehicleRestrictionDto);
  }

  @Get()
  findAll() {
    return this.vehicleRestrictionService.findAll();
  }

  @Get(':licensePlate')
  findOne(@Param('licensePlate') licensePlate: string) {
    return this.vehicleRestrictionService.findOne(licensePlate);
  }

}
