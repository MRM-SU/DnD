import { getEnvData, Roll, Dice } from "./main.js";

var envData;

var GAME = {
    PLAYERS:{
        ALLIES:[],
        ENEMIES:[]
    },
    log: function(text,textStringify=(_)=>_,details=null) {
        let log = document.querySelector('#log');
        let obj;
        if (details == null) {
            obj = document.createElement('div')
            obj.textContent = textStringify(text)
        } else {
            obj = document.createElement('details')
            obj.appendChild(document.createElement('summary')).textContent = textStringify(text)
            Object.entries(details).forEach(([k,v]) => {
                let div = obj.appendChild(document.createElement('div'));
                div.appendChild(document.createElement('b')).textContent = `${k}:`
                div.appendChild(document.createElement('span')).textContent = `${v}`
            })
        }
    }
}

async function main() {
    envData = await getEnvData()
    console.log(envData)
}

main()

class Fighter {
    constructor(data) {
        this.AI = data.AI
        this.SPECIE = data.SPECIE
        this.TEAM = data.TYPE
        this.HP = data.HP
        this.INVENTORY = data.INVENTORY.map((item) => ({ [item] : getEnvData_Data(envData.INCLUDE.ITEMS)[item] }))
    }

    getRealDMG(dmg) {
        let adder = this.INVENTORY.map('')
    }

    attack(dmg,target,details) {
        let dealed_dmg = this.getRealDMG(dmg)
        let response = target.getDamage(dmg);
        if (details.REC != null) {
            let recovery = 0;
            let rec_ = details.REC.split('|');
            if (rec_[0].endsWith('%')) {
                if (rec_[1]=='DEALED') {
                    recovery = dealed_dmg*parseFloat(rec_[0])/100
                }
                if (rec_[1]=='TOTAL') {
                    recovery = response.recivedDMG*parseFloat(rec_[0])/100
                }
            } else {
                recovery = parseFloat(rec_[0])
            }
            this.addHP(recovery)
        }
    }

    action() {
        function inRange(n,str) {
            let v = str.split('-')
            let a = Number(v[0])
            let b = Number(v[1])
            return n>=a&&n<=b
        }

        let actionID = new Roll(this.AI.ROLL).roll();
        let actions = [];
        let protocols = Object.values(Object.fromEntries(Object.entries(this.AI).filter(([k,v]) => k!='ROLL'&&inRange(actionID,k))))
        protocols.forEach((protocol) => { 
            protocol.forEach((command) => {
                actions.push(command)
            })
        })
        actions.forEach((action) => {
            console.log(action)
            switch (action.TYPE) {
                case 'DMG':
                    let DMG = new Roll(action.VALUE).roll()
                    let REC = null;
                    if (action.REC) {
                        REC = action.REC
                    }
                    let TARGET = null;
                    if (action.TARGET == 'RANDOM') {
                        let enemies = this.TEAM!='ENEMIES'?'ALLIES':'ENEMIES'
                        let attackPossibleTargets = GAME.PLAYERS[enemies]
                        TARGET = attackPossibleTargets[Math.floor(Math.random()*attackPossibleTargets.length)]
                    } else if (action.TARGET == 'HIGHEST_HP') {
                        let enemies = this.TEAM!='ENEMIES'?'ALLIES':'ENEMIES'
                        let attackPossibleTargets = GAME.PLAYERS[enemies]
                        TARGET = attackPossibleTargets.sort((a,b) => a.HP - b.HP)[0]
                    }
                    this.attack(DMG,TARGET,{REC:REC})
                    GAME.log(`${this.SPECIE} deals ${DMG}DMG to ${TARGET}`,details={'Recovery':(REC!=null?REC:0)})
                    break;
                case "USE_ITEM":
                    console.error(this.INVENTORY)
                    let items = this.INVENTORY.filter((item) => ['ACTIVE'].includes(item.TYPE))
            }
        })
    }
}

function getEnvData_Data(data) {
    let object = {};
    data.forEach((_) => {
        Object.entries(_.data).forEach(([k,v]) => object[k] = v)
    })
    return object;
}

function HTMLtoFighter(fighter) {
    let ans = getEnvData_Data(envData.INCLUDE.SPECIES)[fighter.querySelector('select#fighter').value];
    ans.TYPE = fighter.querySelector('#topbar button').textContent;
    ans.SPECIE = fighter.querySelector('select#fighter').value;
    ans.LVL = fighter.querySelector('input[type="number"]').value;
    ans.INVENTORY = Array.from(fighter.querySelector('#itemsDiv').children).map((v) => v.querySelector('span').textContent);
    if (
        fighter.querySelector('input[type="checkbox"]').checked
    ) {
        Object.entries(getEnvData_Data(envData.INCLUDE.GEAR_TABLE)[ans.SPECIE]).forEach(([ITEM,DATA]) => {
            let PROB = DATA.CHANCE;
            let max = getEnvData_Data(envData.INCLUDE.ITEMS)[ITEM].MAX_QUANTITY;
            let disc = envData.INCLUDE.GAME.equipedUniqueItems[ITEM];
            if (max === '' || disc < parseInt(max)) {
                if (Math.random()<PROB) {
                    ans.INVENTORY.push(ITEM)
                }
            }
        })
    }
    console.log(ans)
    return new Fighter(ans)
}

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('#fighters button#next').addEventListener('click', (event) => {
        document.body.id = 'fight';
        document.querySelectorAll('fighter').forEach((fighter) => {
            let fght = HTMLtoFighter(fighter)
            GAME.PLAYERS[fght.TEAM=='Enemy'?'ENEMIES':'ALLIES'].push(fght)
            console.log(fght.action())
        })
        document.body.innerHTML = ``;
    })

    document.querySelector('#fighters button#add').addEventListener('click', (event) => {
        let container = document.querySelector('#fightersContainer');
        
        let fighter = document.createElement('fighter');

        let topbar = fighter.appendChild(document.createElement('div'))
        topbar.id = 'topbar';
        let team = topbar.appendChild(document.createElement('button'));
        team.textContent = 'Enemy'
        team.onclick = (event) => {
            if (event.target.textContent == 'Enemy') {
                event.target.textContent = 'Ally'
                event.target.parentElement.parentElement.style.setProperty('--team','50, 150, 250')
            } else {
                event.target.textContent = 'Enemy'
                event.target.parentElement.parentElement.style.setProperty('--team','255, 0, 0')
            }
        }

        let exit = topbar.appendChild(document.createElement('button'));
        exit.textContent = 'X'
        exit.onclick = (event) => {
            event.target.parentElement.parentElement.remove()
        }

        fighter.appendChild(document.createElement('h2')).textContent = 'Stats'

        let specieRow = fighter.appendChild(document.createElement('div'));
        (((el)=>{el.classList.add('key');return el})(specieRow.appendChild(document.createElement('span')))).textContent = 'Specie'
        let select = specieRow.appendChild(document.createElement('select'));
        select.id = 'fighter'
        Object.entries(envData.PACKAGES.SPECIES).forEach(([s,v]) => {
            let optgrp = select.appendChild(document.createElement('optgroup'));
            optgrp.label = envData.INCLUDE.SPECIES[s].source
            Object.entries(envData.INCLUDE.SPECIES[s].data).forEach(([n,p]) => {
                optgrp.appendChild(document.createElement('option')).textContent = n
            })
        });
        let levelRow = fighter.appendChild(document.createElement('div'));
        (((el)=>{el.classList.add('key');return el})(levelRow.appendChild(document.createElement('span')))).textContent = 'Level'
        let lvl = levelRow.appendChild(document.createElement('input'));
        lvl.type = 'number';
        lvl.value = 1;

        fighter.appendChild(document.createElement('h2')).textContent = 'Items'

        let itemsContainer = fighter.appendChild(document.createElement('div'));
        itemsContainer.id = 'itemsContainer';
        let itemsContainerUI = itemsContainer.appendChild(document.createElement('div'));
        itemsContainerUI.id = 'itemsContainerUI';
        let specieList = itemsContainerUI.appendChild(document.createElement('select'));
        Object.entries(envData.PACKAGES.ITEMS).forEach(([s,v]) => {
            let group = Array.from(specieList.querySelectorAll('optgroup')).filter((el)=>el.label==envData.INCLUDE.ITEMS[s].source)[0];
            if (group == undefined) {
                group = specieList.appendChild(document.createElement('optgroup'));
                group.label = envData.INCLUDE.ITEMS[s].source
            }
            Object.entries(envData.INCLUDE.ITEMS[s].data).forEach(([k,v]) => {
                let option = group.appendChild(document.createElement('option'));
                option.value = v.NAME;
                option.textContent = v.NAME + ` (${'✰'.repeat(v.TIER)})`
            })
        });
        let addItem = itemsContainerUI.appendChild(document.createElement('button'));
        addItem.onclick = (event) => {
            let div = document.querySelector('#itemsDiv').appendChild(document.createElement('div'));
            div.appendChild(document.createElement('span')).textContent = specieList.value;
            let x = div.appendChild(document.createElement('button'));
            x.textContent = 'X';
            x.onclick = (event) => {
                event.target.parentElement.remove()
            }
        }
        addItem.textContent = 'Add Item'
        let itemsDiv = itemsContainer.appendChild(document.createElement('div'));
        itemsDiv.id = 'itemsDiv';
        let autoItemsContainer = fighter.appendChild(document.createElement('div'));
        let checkbox = autoItemsContainer.appendChild(document.createElement('input'));
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        autoItemsContainer.appendChild(document.createElement('span')).textContent = 'Auto Items'

        container.appendChild(fighter)
    })
})

window.onbeforeunload = (event) => {
    return "¿Are you sure you want to leave? The fight will be ended and data will not be saved.";
}