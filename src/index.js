import './index.css'

document.body.innerHTML = 'move your mouse around'


    
let ctx = new AudioContext

let osc = ctx.createOscillator()

osc.connect(ctx.destination)

osc.start()

window.onmousemove = event => {
  document.body.style.backgroundColor =
    `hsl(${event.clientX}, 60%, 60%)`
    
    osc.frequency.value = event.clientX
}