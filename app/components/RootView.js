import $ from 'jquery';
import Marionette from 'backbone.marionette';
import rootViewTemplate from 'templates/root-view';
import ItemView from './ItemView';
import ProfileView from './ProfileView';

export default Marionette.LayoutView.extend({
  template: rootViewTemplate,

  regions: {
    profile: '#profile',
    userRouteManager: '#user-Route-Manager'
  },
  
  onRender: function(){
    this.getRegion('profile').show(new ProfileView());
	this.getRegion('userRouteManager').show(new ItemView());
  }
  
});