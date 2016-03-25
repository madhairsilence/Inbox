(function ($) {
  module('jQuery.Inbox');

  test('is Inbox', function () {
    expect(2);
    strictEqual($('#test').Inbox(), 'Inbox.', 'should be Inbox');
    strictEqual($('#test').Inbox({punctuation: '!'}), 'Inbox!', 'should be thoroughly Inbox');
  });
  
}(jQuery));
