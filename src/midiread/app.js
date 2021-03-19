"use strict";
const canvas = document.querySelector("canvas");
canvas.setAttribute("width", "1024");
canvas.setAttribute("height", "1024");
// canvas.width = 1024;
// canvas.height = 560;
const cells = 16 * 88;
const gridw = 1024 / 88;
const gridh = 1024 / 16;
const grid = new Array(88).fill(new Array(16));
const ctgx = canvas.getContext("2d");
fetch("./song.mid")
    .then((res) => res.arrayBuffer())
    .then((ab) => {
    const rr = readMidi(new Uint8Array(ab));
    function noteOn({ channel, notesOn, program, vel }) {
        grid[notesOn][channel] = vel;
    }
    function noteOff({ channel, notesOff, vel }) {
        grid[notesOff][channel] = 0;
    }
    function draw() {
        for (let i = 0; i < 88; i++) {
            for (let j = 0; j < 16; j++) {
                if (grid[i][j] > 0) {
                    ctgx.fillStyle = "black";
                    ctgx.fillRect(i * gridw, j * gridh, gridw, gridh);
                }
                else {
                    ctgx.clearRect(i * gridw, j * gridh, gridw, gridh);
                    ctgx.fillStyle = "white";
                    ctgx.fillRect(i * gridw, j * gridh, gridw, gridh);
                }
            }
        }
        requestAnimationFrame(draw);
    }
    setInterval(() => rr.tick(noteOn, noteOff), 3.5);
    requestAnimationFrame(draw);
});
