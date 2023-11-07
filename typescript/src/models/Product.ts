
type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Produto A', price: 10},
    {title: 'Produto Z', price: 20},
    {title: 'Produdo E', price: 30}
]

export const Product = {
    getAll:(): Product[] =>{
        return data
    },

    getFromPriceAfter:(price: number): Product[] =>{
        return data.filter(item =>{
            if(item.price >= price){
                return true
            }
        })
    }
}