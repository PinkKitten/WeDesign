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
			this.designs().set(resp.designs, {parse: true});
			delete resp.designs;
		}
		return resp;
	},
	
	challengeRanks: function () {
		var allPreOrders = 0;
		var designs = this.designs();
		designs.forEach(function(design) {
			allPreOrders += design.preOrderUsers().length;
		});
		designs.forEach(function(design) {
			var rank = design.preOrderUsers().length / allPreOrders;
			design._percentVotes = rank;
		})
	},
	
});
