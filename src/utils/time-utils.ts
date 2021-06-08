export function GetCurrentDateInPoland(): Date {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" }));
}