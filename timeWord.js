function timeWord(time) {
    const hour = time.slice(0, 2);
    const min = time.slice(3, 5);
    let returnedTime = "";

    if (time === "00.00") {
        return "midnight"
    } else if (time === "12.00") {
        return "noon"
    }

    switch (hour) {
        case "00":
        case "12":
            returnedTime = returnedTime + "twelve";
            break;
        case "01":
        case "13":
            returnedTime = returnedTime + "one";
            break;
        case "02":
        case "14":
            returnedTime = returnedTime + "two";
            break;
        case "03":
        case "15":
            returnedTime = returnedTime + "three";
            break;
        case "04":
        case "16":
            returnedTime = returnedTime + "four";
            break;
        case "05":
        case "17":
            returnedTime = returnedTime + "five";
            break;
        case "06":
        case "18":
            returnedTime = returnedTime + "six";
            break;
        case "07":
        case "19":
            returnedTime = returnedTime + "seven";
            break;
        case "08":
        case "20":
            returnedTime = returnedTime + "eight";
            break;
        case "09":
        case "21":
            returnedTime = returnedTime + "nine";
            break;
        case "10":
        case "22":
            returnedTime = returnedTime + "ten";
            break;
        case "11":
        case "23":
            returnedTime = returnedTime + "eleven";
            break;
        default:
            returnedTime = returnedTime + "none";
    }

    switch (min.slice(0, 1)) {
        case "2":
            returnedTime = returnedTime + " twenty";
            break;
        case "3":
            returnedTime = returnedTime + " thirty";
            break;
        case "4":
            returnedTime = returnedTime + " forty";
            break;
        case "5":
            returnedTime = returnedTime + " fifty";
            break;
        default:
            break;
    }

    switch (min) {
        case "00":
            returnedTime = returnedTime + " o'clock";
            break;
        case "10":
            returnedTime = returnedTime + " ten";
            break;
        case "11":
            returnedTime = returnedTime + " eleven";
            break;
        case "12":
            returnedTime = returnedTime + " twelve";
            break;
        case "13":
            returnedTime = returnedTime + " thirteen";
            break;
        case "14":
            returnedTime = returnedTime + " fourteen";
            break;
        case "15":
            returnedTime = returnedTime + " fifteen";
            break;
        case "16":
            returnedTime = returnedTime + " sixteen";
            break;
        case "17":
            returnedTime = returnedTime + " seventeen";
            break;
        case "18":
            returnedTime = returnedTime + " eighteen";
            break;
        case "19":
            returnedTime = returnedTime + " nineteen";
            break;
        case "01":
            returnedTime = returnedTime + " oh";
        case "21":
        case "31":
        case "41":
        case "51":
            returnedTime = returnedTime + " one";
            break;
        case "02":
            returnedTime = returnedTime + " oh";
        case "22":
        case "32":
        case "42":
        case "52":
            returnedTime = returnedTime + " two";
            break;
        case "03":
            returnedTime = returnedTime + " oh";
        case "23":
        case "33":
        case "43":
        case "53":
            returnedTime = returnedTime + " three";
            break;
        case "04":
            returnedTime = returnedTime + " oh";
        case "24":
        case "34":
        case "44":
        case "54":
            returnedTime = returnedTime + " four";
            break;
        case "05":
            returnedTime = returnedTime + " oh";
        case "25":
        case "35":
        case "45":
        case "55":
            returnedTime = returnedTime + " five";
            break;
        case "06":
            returnedTime = returnedTime + " oh";
        case "26":
        case "36":
        case "46":
        case "56":
            returnedTime = returnedTime + " six";
            break;
        case "07":
            returnedTime = returnedTime + " oh";
        case "27":
        case "37":
        case "47":
        case "57":
            returnedTime = returnedTime + " seven";
            break;
        case "08":
            returnedTime = returnedTime + " oh";
        case "28":
        case "38":
        case "48":
        case "58":
            returnedTime = returnedTime + " eight";
            break;
        case "09":
            returnedTime = returnedTime + " oh";
        case "29":
        case "39":
        case "49":
        case "59":
            returnedTime = returnedTime + " nine";
            break;
        default:
            break;
    }

    if (Number(hour) <= 11) {
        returnedTime = returnedTime + " am";
    } else {
        returnedTime = returnedTime + " pm";
    }

    return returnedTime
}