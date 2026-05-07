import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleRestrictionModule } from './vehicle-restriction/vehicle-restriction.module';
import { join } from 'path';

@Module({
  imports: [
    VehicleRestrictionModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
