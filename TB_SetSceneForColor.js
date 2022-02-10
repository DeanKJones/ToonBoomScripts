function setSceneToColor()
{
    // Create New Dialog
    d = new Dialog();
    d.title = "Set Scene For Color Art";
    d.okButtonText = "Let's go";
    d.cancelButtonText = "I'm not ready";

    var header = new Label();
    header.text = "Duplicate pencil strokes to Overlay and create Color Art";
    d.add(header);

    d.addSpace(10);

    /*  Get the Element ID of the desired drawing node */
    var numOfElements = element.numberOf();
    var elementPos;
    var userInput;

    if(numOfElements > 1) {
        userInput = new LineEdit();
        userInput.label = "Element Name: "
        d.add(userInput);
    } 
    else {
        elementPos = 0;
    }

    /* Execute Operations */
    var rc = d.exec();
    if (rc) {
        // Get Elements
        if(numOfElements > 1){
            for (i = 0; i != numOfElements; i++) {
                var elementId = element.id(i);
                var elementName = element.getNameById(elementId);
        
                elementName = String(elementName);
        
                if (elementName == userInput.text) {
                    elementPos = i;
                }
            }
        }
        var elementId = element.id(elementPos.value);
        var elementName = element.getNameById(elementId);

        // Get Drawings
        var numOfDrawings = Drawing.numberOf(elementId);

        // Do Duplicate
        for (i = 0; i != numOfDrawings; i++) {
            frame.setCurrent(i);
            copyLineToOverlay();
        }
        // Do Convert
        for (i = 0; i != numOfDrawings; i++) {
            frame.setCurrent(i);
            convertPencilToBrush();
        }
        // Do Color Art
        for (i = 0; i != numOfDrawings; i++) {
            frame.setCurrent(i);
            createColorArtLayer();
        }
    }
}

function copyLineToOverlay()
{
   /*   Set the desired art layer
    *    1 = Underlay
    *    2 = Color Art
    *    4 = Line Art
    *    8 = Overlay           */
    DrawingTools.setCurrentArt(4);

    //Selects all the content of the Line Art and Copies the selection
    Action.perform("selectAll()", "cameraView,drawingView");
    Action.perform("copy()", "cameraView,drawingView");

    //Sets the Colour Art as the currently selected art layer.
    DrawingTools.setCurrentArt(8);

    //Pastes the selection in the Colour art
    Action.perform("paste()", "cameraView,drawingView");
    DrawingTools.setCurrentArt(4);
}

function convertPencilToBrush()
{
    // Set Line Art as current layer
    DrawingTools.setCurrentArt(4);
    Action.perform("selectAll()", "cameraView,drawingView");

    // Converts Pencil Lines to Brush Strokes
    Action.perform("onActionPencilToBrush()", "cameraView,drawingView");
}

function createColorArtLayer()
{
    // Set Line Art as current layer
    DrawingTools.setCurrentArt(4);
    Action.perform("selectAll()", "cameraView,drawingView");

    // Create Color Art 
    Action.perform("onActionLineArtToColorArt()", "cameraView,drawingView");
}