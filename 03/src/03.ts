function find_zero_ratio(report: string[], x: number): number
{
    return report.reduce((acc, row) => row[x] === "0" ? acc + 1 : acc - 1, 0);
}

function filter_matrix(report: string[], filter_fn: (zero_ratio: number) => string): string
{
    let filtered_report = [...report];

    for(let column = 0; filtered_report.length > 1; column++) {
        const zero_ratio = find_zero_ratio(filtered_report, column);
        filtered_report = filtered_report.filter(row => row[column] === filter_fn(zero_ratio));
    }

    return filtered_report.join("");
}

export function countPart1(report: string[]): number
{
    const gamma_str = report[0].split("").reduce((acc, _, x) => {
        const zeros_score = find_zero_ratio(report, x);
        if (zeros_score > 0) {
            return acc + "0";
        } else {
            return acc + "1";
        }
    }, "");
    const epsilon_str = gamma_str.split("").map(b => b === "0" ? "1" : "0").join("");

    return parseInt(gamma_str, 2) * parseInt(epsilon_str, 2);
}

export function countPart2(report: string[]): number
{
    const oxygen_generator_rating_str = filter_matrix(report, zero_ratio => zero_ratio > 0 ? "0" : "1"); // equally common => keep 1
    const co2_scrubber_rating_str = filter_matrix(report, zero_ratio => zero_ratio <= 0 ? "0" : "1"); // equally common => keep 0

    return parseInt(oxygen_generator_rating_str, 2) * parseInt(co2_scrubber_rating_str, 2);
}
