<!doctype html>

<meta charset="utf8">

<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  function buildTable(data) {
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);//Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.textContent = field;//Node.textContent 属性表示一个节点及其后代的文本内容。
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
/*var child = node.appendChild(child);
node 是要插入子节点的父节点.
child 即是参数又是这个方法的返回值.
*/

    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.querySelector("#mountains")
    .appendChild(buildTable(MOUNTAINS));
</script>