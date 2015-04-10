Router.route('/', function () {
  this.render('Home');
});

Router.route('/outer', function () {
  this.render('Outer');
});

if (Meteor.isClient) {
  Template.Foo.rendered = function() {
    // $.data(this.firstNode, 'zol', 'here');
    // $.data($('.foo').get(0), 'zol', 'here');
    
    var $el = $('.foo');
    $el.packery({
        itemSelector: ".plateitem",
        columnWidth: 2,
        rowHeight: 2
    });
    
  }
  
  Template.Foo.destroyed = function() {
    // // this.firstNode is null here
    // console.log('data is');
    // console.log($.data($('.foo').get(0)));
    
    var $el = $('.foo');
    $el.packery('destroy');
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
