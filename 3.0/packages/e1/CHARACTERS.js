import { Character,Ability } from '../../main.js'


export const CHARACTERS = [
    new Character({
        NAME:"Erebion",
        REQUIRES:["erebion.js"],
        FULL_NAME:"Erebion, King of the Occult, Godhead of Darkness",
        SHORT_NAME:"Érion",
        DESCRIPTION:"I was born from the very abyss, where no light dares linger, and slowly, I merged with it—not as its master, but as its whisper, its shadow, its silent heartbeat. I am not the void itself, yet I carry its essence stitched into my being, a memory that clings and moves with me. Where others see night, I see possibility; where others feel fear, I uncover hidden paths.\n\nI am Erebion, King of the Occult, Godhead of Darkness, yet my face may be any face, my name may pass on mortal lips as simply Érion.\n\nEvery step I take leaves echoes unseen, every shadow I touch remembers me. It is not dominion, not ownership… it is presence, and in my wake, even darkness pauses to wait.",
        IMG:"characters/Erebion.webp",
        HP:100,
        DMG:"D20",
        VEL:10,
        ITEM_SLOTS:5,
        LEVEL:0,
        HABILITIES:[
            new Ability({
                NAME:"Abyss Eclipse",
                UNLOCKS_AT:0,
                TYPE:"PASIVE|ON-HIT",
                DESCRIPTION:"Each time you hit, roll a D20; if you roll a 20, the enemy gains the \"Abyss\" state (Level 3).",
                COMMAND:{
                    NAME:"abbyss_eclipse",
                    TYPE:"FUNCTION"
                }
            }),
            new Ability({
                NAME:"Raising of the Darkness",
                UNLOCKS_AT:10,
                TYPE:"ACTIVE|6MANA",
                DESCRIPTION:"You generate a sphere of darkness with your right hand and throw it at enemies, creating a strange viscous dark liquid. Enemies gain the \"Abyss\" state (Level 5).",
                COMMAND:{
                    NAME:"raising_of_the_darkness",
                    TYPE:"FUNCTION"
                }
            }),
            new Ability({
                NAME:"Balance of Darkness",
                UNLOCKS_AT:20,
                TYPE:"ACTIVE|12MANA",
                DESCRIPTION:"You raise your right hand and generate a sphere of darkness; enemies gain the \"Abyss\" state (Level 3). You crash the sphere, causing an explosion: each enemy loses D100DMG, and the total damage lost is equally distributed among all allies to restore health.",
                COMMAND:{
                    NAME:"balance_of_darkness",
                    TYPE:"FUNCTION"
                }
            }),
            new Ability({
                NAME:"Last Breath",
                UNLOCKS_AT:30,
                TYPE:"ACTIVE|20MANA",
                DESCRIPTION:"You use both hands to generate a large, unstable sphere of darkness in front of your chest. You throw it, and all enemies gain the \"Abyss\" state (Level 10) and take D100DMG. You gain 1 MANA point per enemy. This ability can only be used once per game/phase.",
                COMMAND:{
                    NAME:"last_breath",
                    TYPE:"FUNCTION"
                }
            }),
            new Ability({
                NAME: "Call of the Void",
                UNLOCKS_AT: 50,
                TYPE: "ACTIVE|80% MANA",
                DESCRIPTION: "The singularity, the void himself reencarnates on a black hole that absorbs the soul of the enemies (5D100DMG + \"Abyss\" state (Level ∞), letting them with the sound of the abyss destroying their mind. This ability can only be used once per game. Reqiores a long nap to recharge.",
                COMMAND: {
                    NAME: "call_of_the_void",
                    TYPE: "FUNCTION"
                }
            })
        ]
    })
]
