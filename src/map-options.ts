const backgColor = '#01303f' 
const nodeColor = 
'#d4f0fc'
const crazyParticles = {
  background: {
    color: {
      value: backgColor,
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      // onHover: {
      //   enable: true,
      //   mode: 'repulse',
      // },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3,
      },
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      }
    }
  },
  particles: {
    color: {
      value: nodeColor,
    },
    links: {
      color: nodeColor,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
    }
  },
  detectRetina: true,
  zIndex: -1,
}

export const optionsMap : { [key: string]: any } = {
  crazyParticles,
}
