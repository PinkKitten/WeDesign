WeDesign.Views.ChallengeDesignShowCommentsItem = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-comments-item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		return this;
	}

});
