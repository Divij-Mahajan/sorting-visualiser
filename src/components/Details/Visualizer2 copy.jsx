import { useState } from "react";
import "../Details/visualizer.css"
import Canvas from "./Canvas.jsx";

export default function Visualizer() {

    function insertionSort(arr, n, ctx, index, sorted) {
        let i, key, j;
        for (i = 1; i < n; i++) {
            key = arr[i];
            j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                setNums(() => { return [...arr] })
                console.log("hell")
                xyz(ctx, index, sorted)
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
        return array
    }
    let a = [];
    for (let i = 1; i < 27; i++) {
        a.push(i);
    }
    shuffle(a)
    const [nums, setNums] = useState(a);
    const [sorting, setSorting] = useState(false)
    let green = "#598059";
    let blue = "#45738C";
    function xyz(ctx, index, sorted) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (let i = 0; i < nums.length; i++) {
            let size = (ctx.canvas.height - 20) * nums[i] / nums.length + 4;
            if (i > 0 && nums[i] < nums[i - 1]) {
                sorted = false;
            }
            if (i == index) {
                ctx.fillStyle = blue;
            } else if (sorted) {
                ctx.fillStyle = green;
            } else {
                ctx.fillStyle = "aliceblue";
            }

            ctx.fillRect(20 + i * 10, ctx.canvas.height - size, 6, size);
        }
    }
    const draw = (ctx, frameCount) => {
        let index = 18;
        let sorted = true;
        xyz(ctx, index, sorted)
        if (sorting) {
            insertionSort(nums, nums.length, ctx, index, sorted)
        }
    }



    return (
        <div>
            <Canvas draw={draw} className="visualizer-canvas" />
            <button onClick={() => { setSorting(true) }}>abc</button>
        </div>
    )
}