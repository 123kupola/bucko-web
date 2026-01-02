export interface AgeResult {
    years: number;
    months: number;
    days: number;
    formatted: string;
}

/**
 * Calculates the age of the dog based on the birth date.
 * Returns an object with numerical values and a formatted string.
 */
export function calculateAge(birthDateStr: string): AgeResult {
    const birthDate = new Date(birthDateStr);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const plural = (count: number, unit: string) => {
        return `${count} ${unit}${count !== 1 ? 's' : ''}`;
    };

    const formatted = [
        plural(years, "year"),
        plural(months, "month"),
        plural(days, "day")
    ].join(" | ");

    return { years, months, days, formatted };
}
