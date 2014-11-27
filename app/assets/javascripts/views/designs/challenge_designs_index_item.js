WeDesign.Views.ChallengeDesignsIndexItem = Backbone.View.extend({
	tagName: "div",
	className: "challenges-design-index-item",
  template: JST['designs/challenge-designs-index-item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	render: function () {
		var content = this.template({
			design: this.model
		});
		this.$el.html(content);
		return this;
	}

});
