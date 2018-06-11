/**
 * [Form.js is where we hold all the events for forms we use across our pages]
 */
var Form = function(){

  /**
   * [initDate. Our date fields should have an ID of #date. Any field with this id, will have the flatpickr calendar enabled on it
   * NOTE: There should not be more than one of the same ID on a form. if we need mulitple dates, create another id and add that handler here]
   */
  function initDate() {
    $("#date").flatpickr({
      enableTime: true,
      dateFormat: "Y-m-d H:i"
    });
  }

  /**
   * [init. list of all the functions we run when we initalize the module.]
   */
  function init() {
    initDate();
  }

  return {
    init: init
  }

}();

Form.init();
