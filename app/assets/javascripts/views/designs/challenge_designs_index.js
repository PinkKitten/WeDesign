WeDesign.Views.ChallengeDesignsIndex = Backbone.CompositeView.extend({
	tagName: "div",
	className: "clearfix submitted-designs-row",	
	
  template: JST['designs/challenge-designs-index'],
	
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render)
	},
	
	events: {
		'click div.design-thumbnail': 'showDesign',
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
	},
	
	showDesign: function(event) {
		var $target = $(event.currentTarget);
		var id = $target.attr('data-id');
		var design = this.collection.get(id);
		Backbone.history.navigate("api/challenges/" + design.get('challenge_id') + "/designs/" + id, { trigger: true })
	}

});
