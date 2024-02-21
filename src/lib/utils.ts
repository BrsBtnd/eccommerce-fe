import { API_URL, LOREM_FLICKR_URL } from '@/lib/constants';
import { faker } from '@faker-js/faker';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  return await response.json();
}

export async function getBasketById(id: string) {
  const response = await fetch(`${API_URL}/carts/${id}`);

  return await response.json();
}

export function enumToArray<T extends Record<string, string>>(
  enumObj: T,
): T[keyof T][] {
  return Object.keys(enumObj).map(
    (key) => enumObj[key as keyof T],
  ) as T[keyof T][];
}

export function getImageSrc(
  width: number,
  height: number,
  lock: string | undefined,
): string {
  return `${LOREM_FLICKR_URL}/${width}/${height}/computers?lock=${lock}`;
}

export function getLock() {
  const imageUrl = new URL(
    faker.image.urlLoremFlickr({
      category: 'computers',
    }),
  );

  return imageUrl.searchParams.get('lock');
}
