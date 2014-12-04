WeDesign.Views.ChallengeDesignShowPreOrderUser = Backbone.CompositeView.extend({
	tagName: "div",
	className: "user-container",	
	
  template: JST['designs/challenge-design-show-preorder-user'],
	
	render: function () {
		var a = moment(this.model.get('created_at'));
		var b = moment(Date.now());
		var timestamp = a.from(b);
		
		var content = this.template({
			preOrder: this.model,
			timestamp: timestamp,
			user: this.model.user(),
		})
		this.$el.html(content);
		return this;
	},
	
});
