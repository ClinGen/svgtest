function getSubDocument(embedding_element) {
    if (embedding_element.contentDocument) {
        return embedding_element.contentDocument;
    } else {
        var subdoc = null;
        try {
            subdoc = embedding_element.getSVGDocument();
        } catch(e) {}
        return subdoc;
    }
}

function mouseEnterSt0() {
    this.className.baseVal += " st0-over";
}
function mouseExitSt0() {
    this.className.baseVal = "st0";
}

function mouseEnterSt2() {
    this.className.baseVal += " st2-over";
}
function mouseExitSt2() {
    this.className.baseVal = "st2";
}


function mouseEnterSt5() {
    this.className.baseVal += " st5-over";
}
function mouseExitSt5() {
    this.className.baseVal = "st5";
}


$(window).load(function() {
    var svgObj = document.querySelectorAll(".system-map");
    for (var i = 0; i < svgObj.length; i++) {
        var svgDoc = getSubDocument(svgObj[i]);

        // Handle hover in Core Team circle
        var svgItem = svgDoc.getElementById('core-team');
        svgItem.addEventListener("mouseover", mouseEnterSt0);
        svgItem.addEventListener("mouseout", mouseExitSt0);

        // Handle hover in Medical Team arc
        svgItem = svgDoc.getElementById('medical-team');
        svgItem.addEventListener("mouseover", mouseEnterSt2);
        svgItem.addEventListener("mouseout", mouseExitSt2);

        // Handle hover in Lab Support arc
        svgItem = svgDoc.getElementById('lab-support');
        svgItem.addEventListener("mouseover", mouseEnterSt2);
        svgItem.addEventListener("mouseout", mouseExitSt2);

        // Handle hover in Patient Advocacy arc
        svgItem = svgDoc.getElementById('patient-advocacy');
        svgItem.addEventListener("mouseover", mouseEnterSt5);
        svgItem.addEventListener("mouseout", mouseExitSt5);
    }
});