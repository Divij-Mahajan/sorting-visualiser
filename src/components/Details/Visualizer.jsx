import { useState } from "react";
import "../Details/visualizer.css"
import Canvas from "./Canvas.jsx";

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
    function insertionSort2(arr, n, ctx) {
        let i, key, j;

        for (i = 1; i < n; i++) {
            key = arr[i];
            j = i - 1;

            if (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                setNums(() => { return [...arr] })
                abc(ctx)
                console.log("hell")
            }
            arr[j + 1] = key;
        }
    }
    function insertionSort3(arr, n, ctx, i, j, key) {
        for (i = 1; i < n; i++) {
            key = arr[i];
            j = i - 1;

            if (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                setNums(() => { return [...arr] })
                abc(ctx)
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
    for (let i = 1; i < 27; i++) {
        a.push(i);
    }
    // setNums(a)
    shuffle(a)
    const [nums, setNums] = useState(a);
    let green = "#598059";
    let blue = "#45738C";

    function abc(ctx) {
        let index = 18;
        let sorted = true;
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
        insertionSort2(nums, nums.length, ctx)
    }


    // const draw = (ctx, frameCount) => {
    //     let index = 18;
    //     let sorted = true;
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //     for (let i = 0; i < nums.length; i++) {
    //         let size = (ctx.canvas.height - 20) * nums[i] / nums.length + 4;
    //         if (i > 0 && nums[i] < nums[i - 1]) {
    //             sorted = false;
    //         }
    //         if (i == index) {
    //             ctx.fillStyle = blue;
    //         } else if (sorted) {
    //             ctx.fillStyle = green;
    //         } else {
    //             ctx.fillStyle = "aliceblue";
    //         }

    //         ctx.fillRect(20 + i * 10, ctx.canvas.height - size, 6, size);
    //     }
    // }



    return (
        <div>
            <Canvas draw={draw} className="visualizer-canvas" />
            {/*
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
            </div> */}
            <button onClick={() => { setNums(() => { return shuffle(nums) }) }}>abc</button>
        </div>
    )
}