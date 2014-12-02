WeDesign.Views.ChallengesShow = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "",	
	template: JST['challenges/show'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.currentIdx = 0;
	},
	
	events: {
		'click div.submit-design': 'renderSubmit',
		'submit': 'addNewDesign',
		// 'blur .submission-form': 'closeNewSubmission',
	},
	
	addNewDesign: function (event) {
		// event.preventDefault();
		var imageData = $('.image-editor').cropit('export');
		var target = $(event.currentTarget).find('form');
		var attr = target.serializeJSON();
		var model = new WeDesign.Models.Design(attr['design']);
		model.set({
			design_img: imageData,
			challenge_id: this.model.id
		});
		model.save({}, {
		
		});
		this.closeNewSubmission();
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
		this.model.challengeRanks();
		return this;
	},
	
	renderDesigns: function () {
		var designViews = new WeDesign.Views.ChallengeDesignsIndex({
			collection: this.model.designs(),
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
	
});

$(function() {
  $('.image-editor').cropit({
    imageState: {
      src: 'http://lorempixel.com/500/400/'
    }
  });
});