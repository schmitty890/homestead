//the Test Module is a namespaced function to what feature of the site this function powers
var Test = function(){
  var aTestVariable = 'test!';

  //another function private to Module
  function privateFunction(){
    //this can log the 'aTestVariable' because it is defined outside of this Module function, but aTestVariable is kept private to this Module
    if (aTestVariable === 'test') {
      console.log(aTestVariable);
    }

  }

  //this init function initializes the functions ran
  function init() {
    privateFunction();
  }

  //return the init function, assign it to init so it can be used outside of this Module as Test.init();
  return {
    init: init,
    privateFunction: privateFunction
  }

}(); //self invoke the Module so it can be called later

//how we call the Test Module to execute its functions
Test.init();
