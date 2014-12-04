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
			model: preOrder,
			currentUser: this.model.currentUser()
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
		preOrders.sort(function (a, b) {
		  if (a.get('created_at') > b.get('created_at')) {
		    return -1;
		  }
		  if (a.get('created_at') < b.get('created_at')) {
		    return 1;
		  }
		  return 0;
		});
		
		_(preOrders).each( function (preOrder) {
			this.addPreOrder(preOrder);
		}.bind(this));
	}

});
