import { Module } from '@nestjs/common';
import { VehicleRestrictionService } from './vehicle-restriction.service';
import { VehicleRestrictionController } from './vehicle-restriction.controller';

@Module({
  controllers: [VehicleRestrictionController],
  providers: [VehicleRestrictionService],
})
export class VehicleRestrictionModule {}
