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
		this.fillDesigns();
		return this;
	},
	
	renderDesigns: function () {
		var designViews = new WeDesign.Views.ChallengeDesignsIndex({
			collection: this.model.designs()
		});
		this.addSubview('.submitted-designs', designViews);
	},
	
	fillDesigns: function () {
		this.$designs = this.$el.find('div.challenges-design-index-item');
	  this.$el.find('div.challenges-design-index-item').remove();
	  	for (var i = 0; i < 6; i++) {
	    	this.$el.find('.submitted-designs .designs').append(this.$designs[i]);
	  	};
		}
		
})