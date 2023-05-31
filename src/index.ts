export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;
  // while both lists have items
  while (i < collection_1.length && j < collection_2.length) {
    const x = collection_1[i];
    const y = collection_2[j];

    if (x <= y) {
      merged[k++] = x;
      ++i;
    } else {
      merged[k++] = y;
      ++j;
    }
  }
  while (i < collection_1.length) {
    merged[k++] = collection_1[i++];
  }

  while (j < collection_2.length) {
    merged[k++] = collection_2[j++];
  }
  return merged;
}
