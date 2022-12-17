export const convertMoney = (money: string): string => {
    return money.slice(0, -4) + "." + money.slice(-5, -2)  + "," + money.slice(-2);
}