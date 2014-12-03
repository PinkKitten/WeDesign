WeDesign.Models.Comment = Backbone.Model.extend({
	
	urlRoot: "api/comments",
	
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);
    delete json.id;
    delete json.created_at;
    delete json.updated_at;
    return json;
  },
	
	author: function() {
		if(!this._author) {
			this._author = new WeDesign.Models.User({});
		}
		return this._author;
	},
	
	parse: function(resp) {
		if (resp.author) {
			this.author().set(resp.author);
			delete resp.author;
		}
		return resp;
	}

});
