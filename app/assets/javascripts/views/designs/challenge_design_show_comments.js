WeDesign.Views.ChallengeDesignShowComments = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-comments'],
	
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
