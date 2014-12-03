WeDesign.Views.ChallengeDesignsIndexItem = Backbone.View.extend({
	tagName: "div",
	className: "challenges-design-index-item",
  template: JST['designs/challenge-designs-index-item'],
	
	initialize: function (options) {
		this.challenge = options.challenge;
		this.listenTo(this.challenge, 'sync', this.render)
		this.listenTo(this.model, 'sync', this.render)
	},
	
	render: function () {
		this.challenge.challengeRanks();
		debugger
		var designPreOrders = this.model.preOrders().length;
		var content = this.template({
			design: this.model,
			designPreOrders: designPreOrders,
			designer: this.model.designer()
		});
		this.$el.html(content);
		return this;
	},

});
