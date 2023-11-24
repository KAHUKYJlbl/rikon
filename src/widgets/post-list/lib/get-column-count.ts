export const getColumnCount = (width: number): number => {
  if (width < 200) {
    return 1;
  }

  if (width < 400) {
    return 2;
  }

  return 3;
}
