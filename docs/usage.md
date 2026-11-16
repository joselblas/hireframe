# How much of your Claude plan this uses

Spanish version: [usage.es.md](usage.es.md). This page is for people who have never used Git, code or an AI agent. No question here is a silly one.

## The short answer

- A Claude subscription does not give you a number of messages. It gives you an allowance that refills. When it runs out, Claude stops answering until it refills.
- **Talking** to Claude (asking it to score a listing, review a CV) uses a little.
- **Letting Claude act** (searching the web for you, opening job pages, filling a form in your browser) uses a lot more. Anthropic says Cowork, the mode where Claude does tasks for you, uses more of your allowance than chatting. It does not say how much more.
- So: think and decide in chat. Use the browser only for the one step that needs it, the form.

## Words you will see

| Word | What it means for you |
|---|---|
| Plan | What you pay Anthropic each month. Pro, Max 5x or Max 20x for one person. Max gives 5 or 20 times the allowance of Pro. The tools are the same on all of them. Only the allowance changes |
| Session limit | Your allowance for a block of five hours. It refills five hours after the block started |
| Weekly limit | A second, bigger allowance for the whole week. Even if each session refills, the week can run out |
| Shared | Chat, Cowork, Claude in Chrome and Claude Code all take from the same allowance. Using one leaves less for the others |
| Usage credits | Pay-as-you-go top-up after you hit a limit. It costs extra money. Leave it off, or set a monthly cap, until you know your pattern |
| Effort | How hard Claude thinks. Higher effort uses more. Routine steps do not need the highest setting |
| Model | Bigger models use more of the allowance per message than smaller ones |

Where to look: in Claude, open **Settings**, then **Usage**. It shows how much of the session and the week you have used. That page is the only number you can trust. Limits change over time, and anything written here, including this page, can be out of date.

## What each step costs, roughly

Anthropic does not publish exact numbers, so these are weights, not prices. "Light" means you will rarely notice it. "Heavy" means a few of these can use up a session on Pro.

| Step | How Claude does it | Weight | Why |
|---|---|---|---|
| Score one listing you paste in | Chat | Light | Reads text, writes text |
| Tailor one CV from your fact file | Chat with a skill | Light to medium | Longer text, one file out |
| Scout: search the web for new roles | Chat with web search | Medium | Many searches and pages read |
| Check that 10 postings are still open | Chat with web fetch | Medium | One page per posting |
| Fill one application form in your browser | Claude in Chrome or Cowork | Heavy | Every click is a step, and screenshots are large |
| Read your email for replies | Connector | Medium | Depends on how many emails |
| Weekly review | Chat | Light | Reads one tracker file |
| A scheduled task that runs every day | Runs on its own | Adds up | It uses allowance even when you are not watching |

Two things make any step heavier: very long conversations (Claude re-reads the whole chat each time) and big files uploaded again and again.

## A sensible week on Pro

This is a starting guess, not a promise. Measure your own (see below).

- 3 or 4 scout sessions in chat.
- 5 to 10 tailored CVs.
- Forms: fill the easy ones yourself, and use the browser agent for the long ones only. One at a time.
- One weekly review.

If you hit the session limit more than twice a week, either do more steps yourself (copy and paste is free) or look at a bigger plan. Do not move to a bigger plan before you have measured.

## Measure it once, in your first week

It takes two minutes and tells you more than any guide.

1. Open **Settings, Usage**. Write down the session and weekly percentage.
2. Do one thing, for example "scout today".
3. Look again. The difference is what that step costs you.
4. Repeat for one CV and one form.

Write the three numbers in your private notes. Now you can plan your week.

## Ways to use less

- **Start a new chat for each task.** A fresh chat for each listing is cheaper than one chat that runs all week. Your files in the Project carry the context, so nothing is lost.
- **Keep files short.** `career-context.md` is read in every chat. Facts, not essays.
- **Paste, do not browse.** If you already have the job text, paste it. Claude does not need to open the page.
- **Batch the thinking, not the clicking.** Score five listings in one message. Fill forms one by one.
- **Fill short forms yourself.** Name, email, upload, done. The agent is worth it on long forms with many questions.
- **Lower the effort** for routine steps if your Claude app lets you choose.
- **Do not schedule what you can do by hand.** A daily task that runs whether or not you need it uses allowance every day.

## If you hit a limit

Nothing is lost. Your files are on your computer and in your Project. Wait for the refill, or switch to a step you can do by hand: update the tracker, read a posting, write a note to a contact. Do not turn on paid credits in a hurry.

## For people who have never used GitHub

You do not need to. To get the files, open the repository page, press the green **Code** button, then **Download ZIP**. Unzip it like any other file. That is the whole of it. See [setup.md](setup.md).

Sources: Anthropic help center pages on usage limits, the Max plan, usage credits, and Claude in Chrome. Read the current versions there, because limits change.
