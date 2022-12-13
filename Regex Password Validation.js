const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

// The ^ symbol at the beginning of the regular expression indicates that the string must start with the following pattern. The (?=...) syntax is a positive lookahead, which means that the regular expression will only match if the string matches the pattern inside the lookahead, but the matched characters are not included in the final match.

// The first lookahead (?=.*[a-z]) checks that the string contains at least one lowercase letter by using the .* quantifier to match any number of characters, followed by the character set [a-z] which matches any lowercase letter.

// The second lookahead (?=.*[A-Z]) checks that the string contains at least one uppercase letter using the same approach.

// The third lookahead (?=.*\d) checks that the string contains at least one digit by using the \d shorthand character class, which matches any digit.

// After the lookaheads, the regular expression uses the character set [a-zA-Z\d] to match any letter or digit. The {6,} quantifier that follows indicates that the previous character set must be repeated at least 6 times, so the string must be at least 6 characters long. 
// Finally, the $ symbol at the end of the regular expression indicates that the string must end with the pattern that precedes it.
