import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleRestrictionDto } from './dto/create-vehicle-restriction.dto';
import { VehicleRestrictionRecord } from './interfaces/vehicle-restriction-record.interface.ts';
import { PicoYPlacaRule } from './domain/pico-y-placa.rule';

@Injectable()
export class VehicleRestrictionService {

  private readonly records: VehicleRestrictionRecord[] = [];

  constructor(private readonly picoYPlacaRule: PicoYPlacaRule) { }

  create(createVehicleRestrictionDto: CreateVehicleRestrictionDto): VehicleRestrictionRecord {

    if (!this.picoYPlacaRule.canCirculate(createVehicleRestrictionDto)) {
      throw new BadRequestException('El vehículo no puede circular debido a la restricción de pico y placa')
    }

    const record: VehicleRestrictionRecord = {
      licensePlate: createVehicleRestrictionDto.licensePlate,
      date: createVehicleRestrictionDto.date,
      time: createVehicleRestrictionDto.time
    }

    this.records.push(record);
    return record;
  }

  findAll(): VehicleRestrictionRecord[] {
    return this.records;
  }

  findOne(licensePlate: string): VehicleRestrictionRecord {
    const record = this.records.find(record => record.licensePlate === licensePlate);

    if (!record) {
      throw new NotFoundException(`No se encontró ningún registro con la placa ${licensePlate}`);
    }
    return record;
  }

}
