---
title: js
---

```javascript
function cocktailSort(a){
    let swapped = true;
    let start = 0;
    let end = a.length;
    while (swapped == true) {
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
        swapped = false;
        end = end - 1;
        for (let i = end - 1; i >= start; i--) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
        start = start + 1;
    }
}
```