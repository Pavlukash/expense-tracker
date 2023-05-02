export default interface IExpensesProps {
    items: IItemType[]
}

interface IItemType {
    id: string,
    title: string,
    amount: number,
    date: Date
}
