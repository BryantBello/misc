$("#add").click(
  function () {
     var someText = "my dynamic text";
     var newDiv = $("#tasks").append(someText).click(function () { alert("click!"); });
     $(this).append(newDiv);
  }
)