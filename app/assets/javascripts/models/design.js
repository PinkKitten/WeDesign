WeDesign.Models.Design = Backbone.Model.extend({
	
	urlRoot: "/api/designs",
	
	preOrderUsers: function() {
		if(!this._preOrderUsers) {
			this._preOrderUsers = new WeDesign.Collections.Users([], { design: this });
		}
		return this._preOrderUsers;
	},
	
	parse: function(resp) {
		if (resp.preOrderUsers) {
			this.preOrderUsers().set(resp.preOrderUsers);
			delete resp.preOrderUsers;
		}
		return resp;
	}
	
});
