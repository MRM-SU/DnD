export async function getEnvData() {
    let PACKAGES = {};
    let INCLUDE_JSON = await fetch('packages/include.json')
        .then(response => response.json());
    let INCLUDE = {};

    for (const [k, sources] of Object.entries(INCLUDE_JSON)) {
        INCLUDE[k] = [];

        for (const v of (sources instanceof Array)?sources.reverse():[sources]) {
            if (k == "GAME") {
                const data = await fetch(`games/${v}.json`)
                    .then(response => response.json());
                INCLUDE.GAME = data;
                continue
            }
            let file = {
                SPECIES:{
                    FORMAT:'json'
                },
                GEAR_TABLE:{
                    FORMAT:'json'
                },
                ITEMS:{
                    FORMAT:'js',
                    IMPORT:'ITEMS'
                },
                CHARACTERS:{
                    FORMAT:'js',
                    IMPORT:'CHARACTERS'
                }
            }[k]

            console.log(k,v,file)

            let data;
            if (file.FORMAT == 'json') {
                data = await fetch(`packages/${v}/${k}.${file.FORMAT}`)
                    .then(response => response.json());
            } else if (file.FORMAT == 'js') {
                let module = await import(`./packages/${v}/${k}.${file.FORMAT}`)
                data = module[file.IMPORT]
                console.error(data);
            }

            INCLUDE[k].forEach((_,dat) => {
                Object.keys(data).forEach((f) => {
                    INCLUDE[k][dat].data = Object.fromEntries(Object.entries(INCLUDE[k][dat].data).filter(([k_,v_]) => k_ != f))
                })
            })

            INCLUDE[k].push({
                data: data,
                source: v
            });

            if (!PACKAGES[k]) {
                PACKAGES[k] = [];
            }
            PACKAGES[k].push(v);
        }
    }

    return {
        PACKAGES:PACKAGES,
        INCLUDE:Object.fromEntries(Object.entries(INCLUDE).map(([k,v]) => [k,v instanceof Array?v.reverse():v]))
    };
}

export class Dice {
    constructor(faces,count=1) {
        this.faces = faces
        this.count = count || '1'
    }
    roll() {
        return Array.from({length:Number(this.count)}, ()=>Math.floor(Math.random()*Number(this.faces))+1).reduce((acc,v) => acc+v, 0)
    }
}

export class Roll {
    constructor(str) {
        this.elements = []
        str.split(' ').forEach((v) => {
            if (String(v).toUpperCase().includes('D')) {
                this.elements.push(new Dice(v.split('D')[1],v.split('D')[0]))
            } else if (v == '-') {
                this.elements.push('SUBTRACT')
            } else if (v == '+') {
                this.elements.push('ADD')
            } else if (v == '*') {
                this.elements.push('MULTIPLY')
            } else if (v == '/') {
                this.elements.push('DIVIDE')
            } else if (v == '//') {
                this.elements.push('FLOOR-DIVIDE')
            } else if (v == '%') {
                this.elements.push('MODULE')
            } else if (!isNaN(Number(v))) {
                this.elements.push(Number(v))
            }
        })
    }
    roll() {
        function evaluateTokens(tokens) {
            const precedence = {
                'ADD': 1,
                'SUBTRACT': 1,
                'MULTIPLY': 2,
                'DIVIDE': 2,
                'FLOOR-DIVIDE': 2,
                'MODULE': 2
            };

            function toRPN(tokens) {
                const output = [];
                const ops = [];

                for (let token of tokens) {
                    if (typeof token === 'number') {
                        output.push(token);
                    } else if (token instanceof Dice) {
                        let total = 0;
                        for (let i = 0; i < token.count; i++) {
                            total += Math.floor(Math.random() * token.faces) + 1;
                        }
                        output.push(total);
                    } else if (token === '(') {
                        ops.push(token);
                    } else if (token === ')') {
                        while (ops.length && ops[ops.length - 1] !== '(') {
                            output.push(ops.pop());
                        }
                        ops.pop();
                    } else {
                        while (
                            ops.length &&
                            ops[ops.length - 1] !== '(' &&
                            precedence[ops[ops.length - 1]] >= precedence[token]
                        ) {
                            output.push(ops.pop());
                        }
                        ops.push(token);
                    }
                }
                while (ops.length) {
                    output.push(ops.pop());
                }

                return output;
            }

            function evalRPN(rpn) {
                const stack = [];
                for (let token of rpn) {
                    if (typeof token === 'number') {
                        stack.push(token);
                    } else {
                        const b = stack.pop();
                        const a = stack.pop();
                        switch (token) {
                            case 'ADD': stack.push(a + b); break;
                            case 'SUBTRACT': stack.push(a - b); break;
                            case 'MULTIPLY': stack.push(a * b); break;
                            case 'DIVIDE': stack.push(a / b); break;
                            case 'FLOOR-DIVIDE': stack.push(Math.floor(a / b)); break;
                            case 'MODULE': stack.push(a % b); break;
                        }
                    }
                }
                return stack[0];
            }

            const rpn = toRPN(tokens);
            return evalRPN(rpn);
        }
        this.elements.map((el) => typeof(el) == Dice?el.roll():el)
        return evaluateTokens(this.elements)
    }
}

export class Item {
    constructor(
        NAME,
        CLASS,
        TYPE,
        TIER,
        DESCRIPTION,
        EFFECT,
        MAX_QUANTITY=Infinity
    ) {
        this.NAME = NAME
        this.CLASS = CLASS
        this.TYPE = TYPE
        this.TIER = TIER
        this.DESCRIPTION = DESCRIPTION
        this.EFFECT = EFFECT
        this.MAX_QUANTITY = MAX_QUANTITY
    }
}

export class Command {
    constructor(NAME,f) {
    }
}

export class Ability {
    constructor({NAME,UNLOCKS_AT,TYPE,DESCRIPTION,COMMAND}) {
    }
}

export class Character {
    constructor({NAME,FULL_NAME,SHORT_NAME,DESCRIPTION,IMG,HP,DMG,VEL,ITEM_SLOTS,LEVEL,HABILITIES}) {
    }
}