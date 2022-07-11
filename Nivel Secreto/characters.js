var player = {
    name : 'Dr. Doofenshmirtz' ,
    hp : 200,
    atk : [10 , 15] ,
    def : 10 ,
    spd : 10,
    phrase : ['Esto me recuerda a mi infancia en Gimmelshtump' , 'Te odio Perry el Ornitorrinco' , 'Contempla mi victoria-inador' , 'Ahora a dominar el Area Limitrofe'],
    dead : false
};

var enemy = {
    Boris : {
        name : 'Boris',
        hp : 200 ,
        atk : [10 , 20] ,
        def : 10 ,
        spd : 5 , 
        dead: false
    } ,

    Perry : {
        name : 'Perry el ornitorrico' ,
        hp : 300 ,
        atk : [10 , 15] ,
        def : 10 , 
        spd : 15 ,
        dead: false
    } ,

    Troll : {
        name : 'Troll' ,
        hp : 100 ,
        atk: [5 , 15] , 
        def : 0 , 
        spd : 8 ,
        dead: false
    } ,

    Bruja : {
        name : 'Bruja' , 
        hp: 120,
        atk: [5 , 20],
        def : 0 ,
        spd: 0, 
        dead : false
    }
};

export {player as player , enemy as enemy}