/* var listHidden = document.getElementById("list").style.display = "none";

function list() {
    var grid = document.getElementById("grid").innerHTML = document.getElementById("list").style.display = document.getElementById("list").innerHTML;
} */

/* function grid() {
     document.getElementById("list").style.display = "initial";
}
 */


/* FOR GRID */

function grid() {
    
    var list = document.getElementById("list_list");
    list.style.display = "none";
    var grid = document.getElementById("grid_list");
    grid.style.display = "inherit";

}

function list() {
    
    var grid = document.getElementById("grid_list");
    grid.style.display = "none";
    var list = document.getElementById("list_list");
    list.style.display = "inherit";

}


/* FOR GRID */


/* if ( grid !== list) {
        return grid;
    }
    else {
        return list;
    } */