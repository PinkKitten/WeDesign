WeDesign.Views.ChallengeDesignsIndex = Backbone.CompositeView.extend({
	tagName: "div",
	className: "clearfix submitted-designs-row",	
	
  template: JST['designs/challenge-designs-index'],
	
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
		this.currentIdx = 0;
	},
	
	events: {
		'click div.design-thumbnail': 'showDesign',
		'click .glyphicon': 'moveCarousel'
	},
	
	moveCarousel: function (event) {
		var target = $(event.currentTarget);
		if(target.hasClass('glyphicon-chevron-left')) {
			this.currentIdx -= 1;
		} else {
			this.currentIdx += 1;
		}
		this.fillDesigns();
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
		// this.renderDesigns();
		this.fillDesigns();
		this.attachSubviews();
		return this;
	},
	
	// renderDesigns: function () {
	// 	var designs = this.collection.models;
	// 	_(designs).each( function (design) {
	// 		this.addDesignItem(design);
	// 	}.bind(this));
	// },
	
	showDesign: function(event) {
		var $target = $(event.currentTarget);
		var id = $target.attr('data-id');
		var design = this.collection.get(id);
		Backbone.history.navigate("api/challenges/" + design.get('challenge_id') + "/designs/" + id, { trigger: true })
	},
	
	fillDesigns: function () {
		this.$el.find('div.challenges-design-index-item').remove();
		var allDesigns = $(this.collection.models);
		var len = allDesigns.length - 1;
		
		if(this.currentIdx > len) {
			this.currentIdx = 0;
		} else if (this.currentIdx < 0) {
			this.currentIdx = len; 
		}
		
  	for (var i = this.currentIdx; i < this.currentIdx + 6; i++) {
			var pos = i;
			if(pos > len) {
				pos = 0 + (pos - len - 1);
			} else if (pos < 0) {
				pos = len + (pos + 1); 
			}
			this.addDesignItem(allDesigns[pos]);
  	};
	}

});
