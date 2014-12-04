WeDesign.Views.ChallengeDesignShowPreOrderUser = Backbone.CompositeView.extend({
	tagName: "div",
	className: "user-container",	
	
  template: JST['designs/challenge-design-show-preorder-user'],
	
	render: function () {
		var a = moment(this.model.get('created_at'));
		var b = moment(Date.now());
		var timestamp = a.from(b);
		
		var content = this.template({
			user: this.model,
			timestamp: timestamp
		})
		this.$el.html(content);
		return this;
	},
	
});
