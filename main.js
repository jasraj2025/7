function start(){
    navigator.mediaDevices.getDisplayMedia({audio: true});
    classifire = ml5.soundClassifire('link' , modelRedy);
}

function modelRedy(){
    classifier.classify(gotRezult);
}
