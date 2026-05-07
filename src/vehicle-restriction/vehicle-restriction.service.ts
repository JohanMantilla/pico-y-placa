import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleRestrictionDto } from './dto/create-vehicle-restriction.dto';
import { UpdateVehicleRestrictionDto } from './dto/update-vehicle-restriction.dto';
import { VehicleRestrictionRecord } from './interfaces/vehicle-restriction-record.interface.ts';
import { DAY_NAMES, RESTRICTED_DIGITS_BY_DAY } from './constants/pico-y-placa.constants';

@Injectable()
export class VehicleRestrictionService {

  private readonly records: VehicleRestrictionRecord[] = [];

  create(createVehicleRestrictionDto: CreateVehicleRestrictionDto): VehicleRestrictionRecord {

    const canCirculateVehicle = this.canCirculateVehicle(
      createVehicleRestrictionDto
    );

    if (!canCirculateVehicle) {
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

  private canCirculateVehicle(createVehicleRestrictionDto) {

    const lastDigit = createVehicleRestrictionDto.licensePlate.slice(-1);
    const lastDigitAsNumber = this.convertStringToInteger(lastDigit);

    const date = this.convertStringToDate(createVehicleRestrictionDto.date);
    const currentDay = DAY_NAMES[date.getDay()];

    const restrictedDigits = RESTRICTED_DIGITS_BY_DAY[currentDay];

    // TODO: AQUI se valida la restriccion del día 
    const isRestricted = restrictedDigits.includes(lastDigitAsNumber);
    console.log(isRestricted);

    const time = this.canCirculateVehicleByHour(createVehicleRestrictionDto.time);
    console.log(time);

    if (isRestricted && time) {
      return false;
    }

    return true;
  }

  private convertStringToInteger(lastDigit) {
    return parseInt(lastDigit);
  }

  private convertStringToDate(date): Date {
    return new Date(date + 'T00:00:00');
  }

  private canCirculateVehicleByHour(time): boolean {

    const timeList = time.split(":");

    const hour = this.convertStringToInteger(timeList[0]);
    const minute = this.convertStringToInteger(timeList[1]);

    const timeToMinutes = (hour * 60) + minute;
    console.log(timeToMinutes);

    return (timeToMinutes >= 420 && timeToMinutes <= 570) || (timeToMinutes >= 960 && timeToMinutes <= 1170);
  }


}
