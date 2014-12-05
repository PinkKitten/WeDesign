WeDesign.Models.Challenge = Backbone.Model.extend({
	urlRoot: "/api/challenges",
	
	designs: function() {
		if(!this._designs) {
			this._designs = new WeDesign.Collections.Designs([], { challenge: this });
		}
		return this._designs;
	},
	
	currentUser: function() {
		if(!this._currentUser) {
			this._currentUser = new WeDesign.Models.User({});
		}
		return this._currentUser;
	},
	
	parse: function(resp) {
		if (resp.designs) {
			this.designs().set(resp.designs, {parse: true});
			delete resp.designs;
		}
		if (resp.currentUser) {
			this.currentUser().set(resp.currentUser);
			delete resp.currentUser;
		}
		return resp;
	},
	
});
