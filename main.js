function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kxsNXUoJX/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML="Detected Voice is of - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence * 100).toFixed(2) + " %"
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
    bark="bark.gif";
    moo="Moo.gif";
    roar="Roar.gif";
    meow="meow.gif";

        if(results[0].label==Barking){
            document.getElementById("sound").src=bark;
        }
        if(results[0].label==Roaring){
            document.getElementById("sound").src=roar;
        }
        if(results[0].label==Mooing){
            document.getElementById("sound").src=moo;
        }
        if(results[0].label==Meowing){
            document.getElementById("sound").src=meow;
        }
    }
}