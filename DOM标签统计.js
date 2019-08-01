const getPageTags = () => {
    var doms = document.getElementsByTagName('*')
    var s = new Set([].slice.call(doms).map(dom => dom.tagName));
    return Array.from(s);
  }