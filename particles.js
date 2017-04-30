const particles = (function() {
  return {
    createSystem: function() {
      const particleCount = 1800
      const particles =  new THREE.Geometry()
      const pMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 5,
        map: new THREE.TextureLoader().load('img/particle.png'),
        blending: THREE.AdditiveBlending,
        transparent: true
      })

      for(let p = 0; p < particleCount; p++) {
        particles.vertices.push(new THREE.Vector3(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 500 - 250
        ))
      }

      let system = new THREE.Points(particles, pMaterial)
      system.sortParticles = true
      return system
    }
  }
})()
