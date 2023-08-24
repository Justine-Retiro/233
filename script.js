function change(){
    document.getElementById("img-holder").src = "2.jpg"

    let newLink = document.getElementsByTagName('a')[0];
    newLink.innerHTML = "NEW LINK DROP??";
    newLink.href = "https://tiktok.com";

    let txtchange = document.querySelector('a');
    txtchange.style.color = 'red';
    txtchange.style.fontWeight = '400';

    let titleChange = document.getElementById('title-head');
    titleChange.innerHTML = "NOOOO WAYYY?!"
}