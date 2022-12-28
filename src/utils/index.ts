// shallow copy and reverse an array
export function reverse<T>(array: T[]): T[] {
  const list: T[] = [];
  if (array.length === 0) return list;

  for (let index = array.length - 1; index >= 0; index--) {
    list.push(array[index]);
  }
  return list;
}
