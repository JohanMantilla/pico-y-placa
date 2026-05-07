import { IsDateString, IsString, Matches } from "class-validator";

export class CreateVehicleRestrictionDto {

    @IsString()
    @Matches(/^[A-Z]{3}-?\d{4}$/, {
        message: `El numero de placa es incorrecto, deberia estar en este formato: ABC-1268`
    })
    licensePlate: string;

    @IsDateString({}, {
        message: `La fecha ingresada es incorrecta, deberia estar en este formato: 2026-10-02`
    })
    date: string;

    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: `La hora ingresada es incorrecta, deberia estar en este formato: 08:10`
    })
    time: string;
}
