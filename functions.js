function typeText(element, text, delay=100, time=1, erase=true){
    setTimeout(function(){
        if(erase){
            $(element).html("");
        }
        let initialText = $(element).html();
        let i = 0;
        const textInterval = setInterval(function(){
            $(element).html($(element).html()+text[i]);
            i++;
            if($(element).html().length == text.length+initialText.length){
                clearInterval(textInterval);
                return true;
            }
        }, delay);
    }, time);
}