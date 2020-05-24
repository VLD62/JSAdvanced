function timeToWalk(steps, footprint, speed) {
    let v = (speed * 5) / 18;
    let s = steps * footprint;
    let t = (s / v) + (Math.floor(s / 500) * 60);
    let hh = parseInt(t / 3600);
    let mm = parseInt((t - (hh * 3600)) / 60);
    let ss = Math.ceil((t - ((hh * 3600) + (mm * 60))));
    console.log((hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss));
}