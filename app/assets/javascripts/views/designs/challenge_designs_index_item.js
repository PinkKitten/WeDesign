WeDesign.Views.ChallengeDesignsIndexItem = Backbone.View.extend({
	tagName: "div",
	className: "challenges-design-index-item",
  template: JST['designs/challenge-designs-index-item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	render: function () {
		debugger
		var designPreOrders = this.model.preOrderUsers().length;
		var content = this.template({
			design: this.model,
			designPreOrders: designPreOrders,
			designer: this.model.designer()
		});
		this.$el.html(content);
		return this;
	}

});
