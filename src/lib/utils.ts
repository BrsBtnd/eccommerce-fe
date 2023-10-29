export async function getProducts() {
  const response = await fetch('http://localhost:3001/products');

  return await response.json();
}

export function enumToArray<T extends Record<string, string>>(
  enumObj: T,
): T[keyof T][] {
  return Object.keys(enumObj).map(
    (key) => enumObj[key as keyof T],
  ) as T[keyof T][];
}
