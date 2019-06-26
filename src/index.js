import './index.css'

document.body.innerHTML = 'move your mouse around !!!!'

let ctx = new AudioContext()

let osc = ctx.createOscillator()

osc.connect(ctx.destination)

osc.start()

window.onmousemove = event => {
  let color = process.env.REACT_APP_COLOR
  
  document.body.style.backgroundColor =
    `hsl(${color ? color : event.clientX}, 60%, 60%)`
    
    osc.frequency.value = event.clientX
}