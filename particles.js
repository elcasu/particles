const particles = (function() {
  return {
    createSystem: function() {
      const particleCount = 1800
      const particles =  new THREE.Geometry()
      const pMaterial = new THREE.PointsMaterial({
        color: 0x008800,
        size: 10
      })

      for(let p = 0; p < particleCount; p++) {
        particles.vertices.push(new THREE.Vector3(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 500 - 250
        ))
      }

      return new THREE.Points(particles, pMaterial)
    }
  }
})()
