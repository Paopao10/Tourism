var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    populateTable(data);
  }
};
xhttp.open("GET", "showtable.php", true);
xhttp.send();

function populateTable(data) {
  var tableBody = document.getElementById("tableBody");
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += "<tr>";
    html += "<td>" + data[i].id + "</td>";
    html += "<td>" + data[i].firstName + "</td>";
    html += "<td>" + data[i].lastName + "</td>";
    html += "<td>" + data[i].gender + "</td>";
    html += "<td>" + data[i].nationality + "</td>";
    html += "<td>" + data[i].email + "</td>";
    html += "<td>" + data[i].phonenumber + "</td>";
    html += "<td>" + data[i].birthdate + "</td>";
    html += "<td>" + data[i].visitortype + "</td>";
    html +=
      "<td><button onclick='deleteTourist(" +
      data[i].id +
      ")'>Delete</button></td>"; // Add delete button
    html += "</tr>";
  }
  tableBody.innerHTML = html;
}


function deleteTourist(id) {
  var confirmDelete = confirm("Are you sure you want to delete this tourist?");
  if (confirmDelete) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        alert("Tourist deleted successfully");
        location.reload(); // Refresh the page to update the table
      }
    };
    xhttp.open("POST", "delete.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id=" + id);
  }
}
