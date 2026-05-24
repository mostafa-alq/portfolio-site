---
title: "Badminton Elo System - 1"
date: "2026-05-24"
description: "Finding my problem and getting a first working prototype."
---

I have many hobbies apart from programming in my personal life, and Badminton is an incredibly fun sport that I have picked up over this past year. I could not reccomend it more, and I play it with my friends very frequently, although I recently attended my University's last Badminton social session. I am even on the team, although I have yet to play any matches myself...

That being said, I wanted to combine two of my hobbies together: programming and Badminton, and I thought that a perfect place to start would be to build an ELO system, which is also used in Chess (which I dabble in from time to time)

The way that the BWF currently ranks points is based on prize money accumulation, which rewards volume of matches over the quality of each of them, and frankly I think this is inaccurate in assessing whether or not a player is actually the best or not.

### What is ELO and how does it work?

ELO is a rating system which tries to assign a numerical value to the skill of an individual player. In my system, everyone starts with an arbitrary skill rating of 1500; every match that you win will make you gain ELO, and conversely every match that you lose will make you lose ELO too. Each match predicts a win based on the rating gap between both opponents, and the ELO you may gain or lose is affected based on this prediction. Therefore, if you are a heavy underdog but come out with a win, you will gain significantly more ELO against a higher rated opponent than if you played against someone more evenly matched.

At the moment, I have been able to produce this chart from a single CSV containing records of approximately 15,000 matches from BWF World Tour Matches from 2018-2021:

![Alt text](/blog-pics/badmintonchart.png)

My project is not done yet, and this is as far as I have made it. However, I do intend on getting more up to date records of matches, potentially getting even more data or possibly scraping it myself!

I also need to compare the actual ratings to the BWF rankings, as I have only just made the ELO system, and I should probably also weigh it depending on the tournament, and likely optimise my hyperparameters via K factor tuning. Once I have this all set up, I'll see just how far I can take this project.
