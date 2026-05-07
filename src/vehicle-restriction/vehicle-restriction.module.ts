import { Module } from '@nestjs/common';
import { VehicleRestrictionService } from './vehicle-restriction.service';
import { VehicleRestrictionController } from './vehicle-restriction.controller';
import { PicoYPlacaRule } from './domain/pico-y-placa.rule';

@Module({
  controllers: [VehicleRestrictionController],
  providers: [VehicleRestrictionService, PicoYPlacaRule],
})
export class VehicleRestrictionModule { }
