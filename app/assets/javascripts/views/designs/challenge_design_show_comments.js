WeDesign.Views.ChallengeDesignShowComments = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-comments'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	events: {
		'submit': 'addNewComment'
	},
	
	addComment: function (comment) {
		var commentShow = new WeDesign.Views.ChallengeDesignShowCommentsItem({
			model: comment,
			currentUser: this.model.currentUser()
		});
		this.addSubview('.list-comments', commentShow);
	},
	
	addNewComment: function (event) {
		event.preventDefault();
		var target = $(event.currentTarget).find('form');
		var attr = target.serializeJSON();
		var comment = new WeDesign.Models.Comment(attr['comment']);
		comment.set({
			design_id: this.model.id
		});
		comment.save({}, {
			success: function () {
				this.model.comments().set(comment, {remove: false} );
				this.render();
				$('.comments-count').html(this.model.comments().length);
			}.bind(this)
		})
	},
	
	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		this.renderComments();
		this.renderNew();
		return this;
	},
	
	renderComments: function () {
		var comments = this.model.comments().models;
		comments.sort(function (a, b) {
		  if (a.get('created_at') > b.get('created_at')) {
		    return -1;
		  }
		  if (a.get('created_at') < b.get('created_at')) {
		    return 1;
		  }
		  return 0;
		});
		
		_(comments).each( function (comment) {
			this.addComment(comment);
		}.bind(this));
	},
	
	renderNew: function () {
		var newView = new WeDesign.Views.CommentNew();
		this.$el.find('.new-comment-form').html(newView.render().$el)
	}

});
