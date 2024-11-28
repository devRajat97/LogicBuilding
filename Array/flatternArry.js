const flattern = (arr,result = []) => {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattern(arr[i],result);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
};

flattern([1, 2, [5, 7, 3, [5, 7, 1, [8, 9]]], 0]);
