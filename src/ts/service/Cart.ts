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
        let cost = this._items.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        return cost;
    }

    discountedPrice(discount: number): number {
        let cost = this.costWithoutDiscount();
        const result = (cost - cost * (discount / 100)).toFixed(2);
        return Number(result);
    }

    remove(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}