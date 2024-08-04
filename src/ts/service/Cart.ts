import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    costWithoutDiscount(): number {
        let cost = 0;
        this._items.forEach(element => {
            cost += element.price;
        })
        return cost;
    }

    discountedPrice(discount: number): number {
        let cost = 0;
        this._items.forEach(element => {
            cost += element.price;
        })
        const result = (cost - cost * (discount / 100)).toFixed(2);
        return Number(result);
    }

    remove(id: number): void {
        this._items.forEach((element, index) => {
            if(element.id === id) {
                this._items.splice(index, 1);
            }
        })
    }
}