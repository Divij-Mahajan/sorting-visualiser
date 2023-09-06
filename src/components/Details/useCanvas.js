import { useRef, useEffect, useState } from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null)
  const [frameCount, setFrameCount] = useState(0)
  const [last, setLast] = useState(0)
  let delay = 10000;



  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      if (frameCount - last > delay) {
        animationFrameId = window.requestAnimationFrame(render)
        setLast(frameCount)
      }
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, frameCount])

  return canvasRef
}

export default useCanvas