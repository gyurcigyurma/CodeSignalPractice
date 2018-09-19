function adjacentElementsProduct(inputArray) {
    let minBestProduct = inputArray[0] * inputArray[1];
    for(i = 1; i <= inputArray.length; i++) {
      const currentProduct = inputArray[i] * inputArray[i-1];
      if(currentProduct > minBestProduct ) {
          minBestProduct = currentProduct;
      }
    }
      
    return minBestProduct;
  }
  