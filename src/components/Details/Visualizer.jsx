import { useState } from "react";
import "../Details/visualizer.css"

//Heapsort
function heapSort(arr, N, s) {
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i, s);
    for (var i = N - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        s.push([0, i])
        heapify(arr, i, 0, s);
    }
}
function heapify(arr, N, i, s) {
    var largest = i;
    var l = 2 * i + 1
    var r = 2 * i + 2
    if (l < N && arr[l] > arr[largest])
        largest = l;
    if (r < N && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        s.push([largest, i])
        heapify(arr, N, largest, s);
    }
}

//QuickSort
function partition(arr, low, high, s) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            s.push([i, j])
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    s.push([i + 1, high])
    let temp = arr[i + 1];
    arr[i + 1] = arr[high]
    arr[high] = temp
    return i + 1;
}

function qs(arr, low, high, s) {
    if (low >= high) return;
    let pi = partition(arr, low, high, s);

    qs(arr, low, pi - 1, s);
    qs(arr, pi + 1, high, s);
}
function quickSort(arr, n, s) {
    return qs(arr, 0, n - 1, s)
}

//BubbleSort
function bubbleSort(arr, n, s) {
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                s.push([j, j + 1])
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
}

//InsertionSort
function insertionSort(arr, n, s) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            s.push([j + 1, j])
            j = j - 1;

        }
        arr[j + 1] = key;
    }
    return arr;
}

//SelectionSort
function selectionSort(arr, n, s) {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        s.push([min_idx, i]);
    }
}

//Cocktail Sort
function cocktailSort(a, n, s) {
    let swapped = true;
    let start = 0;
    let end = n;

    while (swapped == true) {
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                s.push([i, i + 1])
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
                s.push([i, i + 1])
                swapped = true;
            }
        }
        start = start + 1;
    }
}

//shellSort
function shellSort(arr, n, s) {
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
                s.push([j, j - gap])
            }
            arr[j] = temp;
            s.push[j, i]
        }
    }
    return arr;
}

//pancakeSort
function flip(arr, i, s) {
    let temp, start = 0;
    while (start < i) {
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        s.push([start, i])
        start++;
        i--;
    }
}
function findMax(arr, n) {
    let mi, i;
    for (mi = 0, i = 0; i < n; ++i)
        if (arr[i] > arr[mi])
            mi = i;
    return mi;
}
function pancakeSort(arr, n, s) {
    for (let curr_size = n; curr_size > 1; --curr_size) {
        let mi = findMax(arr, curr_size);
        if (mi != curr_size - 1) {
            flip(arr, mi, s);
            flip(arr, curr_size - 1, s);
        }
    }
    return arr;
}


//mergeSort
function merge(arr, l, m, r, s) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            s.push([k, L[i]])
            i++;
        }
        else {
            arr[k] = R[j];
            s.push([k, R[j]])
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        s.push([k, L[i]])
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        s.push([k, R[j]])
        j++;
        k++;
    }
}
function ms(arr, l, r, s) {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        ms(arr, l, m, s);
        ms(arr, m + 1, r, s);
        merge(arr, l, m, r, s);
    }
}

function mergeSort(arr, n, s) {
    return ms(arr, 0, n - 1, s)
}


export default function Visualizer({ name }) {

    let sb = (name == "Merge") ? false : true
    const [colorBlue, setColorBlue] = useState([-1, -1])
    let initial = []
    for (let i = 0; i < 60; i++) {
        initial.push(i + 1);
    }
    const [interval, setInterval] = useState(50)
    const [isSorting, setIsSorting] = useState(false)

    const [array, setArray] = useState(initial)
    function fillArray(len) {
        let initial = []
        for (let i = 0; i < len; i++) {
            initial.push(i + 1);
        }
        setArray(() => { return [...initial] })
    }


    async function sort(name, initial, swapBased = true) {
        let s = []
        let b = [...array]
        let arr = [...array]
        name = name.toLowerCase()
        //eval(`${name}Sort(arr,arr.length,s)`)
        if (name == "insertion") insertionSort(arr, arr.length, s);
        else if (name == "bubble") bubbleSort(arr, arr.length, s);
        else if (name == "heap") heapSort(arr, arr.length, s);
        else if (name == "pancake") pancakeSort(arr, arr.length, s);
        else if (name == "merge") mergeSort(arr, arr.length, s);
        else if (name == "quick") quickSort(arr, arr.length, s);
        else if (name == "shell") shellSort(arr, arr.length, s);
        else if (name == "selection") selectionSort(arr, arr.length, s);
        else if (name == "cocktail") insertionSort(arr, arr.length, s);
        //if (name == "selection") interval += s.length
        //algo(arr, arr.length, s);
        setIsSorting(true)
        let x = interval * ((name == "selection") ? 3 : 1)
        for (let i = 0; i < s.length; i++) {
            setTimeout(() => {
                if (swapBased) {
                    b = swap(b, s[i][0], s[i][1])
                    setColorBlue([s[i][0], s[i][1]])
                } else {
                    b = put(b, s[i][0], s[i][1])
                    setColorBlue([s[i][0], -1])
                }
                setArray(() => { return [...b] })
            }, initial + i * x)
        }
        setTimeout(() => {
            setColorBlue([-1, -1])
            setIsSorting(false)
        }, initial + s.length * x)

    }
    function swap(x, a, b) {
        let y = []
        for (let i = 0; i < x.length; i++) {
            if (i == a) y.push(x[b])
            else if (i == b) y.push(x[a])
            else y.push(x[i])
        }
        return y;
    }

    function put(x, k, val) {
        let y = []
        for (let i = 0; i < x.length; i++) {
            if (i == k) y.push(val)
            else y.push(x[i])
        }
        return y;
    }
    function shuffle(initial, interval) {
        let x = array
        for (let i = 0; i < array.length; i++) {
            setTimeout(() => {
                let z = Math.floor(Math.random() * array.length)
                x = swap(x, i, z)
                setColorBlue([z])
                setArray(() => { return [...x] })
            }, initial + i * interval)
        }

        setTimeout(() => {
            setColorBlue([-1, -1])
        }, initial + x.length * interval)

    }
    let x = true

    return (
        <div>

            <button onClick={() => {
                if (!isSorting)
                    sort(name, 300, sb)
            }}  >Sort</button>
            <button onClick={() => {
                if (!isSorting)
                    shuffle(200, 10)
            }}>Shuffle</button>
            <label>Size:</label>
            <input min="1" max="175" type="range" defaultValue={60} onChange={(e) => {
                if (!isSorting)
                    fillArray(e.target.value)
            }} />
            <label>Speed:</label>
            <input min="-100" max="-1" type="range" defaultValue={-50} onChange={(e) => {
                if (!isSorting)
                    setInterval(-1 * e.target.value)
            }} />
            <div className="array">
                {array.map((n, i) => {
                    let bl = false
                    if (i > 0 && array[i] < array[i - 1]) x = false
                    if (colorBlue.includes(i)) bl = true
                    if (i == array.length - 1) {
                        setTimeout(() => {
                            x = true
                        }, 10);
                    }

                    return <div className={"bar " + ((bl) ? "blue" : ((x) ? "green" : ""))} key={i} style={{ height: n * 225 / array.length }} ></div>
                })}
            </div>
        </div>
    )
}