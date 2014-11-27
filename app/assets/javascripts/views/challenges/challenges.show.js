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
		this.remove();
		this.renderDesigns();
		this.attachSubviews();
		return this;
	},
	
	renderDesigns: function () {
		var designViews = new WeDesign.Views.ChallengeDesignsIndex({
			collection: this.model.designs()
		});
		this.addSubview('.submitted-designs', designViews);
	}
	
})