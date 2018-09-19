function centuryFromYear(year) {
    let centruty;
    if(year % 100 == 0) {
      return centruty = year / 100;
    } else {
      return centruty = Math.floor(year/100) + 1;
    }
  }