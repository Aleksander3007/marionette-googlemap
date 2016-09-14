import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
//import ItemView from './ItemView';
import RootView from './RootView';
import MainRouter from 'routes/MainRouter';

export default Marionette.Application.extend({
  regions: {
    app: '#app'
  },
  
  initialize() {
    this.on('start', () => {
		if (Backbone.history)
			Backbone.history.start();
		this.getRegion('app').show(new RootView());
		
		if (Backbone.history.fragment == "") {
			Backbone.history.navigate("home", {trigger: true});
		}
		
		console.log("app.start");
    })
	
	this.addInitializer(() => {
		return new MainRouter();
	});
  }

});
