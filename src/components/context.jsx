class Phase {
    constructor(title, subtitle, main_gif, questions, answers, answers_gif) {
        this.title = title;
        this.subtitle = subtitle; 
        this.main_gif = main_gif;
        this.questions = questions;
        this.answers = answers; 
        this.answers_gif = answers_gif;
    }
}



export const PHASES = [
    new Phase(
        "Früüühstüüück!",
        "Morgenstund hat Gold im Mund",
        "gif",
        ["Stilbruch", "Gebrochener Stil"],
        ["Ab ins Cafe Stilbruch!", "Haha lol, auch Stilbruch."],
        ["gif1", "gif2"]
    ), 
    new Phase(
        "Drink!",
        "Stay hydrated/awake!",
        "gif",
        ["Wer", "Was"],
        ["Du", "Egal was"],
        ["gif1", "gif2"]
    )
]