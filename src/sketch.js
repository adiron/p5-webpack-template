import p5 from 'p5';

new p5(function(sketch) {
    sketch.setup = function() {
        sketch.createCanvas(800, 600);
    };

    sketch.draw = function() {
        sketch.text("Hey", 200, 200);
    };

    return sketch;
});
