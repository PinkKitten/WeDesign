WeDesign.Views.ChallengeDesignShowPreOrders = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-preorders'],
	
	initialize: function () {
		this.listenTo(this.model.preOrders(), 'add', this.addPreOrder)
		this.renderPreOrders();
	},
	
	addPreOrder: function (preOrder) {
		var preOrderShow = new WeDesign.Views.ChallengeDesignShowPreOrderUser({
			model: preOrder
		});
		this.addSubview('.list-pre-order-users', preOrderShow);
	},
	
	render: function () {
		var content = this.template({
			design: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},
	
	renderPreOrders: function () {
		var preOrders = this.model.preOrders().models;
		_(preOrders).each( function (preOrder) {
			this.addPreOrder(preOrder);
		}.bind(this));
	}

});
