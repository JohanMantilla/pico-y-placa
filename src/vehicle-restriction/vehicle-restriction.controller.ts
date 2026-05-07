import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleRestrictionService } from './vehicle-restriction.service';
import { CreateVehicleRestrictionDto } from './dto/create-vehicle-restriction.dto';
import { UpdateVehicleRestrictionDto } from './dto/update-vehicle-restriction.dto';

@Controller('vehicle-restriction')
export class VehicleRestrictionController {
  constructor(private readonly vehicleRestrictionService: VehicleRestrictionService) {}

  @Post()
  create(@Body() createVehicleRestrictionDto: CreateVehicleRestrictionDto) {
    return this.vehicleRestrictionService.create(createVehicleRestrictionDto);
  }

  @Get()
  findAll() {
    return this.vehicleRestrictionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleRestrictionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleRestrictionDto: UpdateVehicleRestrictionDto) {
    return this.vehicleRestrictionService.update(+id, updateVehicleRestrictionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleRestrictionService.remove(+id);
  }
}
