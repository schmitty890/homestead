$("#profileUpdate").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").show()
})
$("#profilePostEvent").on("click", function() {
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileEventForm").show()
})
$("#profilePostClass").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileResForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileClassForm").show()
})
$("#profilePostRes").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileContactForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileResForm").show()
})
$("#profileContact").on("click", function() {
  $("#profileEventForm").hide()
  $("#profileClassForm").hide()
  $("#profileResForm").hide()
  $("#profileUpdateForm").hide()
  $("#profileContactForm").show()
})