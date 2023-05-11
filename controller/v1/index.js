const dialogs = [
    {
        question : "salut",
        answer : "coucou"
    },
    {
        question : "ça va",
        answer : "oui"
    },
    {
        question : "quel age as tu",
        answer : "20 ans"
    }
]
const dialogController = {
home: (req,res) => {
    res.send('Hello World!')
},
test: (req,res) =>{
    res.send('Hello test!')
},
findallquestion:(req, res) => {

    console.log(req.body.question)
    let matchFound = false;
    dialogs.forEach(dialog => {
        if(dialog.question === req.body.question) {
            matchFound = true;
            return res.status(200).json({response : dialog.answer})
        }
    })
    if(!matchFound) {
        res.status(200).json({ message: "pas de réponse à vous apporter" })
    }
},
answerget: (req, res) => {
    res.status(200).json({ message: dialogs })
    
}
}

module.exports = dialogController