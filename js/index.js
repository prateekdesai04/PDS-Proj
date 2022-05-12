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
        '<td class="text-center">' +
        value.title +
        '<small class="d-block">' +
        value.body +
        "</small></td>";
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
