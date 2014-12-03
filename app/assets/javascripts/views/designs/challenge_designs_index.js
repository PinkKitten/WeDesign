WeDesign.Views.ChallengeDesignsIndex = Backbone.CompositeView.extend({
	tagName: "div",
	className: "clearfix submitted-designs-row",	
	
  template: JST['designs/challenge-designs-index'],
	
	initialize: function (options) {
		// this.listenTo(this.collection, 'sync', this.render);
		this.challenge = options.challenge;
		this.listenTo(this.collection, 'add', this.addDesignItem);
		this.currentIdx = 0;
		this.collection.each(this.addDesignItem.bind(this));
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
		//can just call design.collection instead of passing in challenge
		var designItemShow = new WeDesign.Views.ChallengeDesignsIndexItem({
			challenge: this.challenge,
			model: design
		});
		this.addSubview('.designs', designItemShow);
		this.fillDesigns();
	},
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		// this.renderDesigns();
		// this.attachSubviews();
		// this.attachDesigns();
		return this;
	},
	
	// attachDesigns: function(){
	// 	var count = 0;
	// 	while(count < 6 && (count < this.collection.length - 1)){
	// 		var designView = this.subviews('.designs')[count];
	// 		this.attachSubview(designView);
	// 		count++;
	// 	}
	// },
	
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
		Backbone.history.navigate("challenges/" + design.get('challenge_id') + "/designs/" + id, { trigger: true })
	},
	
	fillDesigns: function () {
		var count = 2;
		var allDesigns = this.$el.find('div.challenges-design-index-item');
		var len = allDesigns.length;

		if (len === 0) {
			return;
		}

		if(this.currentIdx > len - 1) {
			this.currentIdx -= 1;
			return;
		} else if (this.currentIdx < 0) {
			this.currentIdx += 1;
			return;
		}
		
		if(len - this.currentIdx < count) {
			return;
		}
		
	  allDesigns.addClass('in-active');
		
		var range = (len < count) ? len : count;

	  	for (var i = this.currentIdx; i < this.currentIdx + range; i++) {
			var pos = i;
			$(allDesigns[pos]).removeClass('in-active');
	  };
	}

});
