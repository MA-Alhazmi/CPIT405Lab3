function filterByTeam() {
  let input = document.getElementById("searchBox");
  let word = input.value.toLowerCase();
  let tables = document.querySelectorAll(".laliga");
  for (table of tables) {
    let rows = document.querySelectorAll("tbody tr");
    doFilter(rows, word,0,  2);
  }
}

function filterByTime() {
  let menuItem = document.getElementsByClassName("filter_by")[0];
  let word = menuItem.value.toLowerCase();
  let tables = document.querySelectorAll(".laliga");
  for (table of tables) {
    let rows = document.querySelectorAll("tbody tr");
    doFilter(rows,word, 1,  1);
  }
}


function doFilter(rows, word,column,  colmun2) {
  /* Loop through all table rows and hide rows
     that have cells that don't match the search query.
   */

  for (let i = 0; i < rows.length; i++) {

    let td = rows[i].getElementsByTagName("td")[column];
    let txtValue = td.innerText
    let td2 = rows[i].getElementsByTagName("td")[colmun2];
    let txtValue2 = td2.innerText
    if (txtValue.toLowerCase().indexOf(word) > -1) {
      rows[i].style.display = "";
    } else if (txtValue2.toLowerCase().indexOf(word) > -1) {
      rows[i].style.display = "";
    } else {

      rows[i].style.display = "none";
    }
  }
}