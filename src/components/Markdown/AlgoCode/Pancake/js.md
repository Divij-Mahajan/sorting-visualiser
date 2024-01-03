---
title: js
---

```javascript
function flip(arr, i){
    let temp, start = 0;
    while (start < i)
    {
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        start++;
        i--;
    }
}

function findMax(arr, n){
    let mi, i;
    for (mi = 0, i = 0; i < n; ++i)
        if (arr[i] > arr[mi])
            mi = i;                
    return mi;
}

function pancakeSort(arr, n){
    for (let curr_size = n; curr_size > 1; --curr_size){
        let mi = findMax(arr, curr_size);
        if (mi != curr_size - 1){
            flip(arr, mi);
            flip(arr, curr_size - 1);
        }
    }
    return 0;
}
```