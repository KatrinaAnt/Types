import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

const cart = new Cart();

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('adding a product', () => {
  cart.add(new Movie(1008, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantastic'], 137, 586));

  expect(cart.items.length).toBe(1);
});

test('cost calculation', () => {
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.costWithoutDiscount()).toBe(3486);
});

test('calculation of the cost with a discount', () => {
  expect(cart.discountedPrice(15)).toBeCloseTo(2963.1);
});

test('removing an item from the cart', () => {
  cart.remove(1001);
  expect(cart.items.length).toBe(2);
});