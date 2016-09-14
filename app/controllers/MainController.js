import Marionette from 'backbone.marionette';

// Create a Controller, giving it the callbacks for MainRouter.
export default Marionette.Controller.extend({
  home: function() {
	  console.log("home");
  },
  profile: function() {
	  console.log("profile");
  }
});