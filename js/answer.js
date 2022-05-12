const url = "http://127.0.0.1:5500/answers/";
// $.ajax({
  // url: url,
  // type: "GET",
  // headers: {
    // "Content-Type": "application/json",
  // },
  // success: function (analysisData) {
    // console.log(analysisData);
    // var event_data = "";
    // $.each(analysisData, function (index, value) {
      // event_data += "<tr>";
      // event_data += '<td class="text-center">' + value.title + "</td>";
	  // event_data += "</tr>";
	  
	  // event_data += "<tr>";
	  // event_data += '<td class="text-center">' + value.body + "</td>";
	  // event_data += "</tr>";
    // });
    // $("#queryTable1").append(event_data);
    // $("#queryTable1").DataTable();
    // $(".dataTables_length").addClass("bs-select");
  // },
  // error: function (data) {
    // console.log(data["responseJSON"]);
    // alert(data["responseJSON"]["msg"]);
  // },
// });
var analysisData = [
    {
        "topic_id": "t2",
        "subtopic_id": 2,
        "q_id": 2,
        "title": "Best player in football",
        "body": "Who is the best of all time in football?",
        "q_time": "2022-04-08T04:00:00.000Z",
        "is_resolved": "Y",
        "username": "adamar",
        "subtopic_name": "Football",
        "topic_name": "Sports"
    }
]

var event_data = "";
    $.each(analysisData, function (index, value) {
    event_data += "<tr>";
    event_data += '<td class="text-center">' + value.title + "</td>";
	event_data += "</tr>";
	  
	event_data += "<tr>";
	event_data += '<td class="text-center">' + value.body + "</td>";
	event_data += "</tr>";
    });
    $("#queryTable1").append(event_data);
    $("#queryTable1").DataTable();
    $(".dataTables_length").addClass("bs-select");


