import { Injectable } from "@nestjs/common";
import { CreateVehicleRestrictionDto } from "../dto/create-vehicle-restriction.dto";
import { DAY_NAMES, RESTRICTED_DIGITS_BY_DAY, RESTRICTED_HOURS } from "../constants/pico-y-placa.constants";

@Injectable()
export class PicoYPlacaRule {

    canCirculate(createVehicleRestrictionDto: CreateVehicleRestrictionDto): boolean {
        const isTimeRestrictedByDay = this.isPlateRestrictedOnDay(createVehicleRestrictionDto.licensePlate, createVehicleRestrictionDto.date)
        const isTimeRestrictedByHour = this.isTimeRestricted(createVehicleRestrictionDto.time);
        return !(isTimeRestrictedByDay && isTimeRestrictedByHour);
    }

    private isPlateRestrictedOnDay(licensePlate: string, date: string): boolean {
        const lastDigit = parseInt(licensePlate.slice(-1));
        const dayName = DAY_NAMES[new Date(date + 'T00:00:00').getDay()];
        const restrictedList = RESTRICTED_DIGITS_BY_DAY[dayName] ?? [];
        return restrictedList.includes(lastDigit);
    }

    private isTimeRestricted(time: string): boolean {
        const [hour, minute] = time.split(":").map(Number);
        const totalMinutes = (hour * 60) + minute;

        return RESTRICTED_HOURS.some(
            (hourRange) => totalMinutes >= hourRange.start && totalMinutes <= hourRange.end
        );
    }

}


