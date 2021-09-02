const switch_btn = document.getElementById("switch-1");

const switch_form = document.getElementById("form_switch");
const table_data = document.getElementsByTagName("td");
const table_row = document.getElementsByTagName("tr");
console.log(table_data);
console.log(table_row);

let = flag = 0;
switch_btn.addEventListener("change", (e) => {
  console.log("Inside");
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "#191d28";
  } else {
    document.body.style.backgroundColor = "white";
  }

  for (i = 0, len = table_data.length; i < len; i++) {
    if (table_data[i].style.color == "black") {
      table_data[i].style.color = "white";
    } else {
      table_data[i].style.color = "black";
    }
  }

  for (i = 0, len = table_row.length; i < len; i++) {
    if (flag == 0) {
      table_row[i].style.backgroundColor = "#f8f9fb";
    } else {
      table_row[i].style.backgroundColor = "#2f3241";
    }
  }

  if (flag == 0) {
    flag = 1;
  } else {
    flag = 0;
  }
});
