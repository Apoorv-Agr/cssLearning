const pZZ = (n) => {
    if (n === 0) { return; }
    console.log("Pre ", n);
    pZZ(n-1);
    console.log("In ", n);
    pZZ(n-1);
    console.log("Post ", n);
}

pZZ(4);