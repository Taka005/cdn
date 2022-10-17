class translate{
    get(text,lang){
        return new Promise((resolve, reject) => {
            if(text.length > 5000){
                throw new Error("The maximum number of translations is 5000 characters or less");
            }
            fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&dj=1&q=${encodeURIComponent(text)}`)
                .then(res => res.json())
                .then(res =>{
                    res.sentences.map((sentence)=>{
                        return sentence.trans
                    }).join("");
                })
                .then(resolve)
                .catch(reject);
        })
    }
}