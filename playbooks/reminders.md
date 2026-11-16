# Reminders and loops

The search goes better with a rhythm. These are the reminders worth setting, and two loops that keep the kit learning from your results. You do not need to code any of it.

## How reminders work

In Claude you can ask for a **scheduled task**: "Every Monday at 9, remind me to do my weekly review." Claude runs it at that time in a new chat and shows you the result. You can see, pause and delete them in Claude's list of scheduled tasks.

Two warnings:

- **Each run uses part of your plan**, even if you do not read it. See [usage](../docs/usage.md). Start with one or two.
- **A run cannot press buttons for you.** Reminders read and suggest. They never apply, send or submit.

## Reminders worth having

| Reminder | When | What it does |
|---|---|---|
| Weekly review | Once a week | Runs the funnel review and the learning loop below |
| Follow-ups | Weekly | Lists applications with no answer after 14 and 30 days, with a short draft for each. You send them |
| Profile match | After you change your CV | Checks that LinkedIn, portfolio and CV still say the same thing (the signal check in `hooks.md`) |
| Search map | After you change `career-context.md` | Runs the search map below |
| Saved searches | Twice a week | Re-opens your job board searches and lists only new, unseen roles |
| Pool check | Monthly | Asks: are the interviews coming from the pool and channel we are using? If not, what to change |

Copy this to start one, and edit the time:

> Every Monday at 9:00, open my job search Project and run the weekly review. Then list follow-ups due this week. Do not send or submit anything.

## Loop 1: the search map follows your CV

When `career-context.md` changes (a new skill, a new project, a new sector), the places to look should change too. The assistant:

1. Compares the new fact file with the last version and lists what is new.
2. Proposes new search terms (titles, skills, sectors) and new sources (boards, company lists, communities) that the new facts make worth trying.
3. Lists terms and sources that no longer fit.
4. Writes the proposal to `reports/search-map-YYYY-MM-DD.md`. The person approves before `profile.yml` changes.

Example: adding "builds with Claude Code" to the fact file can open titles like "design engineer" and "AI product designer", and boards for AI companies.

## Loop 2: the kit learns from your results

Agents do not safely rewrite themselves. What works is a loop with a person in it:

1. The weekly review notes what the numbers and this week's events taught: a gate that missed, a source that wasted time, a form quirk, a channel that worked.
2. It proposes small edits to the person's own notes, `profile.yml` or a playbook, each with the evidence.
3. The person accepts or skips each one.

Nothing changes without a yes. Over a few weeks the kit fits the person better. This is how the lessons in [lessons-learned.md](../docs/lessons-learned.md) were written.

## Perspective

When the review sees a rough week (several rejections, a month of silence), it can offer a perspective moment. See `perspective.md`. It asks first, and the person can turn it off.
