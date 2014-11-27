WeDesign.Views.ChallengeDesignsIndex = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-designs-index'],
	
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render)
	},
	
	addDesignItem: function (design) {
		var designItemShow = new WeDesign.Views.ChallengeDesignsIndexItem({
			model: design
		});
		this.addSubview('.designs', designItemShow);
	},
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.renderDesigns();
		this.attachSubviews();
		return this;
	},
	
	renderDesigns: function () {
		var designs = this.collection.models;
		_(designs).each( function (design) {
			this.addDesignItem(design);
		}.bind(this));
	}

});
