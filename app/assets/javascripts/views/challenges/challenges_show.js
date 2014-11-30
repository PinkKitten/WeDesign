WeDesign.Views.ChallengesShow = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "",	
	template: JST['challenges/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		// debugger
		// this.$designs = this.$el.find('div.challenges-design-index-item');
	  // this.$el.find('div.challenges-design-index-item').remove();
		this.currentIdx = 0;
	},
	
	events: {
		'click div.submit-design': 'renderSubmit',
		'submit': 'addNewDesign',
		'blur .submission-form': 'closeNewSubmission',
	},
	
	addNewDesign: function (event) {
		
	},
	
	closeNewSubmission: function (event) {
		$('.submission-form').fadeOut(500, function() {
			 $( '.row' ).fadeTo( 500 , 1 , function () {
			 		$('div.submit-design').removeClass('disabled');
			 })
		})
	},
	
	render: function () {
		var content = this.template({
			challenge: this.model
		});
		this.$el.html(content);
		this.remove();
		this.renderDesigns();
		this.attachSubviews();
		// debugger
		// this.fillDesigns();
		return this;
	},
	
	renderDesigns: function () {
		var designViews = new WeDesign.Views.ChallengeDesignsIndex({
			collection: this.model.designs()
		});
		this.addSubview('.submitted-designs', designViews);
	},
	
	renderSubmit: function (event) {
		var target = $('div.submit-design');
		if (!target.hasClass('disabled')) {
			target.addClass('disabled')
			$('.row').fadeTo('slow', 0.3, function() {
				 $( ".submission-form" ).fadeIn( 1000 , function () {
					 $('#design_title').focus();
				 })
			})
		}
	},
	
	fillDesigns: function () {
		// this.$designs = this.$el.find('div.challenges-design-index-item');
		this.$el.find('div.challenges-design-index-item').remove();
		this.allDesigns = $(this.model.designs().models);
	  	for (var i = this.currentIdx; i < this.currentIdx + 6; i++) {
	    	this.$el.find('.submitted-designs .designs').append(this.allDesigns[i]);
	  	};
		}
		
})