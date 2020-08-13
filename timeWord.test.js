const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it returns single word time', () => {
    expect(timeWord("00.00")).toEqual('midnight')
  });

  test('it returns the correct words in the correct order', () => {
    expect(timeWord("00.12")).toEqual('twelve twelve am')
  });

  test("it returns o'clock when min is 00", () => {
    expect(timeWord("01.00")).toEqual("one o'clock am")
  });

  test('it returns oh when the min < 10', () => {
    expect(timeWord("06.01")).toEqual('six oh one am')
  });

  test('it returns teen num when min is between 10 and 20', () => {
    expect(timeWord("06.18")).toEqual('six eighteen am')
  });

  test('it returns name of num when min ends with 0', () => {
    expect(timeWord("06.30")).toEqual('six thirty am')
  });

  test('it returns correct am or pm', () => {
    expect(timeWord("23.23")).toEqual('eleven twenty three pm')
  });
});