WeDesign.Views.CommentNew = Backbone.View.extend({

  template: JST['comments/new'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}

});
