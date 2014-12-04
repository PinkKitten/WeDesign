WeDesign.Models.Vote = Backbone.Model.extend({
	urlRoot: "/api/votes",
	
	toJSON: function () {
		var json = Backbone.Model.prototype.toJSON.call(this);
		delete json.id;
		delete json.created_at;
		delete json.updated_at;
		return json;
	},
	
	user: function() {
		if(!this._user) {
			this._user = new WeDesign.Models.User({});
		}
		return this._user;
	},
	
	parse: function(resp) {
		if (resp.user) {
			this.user().set(resp.user);
			delete resp.user;
		}
		return resp;
	}
});
