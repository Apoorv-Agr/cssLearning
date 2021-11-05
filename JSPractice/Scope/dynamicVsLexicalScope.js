/* basic concept of this :- is the object , that function is a property of. */

const a = function () {
    console.log('inside a : ', this);
    const b = function () {
        console.log('inside b :', this);
        const c = {
            hi: function () {
                console.log('inside c :', this);
            }
        }
        c.hi();
    }
    b();
}
// a();
//inside a :  window or global object 
//inside b :  window or global object 
//inside c : object c 

const mainObj = {
    name: 'Keanu',
    fights: function () {
        console.log('inside fight fn : ', this);
        var anotherFight = function () {
            console.log('inside anotherFight fn : ', this);
        }
        anotherFight();
    }
}
mainObj.fights();

