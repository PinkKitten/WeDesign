WeDesign.Models.Challenge = Backbone.Model.extend({
	urlRoot: "/api/challenges",
	
	designs: function() {
		if(!this._designs) {
			this._designs = new WeDesign.Collections.Designs([], { challenge: this });
		}
		return this._designs;
	},
	
	parse: function(resp) {
		if (resp.designs) {
			this.designs().set(resp.designs);
			delete resp.designs;
		}
		return resp;
	}
	
});
