// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializejson.min
//= require jquery.cropit
//= require moment
//= require underscore
//= require backbone
//= require bootstrap
//= require underscore
//= require backbone
//= require we_design
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .


$.ShowForm = function (el) {
  this.$el = $(el);
	var that = this;
	this.$el.on('click', 'a.links', function (event) {
		event.preventDefault();
		var $target = $(event.currentTarget);
		that.fadeIn($target);
	})
};

$.fn.showForm = function () {
  return this.each(function () {
    new $.ShowForm(this);
  });
};

$.ShowForm.prototype.fadeIn = function ($target) {
	var $background = $(document.getElementById('catwalk-background'));
	var $contentTabs = this.$el.find('#session-form');
	if ($target.attr('id') === 'sign-in-link') {
		$('#my-tab a[href="#sign-in"]').tab('show');
	} else {
		$('#my-tab a[href="#sign-up"]').tab('show');
	}

	$background.fadeTo( 'slow', 0.6, function () {
		$contentTabs.fadeIn( 2000 , function () {
	 	})
	})
};
