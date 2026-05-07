import { PicoYPlacaRule } from './pico-y-placa.rule';

describe('PicoYPlacaRule', () => {
    let rule: PicoYPlacaRule;

    beforeEach(() => {
        rule = new PicoYPlacaRule();
    });

    describe('No puede circular', () => {

        it('Miércoles, placa termina en 6, hora restringida mañana', () => {
            expect(rule.canCirculate({ licensePlate: 'ABC-1236', date: '2026-05-06', time: '07:30' })).toBe(false);
        });

        it('Miércoles, placa termina en 5, hora restringida tarde', () => {
            expect(rule.canCirculate({ licensePlate: 'ABC-1235', date: '2026-05-06', time: '17:00' })).toBe(false);
        });

        it('Viernes, placa termina en 0, hora restringida tarde', () => {
            expect(rule.canCirculate({ licensePlate: 'ABC-1230', date: '2026-05-08', time: '19:00' })).toBe(false);
        });

    });

    describe('Puede circular', () => {

        it('Miércoles, placa termina en 6, fuera de horario restringido', () => {
            expect(rule.canCirculate({ licensePlate: 'ABC-1236', date: '2026-05-06', time: '10:00' })).toBe(true);
        });

        it('Fin de semana, cualquier placa', () => {
            expect(rule.canCirculate({ licensePlate: 'ABC-1236', date: '2026-05-09', time: '08:00' })).toBe(true);
        });

    });



});