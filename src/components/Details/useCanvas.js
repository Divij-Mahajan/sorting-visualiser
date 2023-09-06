import { useRef, useEffect } from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null)
  let delay = 1000000000000;
  let last = 0;
  let frameCount = 0

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      if (frameCount - last > delay) {
        animationFrameId = window.requestAnimationFrame(render)
        last = frameCount
      }
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas