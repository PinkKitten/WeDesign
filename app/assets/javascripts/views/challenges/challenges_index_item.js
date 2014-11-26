WeDesign.Views.ChallengesIndexItem = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "challenges-index-item",	
	template: JST['challenges/index_item'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var content = this.template({
			challenge: this.model
		});
		this.$el.html(content);
		return this;
	}
	
})