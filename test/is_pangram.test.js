const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy();
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown fo jumps over the lazy dog';

    // Act // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy();
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'the 2 quick brown fox jumps over the 1 lazy dog';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy();
  });

  // Write your own test case
  test('pangram with only uppercase letters works', () => {
// Arrange
const text = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';

// Act // Assert
expect(isPangram(text)).toBeTruthy();
  });
});
