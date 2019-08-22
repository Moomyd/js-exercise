<!doctype html>

<p>🎈</p>

<script>
  let p=document.querySelector("p");
  let size=30;
  function setSize(newSize) {
    size = newSize;
    p.style.fontSize = size + "px";
  }
  function handle(event) {
      if(event.key=="ArrowUp"){
          if(size>50){
              p.textContent="💥";
              document.body.removeEventListener("keydown",handle);
          }else {
            setSize(size * 1.1);
            event.preventDefault();
          }
        } else if (event.key == "ArrowDown") {
          setSize(size * 0.9);
          event.preventDefault();
        }
      }    
  }
  document.body.addEventListener("keydown", handle);
</script>