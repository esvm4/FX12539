// if
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

// ==
function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

// strict of "==" is "==="
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

// !=
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// strict of "!=" is "==!"
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

// >
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);

// >=
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);

// <
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
  
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

// <=
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

// "and" operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// "or" operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

// if else
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// else if
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";

  }
}
testElseIf(7);

// switch - case
function caseInSwitch(val) {
  var answer = "";
  switch (val){
    case 1:
        answer="alpha";
        break;
    case 2:
        answer="beta";
        break;
    case 3:
        answer="gamma";
        break;
    case 4:
        answer="delta";
        break;
  }
  return answer;
}
caseInSwitch(1);

// switch - case with default
function switchOfStuff(val) {
  var answer = "";
    switch (val) {
        case "a":
            answer="apple";
            break;
        case "b":
            answer="bird";
            break;
      case "c":
            answer="cat";
            break;
      default:
            answer="stuff";
            break;
    }
    return answer;
}
switchOfStuff(1);

// switch with many identical cases
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
      case 1:
      case 2:
      case 3:
        answer="Low";
        break;
      case 4: case 5: case 6:
        answer="Mid";
        break;
      case 7: case 8: case 9:
        answer="High";
        break;
  }
  return answer;
}
sequentialSizes(1);

// replace if-else with switch
function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);