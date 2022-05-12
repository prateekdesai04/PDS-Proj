const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const username = urlParams.get("username");
console.log(username);

// var username_title = document.getElementById("username-title");

// username_title.innerHTML = username;
const url1 = "http://127.0.0.1:5500/users/" + username;
$.ajax({
  url: url1,
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: function (response) {
    console.log(response[0]);
    document.getElementById("name-head").innerHTML = response[0]["username"];
    document.getElementById("email-head").innerHTML = response[0]["email"];
    document.getElementById("location-head").innerHTML =
      response[0]["city"] +
      ", " +
      response[0]["state"] +
      ", " +
      response[0]["country"];
    document.getElementById("profile-head").innerHTML =
      "Profile : " + response[0]["profile"];
    document.getElementById("status-head").innerHTML =
      "Status : " + response[0]["status_id"];
  },
  error: function (data) {
    console.log(data["responseJSON"]);
    alert(data["responseJSON"]["msg"]);
  },
});
const url2 = "http://127.0.0.1:5500/questions/user/" + username;
$.ajax({
  url: url2,
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: function (analysisData) {
    console.log(analysisData);
    var event_data = "";
    var record = 1;
    $.each(analysisData, function (index, value) {
      event_data += "<tr>";
      //event_data += '<th scope="row">' + record + '</th>';
      event_data +=
        '<td class="text-center">' +
        value.title +
        '<small class="d-block">' +
        value.body +
        "</small></td>";
      event_data += '<td class="text-center">' + value.subtopic_name + "</td>";
      event_data += '<td class="text-center">' + value.topic_name + "</td>";
      event_data += '<td class="text-center">' + value.is_resolved + "</td>";
      event_data +=
        '<td class="text-center">' +
        value.q_time.split("T")[0] +
        "  " +
        value.q_time.split("T")[1].split(".")[0] +
        "</td>";
      event_data += "</tr>";
      record = record + 1;
    });
    $("#queryTable").append(event_data);
    $("#queryTable").DataTable();
    $(".dataTables_length").addClass("bs-select");
  },
  error: function (data) {
    console.log(data["responseJSON"]);
    alert(data["responseJSON"]["msg"]);
  },
});

const url3 = "http://127.0.0.1:5500/answers/user/" + username;
$.ajax({
  url: url3,
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: function (analysisData) {
    console.log(analysisData);
    var event_data = "";
    var record = 1;
    $.each(analysisData, function (index, value) {
      event_data += "<tr>";
      //event_data += '<th scope="row">' + record + '</th>';
      event_data += '<td class="text-center">' + value.solution + "</td>";
      event_data += '<td class="text-center">' + value.is_best + "</td>";
      event_data +=
        '<td class="text-center">' +
        value.a_time.split("T")[0] +
        "  " +
        value.a_time.split("T")[1].split(".")[0] +
        "</td>";
      record = record + 1;
    });
    $("#queryTable2").append(event_data);
    $("#queryTable2").DataTable();
    $(".dataTables_length").addClass("bs-select");
  },
  error: function (data) {
    console.log(data["responseJSON"]);
    alert(data["responseJSON"]["msg"]);
  },
});
