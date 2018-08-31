/* Unlike the HTML5 canvas, the SVG canvas is by definition scalable.
This function may be very hamdy when using mouse events on SVG*/

function getMousePositionSVG(event) {
var point = this.createSVGPoint();
point.x = event.clientX;
point.y = event.clientY;
point = point.matrixTransform(this.getScreenCTM().inverse());
// console.clear();
// console.log(point.x, point.y);
return point;
}


/*how to use*/
svg.addEventListener("mousemove", getMousePositionSVG, false)
