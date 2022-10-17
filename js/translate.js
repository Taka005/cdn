class translate{
    async get(text,lang){
        if(text.length > 5000){
            throw new Error("The maximum number of translations is 5000 characters or less");
        }
        const res_text = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&dj=1&q=${encodeURIComponent(text)}`)
            .then(res => res.json())
            .catch(error =>{
                throw new Error(error)
            });

        return res_text.sentences.map((sentence)=>{
            return sentence.trans
        }).join("");
    }
}