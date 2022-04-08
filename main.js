function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fsNgft00X/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'i can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');
        img4 = document.getElementById('alien5');

        if (results[0].label == "Clapping") {
            img.src = 'alien-1.gif';
            img1.src = 'alien2.png';
            img2.src = 'alien3.png';
            img3.src = 'alien4.png';
            img4.src = 'alien5.png';
        } else if (results[0].label == "Laughing") {
            img.src = 'alien1.png';
            img1.src = 'alien-2.gif';
            img2.src = 'alien3.png';
            img3.src = 'alien4.png';
            img4.src = 'alien5.png';
        } else if (results[0].label == "Snapping") {
            img.src = 'alien1.png';
            img1.src = 'alien2.png';
            img2.src = 'alien-3.gif';
            img3.src = 'alien4.png';
            img4.src = 'alien5.png';
        } else if (results[0].label == "Weird Sounds") {
            img.src = 'alien1.png';
            img1.src = 'alien2.png';
            img2.src = 'alien3.png';
            img3.src = 'alien-4.gif';
            img4.src = 'alien5.png';
        } else if (results[0].label == "Backgroud Noise") {
            img.src = 'alien1.png';
            img1.src = 'alien2.png';
            img2.src = 'alien3.png';
            img3.src = 'alien4.png';
            img4.src = 'alien-5.gif';
        }
    }
}