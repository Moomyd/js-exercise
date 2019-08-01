const parseData = (data) => {
    let arr = [];
    data.rows.map((row) => {
        let obj = {};
        row.map((v, i) => {
            obj[data.metaData[i].name] = v;
  
        });
      arr.push(obj);
    });
    return arr;
  }
  let d={
    rows: [
      ["Lisa", 16, "Female", "2000-12-01"],
      ["Bob", 22, "Male", "1996-01-21"]
    ],
    metaData: [
      { name: "name", note: '' },
      { name: "age", note: '' },
      { name: "gender", note: '' },
      { name: "birthday", note: '' }
    ]
  };
  console.log(parseData(d));
  //[
  //{ name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
  //{ name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
  //]