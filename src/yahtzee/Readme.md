# Yahtzee

The objective of YAHTZEE is to get as many points as possible by rolling five dice and getting certain combinations of dice.

## Gameplay

In each turn a player may throw the dice up to three times. A player doesn't have to roll all five dice on the second and third throw of a round, he may put as many dice as he wants to the side and only throw the ones that don't have the numbers he's trying to get. For example, a player throws and gets 1,3,3,4,6. He decides he want to try for the large straight, 1,2,3,4,5. So, he puts 1,3,4 to the side and only throws 3 and 6 again, hoping to get 2 and 5.

In this game you click on the dice you want to keep. They will be moved down and will not be thrown the next time you press the 'Roll Dice' button. If you decide after the second throw in a turn that you don't want to keep the same dice before the third throw then you can click them again and they will move back to the table and be thrown in the third throw.

## Upper section combinations

**Ones:** Get as many ones as possible.
**Twos:** Get as many twos as possible.
**Threes:** Get as many threes as possible.
**Fours:** Get as many fours as possible.
**Fives:** Get as many fives as possible.
**Sixes:** Get as many sixes as possible.

For the six combinations above the score for each of them is the sum of dice of the right kind.

**E.g.** if you get 1,3,3,3,5 and you choose Threes you will get 3*3 = 9 points. The sum of all the above combinations is calculated and if it is 63 or more, the player will get a bonus of 35 points. On average a player needs three of each to reach 63, but it is not required to get three of each exactly, it is perfectly OK to have five sixes, and zero ones for example, as long as the sum is 63 or more the bonus will be awarded.

## Lower section combinations

- **Three of a kind:** Get three dice with the same number. Points are the sum all dice (not just the three of a kind).
- **Four of a kind:** Get four dice with the same number. Points are the sum all dice (not just the four of a kind).
- **Full house:** Get three of a kind and a pair, e.g. 1,1,3,3,3 or 3,3,3,6,6. Scores 25 points.
- **Small straight:** Get four sequential dice, 1,2,3,4 or 2,3,4,5 or 3,4,5,6. Scores 30 points.
- **Large straight:** Get five sequential dice, 1,2,3,4,5 or 2,3,4,5,6. Scores 40 points.
- **Chance:** You can put anything into chance, it's basically like a garbage can when you don't have anything else you can use the dice for. The score is simply the sum of the dice.
- **YAHTZEE:** Five of a kind. Scores 50 points. You can optionally get multiple Yahtzees, see below for details.

---

## Test Cases

**Upper section combinations**
Get as many N as possible

|     Input   |   Target    |   Output    |
| ----------- | ----------- | ----------- |
| [1, 1, 1, 1, 1] | 1 | 5 |
| [1, 2, 3, 4, 5] | 2 | 2 |
| [1, 3, 3, 4, 5] | 3 | 6 |

**Lower section combinations**
Points are the sum all dice

|     Input   |   Target    |   Output    |
| ----------- | ----------- | ----------- |
| [1, 1, 1, 1, 1] | "three of a kind" | 5 |
| [1, 2, 3, 4, 5] | "four of a kind" | 2 |
| [1, 3, 3, 4, 5] | "full house" | 6 |

---

## Command

Run test for specific file

```bash
npm run test -- --verbose --findRelatedTests yahtzee.service.spec.ts
```
