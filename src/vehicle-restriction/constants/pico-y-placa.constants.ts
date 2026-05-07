export const DAY_NAMES = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
] as const;

export const RESTRICTED_DIGITS_BY_DAY: Record<string, number[]> = {
    MONDAY: [1, 2],
    TUESDAY: [3, 4],
    WEDNESDAY: [5, 6],
    THURSDAY: [7, 8],
    FRIDAY: [9, 0]
};

export const RESTRICTED_HOURS = [
    { start: 420, end: 570 },
    { start: 960, end: 1170 }
] as const;

