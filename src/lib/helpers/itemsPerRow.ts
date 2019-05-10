export default (arr: any[], itemsPerRow: number) => {
  const multiArr = [];
  let row = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    row.push(item);
    if (row.length % itemsPerRow === 0) {
      multiArr.push(row);
      row = [];
    }
  }
  if (row.length) {
    multiArr.push(row);
  }
  return multiArr;
};
