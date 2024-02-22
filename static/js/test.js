$(function() {
    $("#slider").draggable({
        axis: "x",
        containment: "parent",
        drag: function(event, ui) {
            $("#image2").css("clip", "rect(0, " + ui.position.left + "px, 320px, 0)");
        }
    });
});