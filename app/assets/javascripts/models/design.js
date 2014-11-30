WeDesign.Models.Design = Backbone.Model.extend({
	
	urlRoot: "/api/designs",
	
	preOrderUsers: function() {
		if(!this._preOrderUsers) {
			this._preOrderUsers = new WeDesign.Collections.Users([], { design: this });
		}
		return this._preOrderUsers;
	},
	
	comments: function() {
		if(!this._comments) {
			this._comments = new WeDesign.Collections.Comments([], { design: this });
		}
		return this._comments;
	},
	
	designer: function() {
		if(!this._designer) {
			this._designer = new WeDesign.Models.User({});
		}
		return this._designer;
	},
	
	parse: function(resp) {

		if (resp.preOrderUsers) {
			this.preOrderUsers().set(resp.preOrderUsers);
			delete resp.preOrderUsers;
		}
		if (resp.comments) {
			this.comments().set(resp.comments);
			delete resp.comments;
		}
		if (resp.designer) {
			this.designer().set(resp.designer);
			delete resp.designer;
		}
		return resp;
	}
	
});
