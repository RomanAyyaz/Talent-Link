"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

function EarthSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create scene
    const scene = new THREE.Scene()

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 2.5

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.setClearColor(0x000000)

    // Create Earth with points
    const earthGroup = new THREE.Group()
    scene.add(earthGroup)

    // Create a sphere to position the points
    const radius = 1
    const segments = 50
    const pointsGeometry = new THREE.SphereGeometry(radius, segments, segments)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x3e3e3e,
      size: 0.02,
    })

    // Create the base sphere with dark points
    const basePoints = new THREE.Points(pointsGeometry, pointsMaterial)
    earthGroup.add(basePoints)

    // Create highlighted points for continents
    const highlightGeometry = new THREE.BufferGeometry()
    const highlightMaterial = new THREE.PointsMaterial({
      color: 0x4a7eb3,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    })

    // Create random points that will form continent-like patterns
    const highlightVertices = []
    const continentDensity = 2000 // Adjust for more or fewer points

    for (let i = 0; i < continentDensity; i++) {
      // Create a random point on the sphere
      const phi = Math.acos(-1 + 2 * Math.random())
      const theta = 2 * Math.PI * Math.random()

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Only add some points to create continent-like patterns
      // This is a simple algorithm to create continent-like clusters
      const noise = Math.sin(5 * phi) * Math.cos(5 * theta)
      if (noise > 0.2) {
        highlightVertices.push(x, y, z)
      }
    }

    highlightGeometry.setAttribute("position", new THREE.Float32BufferAttribute(highlightVertices, 3))
    const highlightPoints = new THREE.Points(highlightGeometry, highlightMaterial)
    earthGroup.add(highlightPoints)

    // Add some glowing lines connecting points
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x4a7eb3,
      transparent: true,
      opacity: 0.3,
    })

    // Create several random lines across the globe
    for (let i = 0; i < 20; i++) {
      const lineGeometry = new THREE.BufferGeometry()
      const linePoints = []

      // Start point
      const startPhi = Math.acos(-1 + 2 * Math.random())
      const startTheta = 2 * Math.PI * Math.random()

      const startX = radius * Math.sin(startPhi) * Math.cos(startTheta)
      const startY = radius * Math.sin(startPhi) * Math.sin(startTheta)
      const startZ = radius * Math.cos(startPhi)

      // End point
      const endPhi = Math.acos(-1 + 2 * Math.random())
      const endTheta = 2 * Math.PI * Math.random()

      const endX = radius * Math.sin(endPhi) * Math.cos(endTheta)
      const endY = radius * Math.sin(endPhi) * Math.sin(endTheta)
      const endZ = radius * Math.cos(endPhi)

      linePoints.push(startX, startY, startZ)
      linePoints.push(endX, endY, endZ)

      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePoints, 3))
      const line = new THREE.Line(lineGeometry, linesMaterial)
      earthGroup.add(line)
    }

    // Add distant stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
      transparent: true,
      opacity: 0.5,
    })

    const starsVertices = []
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20

      // Keep stars away from the Earth
      const distance = Math.sqrt(x * x + y * y + z * z)
      if (distance > 3) {
        starsVertices.push(x, y, z)
      }
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate Earth
      earthGroup.rotation.y += 0.001

      // Slight wobble
      earthGroup.rotation.x = Math.sin(Date.now() * 0.0001) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      scene.remove(earthGroup)
      scene.remove(stars)

      // Dispose of geometries and materials
      pointsGeometry.dispose()
      pointsMaterial.dispose()
      highlightGeometry.dispose()
      highlightMaterial.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()

      // Clean up lines
      earthGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose()
          child.material.dispose()
        }
      })

      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Welcome to</h2>
          <h1 className="text-5xl font-bold mb-8">TalentLink Community</h1>
          <p className="text-xl mb-2">Home to Million of developers worldwide</p>
          <a href="#" className="text-green-500 text-xl">
            Know more
          </a>
        </div>
      </div>
    </div>
  )
}

export default EarthSection
