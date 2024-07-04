import NothingPlin from '../assets/nothingcamera_plin.jpg';
import RotatedPlin from '../assets/rotated_plin.jpg';
import ZungePlin from '../assets/zunge_plin.jpg';

import DrinkingPlin1 from '../assets/drinking_plin.jpg';
import DrinkingPlin2 from '../assets/drinking_plin2.jpg';

import TastyPlin from '../assets/zunge_plin.jpg';
import JukedPlin from '../assets/juked_plin.jpg';
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
        ZungePlin,
        ["Stilbruch", "Gebrochener Stil"],
        ["Ab ins Cafe Stilbruch!", "Haha lol, auch Stilbruch."],
        [RotatedPlin, NothingPlin]
    ), 
    new Phase(
        "Drink!",
        "Stay hydrated/awake!",
        "gif",
        ["Wer", "Was"],
        ["Du", "Egal was"],
        [DrinkingPlin1, DrinkingPlin2]
    ),
    new Phase(
        "Tagesbeschäftigung",
        "",
        "gif",
        ["Bildung", "Unterhaltung"],
        ["Mauermuseum it is!", "Deutschlandmuseum it is"],
        ["gif1", "gif2"]
    ),
    new Phase(
        "Zwischensnack",
        "",
        "gif",
        ["Donut", "Cone"],
        ["", ""],
        ["gif1", "gif2"]
    ),
    new Phase(
        "Dinner",
        "",
        "gif",
        ["Madrid Vibes", "Boxhagener Platz Vibes"],
        ["Ab in die Lisboa Tapas Bar.", "Ab in die Lisboa Tapas bar (am Boxi)"],
        ["gif1", JukedPlin]
    ),
    new Phase(
        "Abendunterhaltung",
        "",
        "gif",
        ["Donut", "Cone"],
        ["", ""],
        ["gif1", "gif2"]
    ),
    new Phase(
        "Bar",
        "",
        "gif",
        ["Donut", "Cone"],
        ["", ""],
        ["gif1", "gif2"]
    ),

]