# REFLECTION.md - [OrgCompass]
**Student:** [Lee Yi Ming] · **Course:** MGMT 6110 · **Problem Set 1**

---

## Who are your users, and what changes for them?
---
**Users:** The product is meant for internal users, particularly CEOs of entities that employed at least 1,000 employees in Singapore. Specific example of a logistic company is used in the master prompt. 
**Current situation:** **(1)** HR prepares deck of slides containing descriptive information about talent development and succession. **(2)** Business leaders spend at least 2-3 hours monthly or bi-weekly on talent and organization discussions, and they are required to make decisions that matter to the business priorities and individual talent. **(3)** Alignment of the talent & organizational development strategy to business priorities are often diluted by HR driven objectives e.g. measuring activity over impact on the organization.
**What OrgCompass do better:** **(1)** Show the talent or organization challenges that could hinder progress to meeting business priorities; no deck of slides **(2)** Helicopter view of the challenges enable decisions to be made according to business priorities **(3)** Decisions are more business driven than HR driven.

---

## Augmented capacity and constrained capacity
---
**Augmented capacity:** I was asked once (when I was a HR Manager) in a one-on-one meeting with a new CEO if there are any matters that requires his immediate attention, and I wished there was a product like *OrgCompass* that can provide him with meaningful insights and translate the conversation into impact to the organization.
**Constrained capacity:** When I first saw a functioning web product came back after sending the master prompt, I was still amazed by and couldn't help to believe that what the agent produced aesthetically in a few minutes are correct. It was hard to see if anything went wrong and trying to find faults within the output became challenging, despite my neocortex was reminding me what I see is not real. I toggled between the two screens and attempted to see what could be done better from the user's perspectives. While making changes to Screen 2 layout, I used the Restore button within AI Studio when the first prompt didn't deliver the expected output. While writing the prompt log, I realized I should have accepted and logged the failed prompt, but I didn't as *failures* or *mistakes* goes against my perfectionist instincts. I noticed at last the agent had done pre-ranking in Screen 1, which I didn't ask for it in my master prompt as the intent was for user to rank. I wasn't sure if I should still update the guardrail at that point, so I sent the last prompt via the chat to make the changes.

---

## In the loop, on the loop, out of the loop: where was your judgment actually needed?
---
**The two moment:** **(1)** While verifying the first output against the goal list, I paid more attention the flow of presentation and layout and made some face value changes as in Prompt 2, 3 and 4. **(2)** I accepted almost every other output and wasn't sure what else I have missed.
**In the loop:** Human should stay in the loop when the stakes are high, as in the case of OrgCompass where human should make the judgement and decision in ranking of the top three focus areas. Business context changes and new challenges may appear, that's where agent can't correctly judge what's matters to the business. There could also be missed opportunities had we leave it to the agent and trust their recommendation. We can stay out of the loop if the tasks are of low stakes (e.g. contained within organization), repetitive, grounded by rules and mistake-proof guardrails, decision is reversible, and there are clear audit trails for human oversight.

---

## What did it build that you never sketched?
---
I noticed now that AI Studio added locations, which I did not ask for. Is this an evidence that it called to Gemini? I would have asked why it added the locations and strengthen the guardrail on do not call API e.g., Do not access, or retrieve any location-related data.

---
## Learning pointers for the organisational context
---
**(1)** Know what your role is - product owner, reviewer or approver - to ensure accountability throughout AI development.
**(2)** Refer to the `Prompts.md` markdown file to understand what was built and why, and update the prompt log for any changes made to the front-end to keep the audit trail updated only if you are authorized to do so.
**(3)** Check the output against your prompt, critically assess the decision that the agent made on your behalf without you specifying it in your prompt.

---



