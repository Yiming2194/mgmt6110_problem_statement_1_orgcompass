# PROMPTS.md - [OrgCompass]
**Student:** [Lee Yi Ming] · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A [CEO] opens this screen to [see talent or organization challenges to the business priorities], and knows it worked when [they can select three focus areas].
**Live link:** [https://mgmt6110problemstatement1orgcompass.vercel.app/]

---

## Prompt 1 - the master prompt
```
ROLE: You are a senior front-end developer building a React web app.
GOAL: Build the front end of [OrgCompass], a web product for [a CEO running a logistic entity with at least 1000 employees in Singapore]. Their job on this product is [to decide three most important talent or organization actions to stay aligned with business priorities]. Screens:
[SCREEN 1: shows top three business priorities, listing any capability gaps, succession risks and organizational bottlenecks to deliver the priorities, and it worked when the CEO is able rank three most important friction points to focus]
[SCREEN 2, Executive summary of the selected focus areas with recommended talent or organizational actions that are aligned to the business priorities]
OUTPUT: A running app. Keep every invented value in ONE data file of its own, with at least [10] rows, so the screen looks real. One component per screen or section. Move between screens without reloading the page. Readable on a phone at arm's length. When you are done, list the files you created and what each one holds.
GUARDRAILS: Screens and invented data only. Do NOT call the Gemini API or any other model. Do NOT call any outside service or fetch from any URL. No database, no login, no user accounts, no analytics. No features I did not list. No real company's name, logo, or trademark. Invented names and numbers only, nothing confidential.
CONTEXT: Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU. Built in Google AI Studio, shared as a link, and opened on a phone by classmates in Week 3. I am not a programmer: when you make a choice I did not specify, say
so in one line rather than burying it.
```
**What came back:** A running app that looks aligned with the goal list at first glance, 10 files, preview loaded. 
**What I changed next and why:** Moved the executive action matrix in Screen 2 above the recommended action list, to minimize any interruption to the user's chain-of-thought during a decision-making process

---

## Prompt 2 - fix the order of section on Screen 2
```
Move the section to above the recommended actions for selected focus area. change nothing else
```
**What came back:** Correct, one file touched.
**What I changed next and why:** Added the business priorities to the executive action matrix in Screen 2 as the initial matrix does not explain how each selection is linked to the business priorities.

---

## Prompt 3 - update executive action matrix with a column on business priorities on Screen 2
---
Add the business priorities that each selected focus area is driving to the executive action matrix. change nothing else.
**What came back:** Correct, one file touched.
**What I changed next and why:** Embedded quick links to view the recommended actions correspond to the selected priority, to help user stay focused on the decision matrix.

---

## Prompt 4 - embed recommended actions into executive action matrix on Screen 2
---
Embed the recommended actions for selected focus areas in the section without expanding the table beyond what user can see at one glance on the screen. you can embed it as a link that user can click on to see what are the recommended actions correspond to the selected priority. change nothing else.
**What came back:** Correct, one file touched.
**What I changed next and why:** Remove the board recommendation and pre-selection and ranking of the focus areas on Screen 1 as I realized I did not ask for it.

---

## Prompt 5 - remove recommendation and pre-selected ranking on Screen 1
---
remove the button and any pre-ranking done on the focus area. change nothing else.
**What came back:** Correct, two files touched.
**What I changed next and why:** Nothing. I have made the necessary changes.

