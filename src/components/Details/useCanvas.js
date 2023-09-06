import { useRef, useEffect, useState } from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null)
  let frameCount = 0

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, frameCount])

  return canvasRef
}

export default useCanvas