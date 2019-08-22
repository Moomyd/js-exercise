<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
let dots = [];
  for (let i = 0; i < 12; i++) {
    let node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);
  }
  let currentDot = 0;
  
  window.addEventListener("mousemove", event => {
    let dot = dots[currentDot];
    dot.style.left = (event.pageX - 3) + "px";
    dot.style.top = (event.pageY - 3) + "px";
    currentDot = (currentDot + 1) % dots.length;
  });
</script>