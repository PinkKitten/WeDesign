WeDesign.Views.ChallengeDesignShowPreOrderUser = Backbone.CompositeView.extend({
	tagName: "div",
	className: "user-container",	
	
  template: JST['designs/challenge-design-show-preorder-user'],
	
	render: function () {
		var content = this.template({
			user: this.model
		})
		this.$el.html(content);
		return this;
	},
	
});
