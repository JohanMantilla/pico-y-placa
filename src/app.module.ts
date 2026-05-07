import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleRestrictionModule } from './vehicle-restriction/vehicle-restriction.module';

@Module({
  imports: [VehicleRestrictionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
