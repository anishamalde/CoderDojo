# Verbal Countdown

## Challenge
For this challenge, you should create a countdown that updates every second until the time has been reached. The countdown should be written in English with the following structure:
`2 days, 5 hours, 3 mins & 14 secs`

* However, if a number is singular (i.e. 1), then the period of time should also be singular e.g. `1 day, 1 hour, 1 min & 1 sec`
* Also, if a number is 0, then it shouldn't be displayed. e.g. `5 hours, 3 mins & 14 secs`
* Finally, if a number is 0 and it is not displayed, the commas and ampersand should still be gramatically correct e.g. `2 days, 5 hours & 1 min`

## Tests
Test #1: Display the following when there is 2 days, 5 hours, 3 minutes and 14 seconds left exactly till the given time

Output: `2 days, 5 hours, 3 mins & 14 secs`

Test #2: Display the following when there is 1 day, 1 hour, 1 minute and 1 second left exactly till the given time

Output: `1 day, 1 hour, 1 min & 1 sec`

Test #3: Display the following when there is 5 hours, 3 minutes and 14 seconds left exactly till to the given time

Output: `5 hours, 3 mins & 14 secs`

Test #4: Display the following when there is 2 days, 5 hours and 1 minute left exactly till to the given time

Output: `2 days, 5 hours & 1 min`
