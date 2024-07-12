import NothingPlin from '../assets/nothingcamera_plin.jpg';
import RotatedPlin from '../assets/rotated_plin.jpg';
import ZungePlin from '../assets/zunge_plin.jpg';


import DrinkingLess from '../assets/drinking_less.jpg';
import DrinkingPlin1 from '../assets/drinking_plin.jpg';
import DrinkingPlin2 from '../assets/drinking_plin2.jpg';

import RepublikPlin from '../assets/republik_plin.jpg';
import SurprisedPlin from '../assets/surprised_plin.jpg';


import PalmePlin from '../assets/palme_plin.jpg';
import TastyPlin from '../assets/zunge_plin.jpg';
import JukedPlin from '../assets/juked_plin.jpg';


import SusPlin from '../assets/sus_plin.jpg';
import SusPlin2 from '../assets/sus_plin2.jpg';
import SuesPlin from '../assets/sues_plin.jpg';

import WtfPlin from '../assets/wtf_plin.jpg';
import WtfPlin2 from '../assets/wtf_plin2.jpg';


import TastyLess from '../assets/lecker_less.jpg';

import TeeniePlin from '../assets/teenie_plin.jpg';
import PartyPlin from '../assets/dance_plin.jpg';
import SmilePlin from '../assets/smile_plin.jpg';


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
        DrinkingLess,
        ["Lecker Mate", "Ist noch früh, lieber n Bierchen!"],
        ["Gute Wahl!", "Chill Bruda, ist noch früh!"],
        [DrinkingPlin1, DrinkingPlin2]
    ),
    new Phase(
        "For the day?",
        "Museen",
        SurprisedPlin,
        ["Bildung", "Unterhaltung"],
        ["Republik Plin", "Republik Plin 2"],
        [RepublikPlin, RepublikPlin]
    ),
    new Phase(
        "Zwischensnack",
        "",
        TastyPlin,
        ["Süß", "Salzig"],
        ["So wie du!", "Döner! Oder doch lieber süß?"],
        [SuesPlin, WtfPlin2]
    ),
    new Phase(
        "Dinner",
        "Lil Spain",
        PalmePlin,
        ["Madrid Vibes", "Boxhagener Platz Vibes"],
        ["Ab in die Lisboa Tapas Bar.", "Ab in die Lisboa Tapas bar (am Boxi)"],
        [TastyLess, JukedPlin]
    ),
    new Phase(
        "Abendunterhaltung",
        "",
        TeeniePlin,
        ["Draußen", "Drinnen"],
        ["Challenge me!", "20? 20:15? 22?"],
        [WtfPlin2, SmilePlin]
    ),
    new Phase(
        "Bar",
        "",
        PartyPlin,
        ['"High"life',  '"Highlife"'],
        ["Klunkerkranich.", "https://vox-restaurant.de/vox-bar/"],
        [SusPlin, SusPlin2]
    ),

]