WeDesign.Models.Design = Backbone.Model.extend({
	
	urlRoot: "/api/designs",
	
	preOrders: function() {
		if(!this._preOrders) {
			this._preOrders = new WeDesign.Collections.Votes([], { design: this });
		}
		return this._preOrders;
	},
	
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
	
	currentUser: function() {
		if(!this._currentUser) {
			this._currentUser = new WeDesign.Models.User({});
		}
		return this._currentUser;
	},
	
	parse: function(resp) {
		if (resp.preOrders) {
			this.preOrders().set(resp.preOrders);
			delete resp.preOrders;
		}
		if (resp.preOrderUsers) {
			this.preOrderUsers().set(resp.preOrderUsers);
			delete resp.preOrderUsers;
		}
		if (resp.comments) {
			this.comments().set(resp.comments, { parse: true });
			delete resp.comments;
		}
		if (resp.designer) {
			this.designer().set(resp.designer);
			delete resp.designer;
		}
		if (resp.currentUser) {
			this.currentUser().set(resp.currentUser);
			delete resp.currentUser;
		}
		return resp;
	},
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.id;
		delete json.created_at;
		delete json.updated_at;
		return json;
	}
	
});
