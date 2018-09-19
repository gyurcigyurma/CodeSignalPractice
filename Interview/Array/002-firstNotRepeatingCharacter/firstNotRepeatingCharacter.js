function firstNotRepeatingCharacter(s) {
    const splitted = s.split('');
    let solution = "_";

    for (i = 0; i < splitted.length; i++) {
        var indexOfFirst = s.indexOf(splitted[i]);
        var indexOfSecond = s.indexOf(splitted[i], (indexOfFirst + 1))
        if (indexOfSecond == -1) {
              solution = splitted[i];
            break;
        }

    }
    return solution;
}