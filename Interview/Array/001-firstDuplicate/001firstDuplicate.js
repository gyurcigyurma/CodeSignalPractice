function firstDuplicate(a) {
    const mirror = new Array(a.length);
    let solution = -1;
    for (i = 0; i < a.length; i++) {
        if (mirror[a[i]] == undefined) {
            mirror[a[i]] = a[i];
        } else {
            solution = a[i];
            break;
        }
    }
    return solution;
}