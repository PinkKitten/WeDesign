WeDesign.Views.ChallengesShow = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "",	
	template: JST['challenges/show'],
	
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