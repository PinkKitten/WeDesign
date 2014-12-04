WeDesign.Views.CollectionShow = Backbone.View.extend({
	tagName: 'div',
	className: 'wrapper',
  template: JST['collection/show'],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
});


