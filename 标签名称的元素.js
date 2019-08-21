<!doctype html>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    let found = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {//nodeType 属性返回以数字值返回指定节点的节点类型。 如果节点是元素节点，则 nodeType 属性将返回 1。如果节点是属性节点，则 nodeType 属性将返回 2。
          if (child.nodeName == tagName) found.push(child);
          explore(child);
        }
      }
    }

    explore(node);
    return found;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>