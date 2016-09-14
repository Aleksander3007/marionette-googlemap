import Marionette from 'backbone.marionette';
import profileTemplate from 'templates/profile';

export default Marionette.ItemView.extend ({
	template: profileTemplate,
	
	ui: {
		settingButton: '#setting-button'
	},
  
	events: {
    'click @ui.settingButton': 'clickedButton'
	},

	clickedButton: function() {
		console.log('I clicked the button!');
	}
  
});