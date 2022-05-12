const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const q_id = urlParams.get("q_id");
console.log(q_id);
const url = "http://127.0.0.1:5500/questions/" + q_id;
$.ajax({
  url: url,
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: function (analysisData) {
    console.log(analysisData);
    $.each(analysisData, function (index, value) {
      document.getElementById("question-header").innerHTML =
        analysisData[0]["title"];
      document.getElementById("question-body").innerHTML =
        analysisData[0]["body"];
      document.getElementById("question-subtopic").innerHTML =
        analysisData[0]["subtopic_name"];
      document.getElementById("question-topic").innerHTML =
        analysisData[0]["topic_name"];
      document.getElementById("question-username").innerHTML =
        analysisData[0]["username"];
      document.getElementById("question-time").innerHTML =
        analysisData[0]["q_time"];
    });
  },
  error: function (data) {
    console.log(data["responseJSON"]);
    alert(data["responseJSON"]["msg"]);
  },
});
