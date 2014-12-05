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
		var designPreOrders = this.model.preOrders().length;
		var designer = this.model.designer();
		if (designer.get('name') === undefined ) {
			designer = this.challenge.currentUser();
		}
		var content = this.template({
			design: this.model,
			designPreOrders: designPreOrders,
			designer: designer
		});
		this.$el.html(content);
		return this;
	},

});
