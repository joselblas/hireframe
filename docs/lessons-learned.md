# Lessons learned

Notes from running this on a real remote search. They are the reason the playbooks look the way they do.

## Listings

- **Aggregator tags lie.** "Remote" on a card often means one country, or a US-only role, on the real posting. Always open the employer's page.
- **Country lists beat the word "EMEA".** The most reliable proof of eligibility is an explicit country list or a regional salary band for your country.
- **Language gates hide in the body text.** A title with no language requirement can still say "fluent German" three paragraphs down.
- **Hybrid hides too.** "Remote, based in City" and "occasional office days" are not remote. Read for them.
- **Postings disappear.** Re-check that the page is live right before you fill the form.
- **A fetched page can be a stale copy.** A fetch tool once showed a posting as open with an apply form. In a real browser tab the board was gone. Confirm in the browser before you tailor a CV, not after.
- **A checker can be wrong in both directions.** The liveness script once marked an open posting as closed, because the phrase "no longer available" sat in the page's hidden script data. It now reads visible text only. Treat `CLOSED` from a plain page check as a prompt to look, the same as `UNKNOWN`.
- **A redirect to the job board is a closed posting.** Some boards do not show an error. They send you to the list of jobs. Check the address bar.
- **Language gates also sit in "Highlights" boxes.** One Spain-remote posting asked for fluent Russian in a summary box above the description.
- **Fetch one page per job site at a time.** Several requests to the same applicant system at once got rate limited, and a failed fetch is not a closed posting.
- **Curated newsletters beat search.** A weekly list tagged by country gave more live, eligible roles in one read than a day of web search. Web search returns mostly old aggregator copies.
- **Check your own history first.** Search the tracker before proposing a company. Some applicant systems reject duplicates, which can block a later, better role.

## CVs and profiles

- **Parsers invent data.** Job-site profile importers produced wrong locations, wrong seniority, garbled names and made-up education dates. Compare every pre-filled field with the fact file.
- **Do not let a tool change confirmed dates.**
- **Tailor lightly.** Headline, summary, skills line, ordering. Not wholesale rewrites. The more you rewrite, the more can be wrong.

## Forms

- Checkbox state can look wrong in a screenshot. Read it from the DOM.
- Changing a radio button can reset checkboxes. Set checkboxes last.
- React inputs may ignore plain value assignment. Use the native setter and fire an input event.
- Some required fields only show up after the first submit attempt. Read the error banner and show the person the new field before going on.
- Salary fields can be numeric only. Type digits, and state the currency in a note field if there is one.
- On some applicant systems the page blocks scripted reads but not fills. Check those forms by screenshot.
- Stop at Submit. Every time.

## Process

- Log failures. A failed listing that is not logged will be re-checked.
- Do not defend a score. If the scores do not predict outcomes, change the rubric.
- Automatic rejections within a day are a filter, not a verdict on you. Keep them separate in the data.
- Small samples mislead. Say so in every report.
- **Rejections can come under another name.** A parent group, a talent brand or the applicant system may sign the email. Before you drop an email with no match, check who owns the company you applied to.
- **A rejection is also a receipt.** One application had no confirmation page and was logged as unconfirmed. The rejection two weeks later proved it had gone through.
- **Log the round the same day.** One round of five applications ran in a session with no access to the tracker folder. The tracker and the published numbers were wrong until the next session added the rows from the notes.
- **Define each published number once.** "Stopped at a gate" first counted one status value and missed later rows that used other statuses. The number now comes from `scripts/funnel.py` (every row whose gate result starts with `fail`).

## Automated search tools

- Aggregators and tools re-surface what you already handled. Dedupe against the tracker first.
- "Worldwide" location tags are often wrong. Verify on the employer's page.
- Keep gates as fixed rules. A model that decides pass or fail is not stable from run to run, and its scores drift upward.
- Tool-written cover letters are drafts to fact-check, not to send.
- Measure cost before scheduling. A single afternoon of building and testing used the whole trial allowance.

## Before publishing a fork (checklist)

Keep these out of any public repo:

- Real `career-context.md`, `profile.yml`, `tracker.csv`, `cv/`, `logs/`, `stories/`, `reports/`.
- Names, emails, phone numbers and links of references, recruiters and hiring managers.
- Names of companies you applied to or were rejected by, with outcomes.
- Salary expectations, exit terms from a previous job, any dispute.
- Screenshots of forms that show personal data.

The `.gitignore` in this repo covers the standard paths. Check `git status` and search the history before every push.
