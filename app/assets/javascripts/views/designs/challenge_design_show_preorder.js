WeDesign.Views.ChallengeDesignShowPreOrders = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-preorders'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	addPreOrderUser: function (preOrderUser) {
		var preOrderUserShow = new WeDesign.Views.ChallengeDesignShowPreOrderUser({
			model: preOrderUser
		});
		this.addSubview('.list-pre-order-users', preOrderUserShow);
	},
	
	render: function () {
		var content = this.template({
			design: this.model
		});
		this.$el.html(content);
		this.renderPreOrderUsers();
		return this;
	},
	
	renderPreOrderUsers: function () {
		var preOrderUsers = this.model.preOrderUsers().models;
		_(preOrderUsers).each( function (preOrderUser) {
			this.addPreOrderUser(preOrderUser);
		}.bind(this));
	}

});
