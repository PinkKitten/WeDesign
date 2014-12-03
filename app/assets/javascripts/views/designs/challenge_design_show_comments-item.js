WeDesign.Views.ChallengeDesignShowCommentsItem = Backbone.CompositeView.extend({
	tagName: "div",
	className: "comments-container",	
	
  template: JST['designs/challenge-design-show-comments-item'],
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync', this.render);
		this.currentUser = options.currentUser;
	},
	
	render: function () {
		var a = moment(this.model.get('created_at'));
		var b = moment(Date.now());
		var timestamp = a.from(b);
		var author = this.model.author();
		if (author.get('name') === undefined ) {
			author = this.currentUser
		}
		var content = this.template({
			author: author,
			comment: this.model,
			timestamp: timestamp
		});
		this.$el.html(content);
		return this;
	}

});
