WeDesign.Views.ChallengeDesignShowComments = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-comments'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	addComment: function (comment) {
		var commentShow = new WeDesign.Views.ChallengeDesignShowCommentsItem({
			model: comment
		});
		this.addSubview('.list-comments', commentShow);
	},
	
	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		this.renderComments();
		return this;
	},
	
	renderComments: function () {
		var comments = this.model.comments().models;
		_(comments).each( function (comment) {
			this.addComment(comment);
		}.bind(this));
	}

});
