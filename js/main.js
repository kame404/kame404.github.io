(function($){
    $(function() {
 
        var rBox = [];
        $('.item').each(function() {
            rBox.push($(this).html());
        });
        rBox.sort(function() {
            return Math.random() - Math.random();
        });
        $('.item').empty();
         
        i = 0;
        $('.item').each(function() {
            $(this).append(rBox[i]);
            i++;
        });
 
    });
})(jQuery);