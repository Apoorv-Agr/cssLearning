console.log('Here')

// Factory Functions

function createCircle(radius) {
    return {
        radius,
        getRadius: function () {
            return (22 / 7) * this.radius * this.radius;
        }
    }
}

const circle1 = createCircle(7);

console.log(circle1);
console.log((circle1.getRadius()));

// Function Constructor
function Circle(radius) {
    this.radius = radius;
    this.getRadiusFn = function () {
        return (22 / 7) * this.radius * this.radius;
    }
}

const circle2 = new Circle(14);

console.log(circle2);
console.log((circle2.getRadiusFn()));


