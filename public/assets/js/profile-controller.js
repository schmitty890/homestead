$("#profileUpdate").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileLander").hide()
  $("#profileDues").hide()
  $("#profileUpdateForm").show()
})
$("#profilePostEvent").on("click", function() {
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileLander").hide()
  $("#profileDues").hide()
  $("#profileEventForm").show()
})
$("#profilePostClass").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileLander").hide()
  $("#profileDues").hide()
  $("#profileClassForm").show()
})
$("#profilePostRes").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileLander").hide()
  $("#profileDues").hide()
  $("#profileResForm").show()
})
$("#profileDuesView").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileLander").hide()
  $("#profileResForm").hide()
  $("#profileDues").show()
})
$("#profileContact").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileLander").hide()
  $("#profileDues").hide()
  $("#profileContactForm").show()
})