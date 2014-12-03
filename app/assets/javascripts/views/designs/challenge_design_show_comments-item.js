WeDesign.Views.ChallengeDesignShowCommentsItem = Backbone.CompositeView.extend({
	tagName: "div",
	className: "comments-container",	
	
  template: JST['designs/challenge-design-show-comments-item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	render: function () {
		var a = moment(this.model.get('created_at'));
		var b = moment(Date.now());
		var timestamp = a.from(b);
		var content = this.template({
			author: this.model.author(),
			comment: this.model,
			timestamp: timestamp
		});
		this.$el.html(content);
		return this;
	}

});
