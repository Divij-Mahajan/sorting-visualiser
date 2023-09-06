import { useState } from "react";
import "../Details/visualizer.css"

export default function Visualizer() {
    function insertionSort(arr, n) {
        let i, key, j;
        for (i = 1; i < n; i++) {
            key = arr[i];
            j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                setNums(() => { return [...arr] })
                console.log("hell")
            }
            arr[j + 1] = key;
        }
    }
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    let a = [];
    for (let i = 1; i < 25; i++) {
        a.push(i);
    }
    shuffle(a);
    const [nums, setNums] = useState(a);
    //setNums(a)

    return (
        <div>

            <div className="visualizer-canvas">
                {nums.map((n, i) => {
                    let check;
                    if (i > 0) {
                        check = nums[i] > nums[i - 1];
                    } else {
                        check = false;
                    }
                    let x = check ? "var(--green)" : "white"
                    return <div key={i} style={{ height: `${18 * n / nums.length}rem`, width: "0.7rem", background: x }}></div>
                })}
            </div>
            <button onClick={() => { insertionSort(nums, nums.length) }}>abc</button>
        </div>
    )
}