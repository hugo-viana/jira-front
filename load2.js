function loadTextFileAjaxSync(filePath, mimeType){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",filePath,false);
    if (mimeType != null) {
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType(mimeType);
        }
    }
    xmlhttp.send();
    if (xmlhttp.status==200 && xmlhttp.readyState == 4 ) {
        return xmlhttp.responseText;
    }
    else {
        return null;
    }
}

function getJSON(request_url) {
    var json = loadTextFileAjaxSync(request_url, "application/json");
    return JSON.parse(json)
}
