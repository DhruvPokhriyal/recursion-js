function mergeSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let mid = Math.floor((high + low) / 2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        return merge(array, low, mid, high);
    }
}

function merge(array, low, mid, high) {
    let arr1 = array.slice(low, mid + 1);
    let arr2 = array.slice(mid + 1, high + 1);
    let index1 = 0;
    let index2 = 0;
    for (let i = low; i <= high; i++) {
        if (index1 < arr1.length && index2 < arr2.length) {
            if (arr1[index1] < arr2[index2]) {
                array[i] = arr1[index1];
                index1++;
            } else {
                array[i] = arr2[index2];
                index2++;
            }
        } else if (index1 < arr1.length) {
            array[i] = arr1[index1];
            index1++;
        } else {
            array[i] = arr2[index2];
            index2++;
        }
    }
    return array;
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];
let res = mergeSort(array);
console.log(res);
