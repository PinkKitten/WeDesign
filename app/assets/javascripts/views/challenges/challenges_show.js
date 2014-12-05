WeDesign.Views.ChallengesShow = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "wrapper",	
	template: JST['challenges/show'],
	
	initialize: function () {
		this.listenTo(this.model.designs(), 'add', this.render);
		this.listenTo(this.model, "sync", this.render);
		this.currentIdx = 0;
		this.addDesignsIndex();
	},
	
	events: {
		'click div.submit-design': 'renderSubmit',
		'submit': 'addNewDesign',
		'click .close-form': 'closeNewSubmission',
	},
	
	addNewDesign: function (event) {
		event.preventDefault();
		var target = $(event.currentTarget);
		var attr = target.find('form').serializeJSON();
		var design = new WeDesign.Models.Design(attr['design']);
		design.set({
			challenge_id: this.model.id
		});
		design.save({}, {
			success: function () {
				this.model.designs().set(design, {remove: false} );
				this.closeNewSubmission();
			}.bind(this)
		})
	},
	
	closeNewSubmission: function (event) {
		event && event.preventDefault();
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
		var $filePickerInput = this.$("input[type=filepicker]");
		filepicker.constructWidget($filePickerInput[0]);

		this.attachSubviews();
		return this;
	},
	
	addDesignsIndex: function () {
		var designViews = new WeDesign.Views.ChallengeDesignsIndex({
			challenge: this.model,
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
	
});

