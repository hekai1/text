define(['jquery', 'handlebars'], function($, handlebars) {
    $.ajax({
        url: '/api/get',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var tpl = $('#tpl').html();
            var template = handlebars.compile(tpl);
            var html = template(data);
            $('.wrap').html(html);
        },
        error: function(err) {
            console.warn(err);
        }
    })
})