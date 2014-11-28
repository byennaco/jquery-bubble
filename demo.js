$(document).ready(function() {

    $("#target1, #target2, #target3")
        .draggable()
        .bubble({ editable:true });

    $("#dynamic")
        .draggable()
        .bubble({
             title: "Dynamic Content",
             content: "Bubble markup not preset in HTML.  Instead title and content are passed as options when the bubble widget is invoked."
         });

    $("#dynamic2")
        .draggable()
        .bubble({
             ajax: "example.json"
         });

    // Event handler for bubble change event
    $(document).on("bubblechanged", ".ui-bubbleable", function(event, target, title, content) {
        // Do something with updated title and content for bubble associated with the specified target.
    });

});
