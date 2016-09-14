import $ from 'jquery';
import Marionette from 'backbone.marionette';
//import MainController from 'controllers/MainController';

// Create a Controller, giving it the callbacks for MainRouter.
var MyController = {
  initialize: function(){
    console.log("init MyController");
  },
  home: function() {
	  console.log("home");
  },
  profile: function() {
	  console.log("profile");
  }
};

export default Marionette.AppRouter.extend({
  controller: MyController,
  
  appRoutes: {
    "home": "home",
    "profile": "profile"
  },
  
  routes: {
	"home2" : "home2"
  },
  
  initialize: function(){
    console.log("init router");
  },
  
  home2: function() {
	console.log("home2");
  },
  
  onRoute: function(name, path, routeArgs) {
	  console.log("Name = " + name);
  }
  
});