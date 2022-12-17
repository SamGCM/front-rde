export const moneyType = (money: string): string => {
    const type = {
        BRL: "R$",
        USD: "$"
    }

    return type[money as keyof typeof type];
}