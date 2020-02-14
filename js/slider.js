$("#slider").slider({
    change: function() {
        var value = $("#slider").slider("option","value");
        $("#slider").find(".ui-slider-handle").text(value);
    },
    slide: function() {
        var value = $("#slider").slider("option","value");
        $("#slider").find(".ui-slider-handle").text(value);
    }
});