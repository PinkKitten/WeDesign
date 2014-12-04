WeDesign.Views.ChallengeDesignShowPreOrderUser = Backbone.CompositeView.extend({
	tagName: "div",
	className: "user-container",	
	
  template: JST['designs/challenge-design-show-preorder-user'],
	
	initialize: function (options) {
		this.currentUser = options.currentUser
	},
	
	render: function () {
		var a = moment(this.model.get('created_at'));
		var b = moment(Date.now());
		var timestamp = a.from(b);
		var user = this.model.user();
		if (user.get('name') === undefined ) {
			user = this.currentUser
		}
		var content = this.template({
			preOrder: this.model,
			timestamp: timestamp,
			user: user
		})
		this.$el.html(content);
		return this;
	},
	
});
