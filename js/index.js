const url = "http://127.0.0.1:5500/questions/";
$.ajax({
  url: url,
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
      event_data += '<td class="text-center">' + value.username + "</td>";
      event_data +=
        '<td class="text-center"><a href="question.html?q_id=' +
        value.q_id +
        '">' +
        value.title +
        '<small class="d-block">' +
        value.body +
        "</small></a></td>";
      event_data += '<td class="text-center">' + value.subtopic_name + "</td>";
      event_data += '<td class="text-center">' + value.topic_name + "</td>";
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

const url1 = "http://127.0.0.1:5500/topics/";
$.ajax({
  url: url1,
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: function (analysisData) {
    var event_data = "";
    $.each(analysisData, function (index, value) {
      event_data += "<tr>";
      //event_data += '<th scope="row">' + record + '</th>';
      event_data +=
        "<td><a id=" +
        value.topic_id +
        " onClick=fillTable(this);>" +
        value.topic_name +
        "</a></td>";
      event_data += "</tr>";
    });
    $("#topicsTable").append(event_data);
  },
  error: function (data) {
    //console.log(data["responseJSON"]);
    //alert(data["responseJSON"]["msg"]);
  },
});

function fillTable(clicked_id) {
  var selectedText = clicked_id.id;
  console.log(clicked_id);
  const url2 = "http://127.0.0.1:5500/questions/topics/" + selectedText;
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
      if ($.fn.DataTable.isDataTable("#queryTable")) {
        var queryTable = $("#queryTable").DataTable();
        queryTable.clear().draw();
        queryTable.destroy();
      }
      $.each(analysisData, function (index, value) {
        event_data += "<tr>";
        //event_data += '<th scope="row">' + record + '</th>';
        event_data += '<td class="text-center">' + value.username + "</td>";
        event_data +=
          '<td class="text-center"><a href="question.html?q_id=' +
          value.q_id +
          '">' +
          value.title +
          '<small class="d-block">' +
          value.body +
          "</small></a></td>";
        event_data +=
          '<td class="text-center">' + value.subtopic_name + "</td>";
        event_data += '<td class="text-center">' + value.topic_name + "</td>";
        event_data += "</tr>";
      });
      $("#queryTable").append(event_data);
      $("#queryTable").DataTable();
      $(".dataTables_length").addClass("bs-select");
    },
    error: function (data) {
      //console.log(data["responseJSON"]);
      //alert(data["responseJSON"]["msg"]);
    },
  });
}
