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
- **Open job feeds by country exist.** Some community lists of tech companies publish a daily jobs file. Filter it by title, drop engineering titles that contain your keywords (a plain "ux" match also hits "Linux"), and mark companies already in the tracker. Treat each row as a pointer to the employer's page.
- **Evergreen postings are talent pools.** A role that stays open for months is often a pool, not a seat. Apply if it fits, then ask the recruiter directly whether they are hiring now.
- **Look for people you can reach.** Some job cards show contacts at the company, such as former colleagues or recruiters you already talked to. A short message to a named person beats one more cold form.
- **Aggregator ads republished for months** with no change are a legitimacy signal. Note it, and find the employer's own page.

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
- **"I sent it" needs checking.** One application the person thought was sent was still a filled form. Check the site's "applied" list or the job page before logging it.
- **Easy Apply forms drop an uploaded CV if you leave.** Upload, check the file name on the page, and submit in the same visit.
- **Some file pickers cannot be reached by a browser tool.** If the upload button opens a picker the tool cannot see, the input may only exist for a moment. Make the page attach the input to the document, then use the tool's file upload on it.
- **Some applicant systems need an account.** SuccessFactors-style portals and national job boards ask for a login before the form. The person signs in. Plan these as a separate step, not a blocker found at the end.

## Process

- Log failures. A failed listing that is not logged will be re-checked.
- Do not defend a score. If the scores do not predict outcomes, change the rubric.
- Automatic rejections within a day are a filter, not a verdict on you. Keep them separate in the data.
- Small samples mislead. Say so in every report.
- **Rejections can come under another name.** A parent group, a talent brand or the applicant system may sign the email. Before you drop an email with no match, check who owns the company you applied to.
- **A rejection is also a receipt.** One application had no confirmation page and was logged as unconfirmed. The rejection two weeks later proved it had gone through.
- **Log the round the same day.** One round of five applications ran in a session with no access to the tracker folder. The tracker and the published numbers were wrong until the next session added the rows from the notes.
- **Never delete files in the person's folders unless asked.** An agent tidied up temporary files nobody asked it to touch. Ask first, every time.
- **Define each published number once.** "Stopped at a gate" first counted one status value and missed later rows that used other statuses. The number now comes from `scripts/funnel.py` (every row whose gate result starts with `fail`).

## Positioning and pay

- **Change the pool and the channel before the price.** After 100+ cold applications with no interview, the only interview had come from a recruiter. A lower salary ask did not change that. What changed it was a clearer positioning line and talking to people.
- **The fit score did not predict interviews.** High-scored and mid-scored roles had the same response rate. The score is a filter for effort, not a forecast.
- **Check market pay data before setting a floor.** Public salary datasets for your country and role show the middle range and the effect of years of experience. In one country, consultancies paid about a third less than product companies for the same title. Know which pool you are in.
- **Keep every public profile saying the same thing.** Headline, About, education and the CV should match the fact file. Save the old text before you change a profile, so you can roll back.
- **Show how you work with AI, with numbers.** A short portfolio page with real numbers (output per week before and after), the rules you keep (human sign-off, one source of facts, fixed gates) and a dated log works better than a list of tools. If faster output only moved the bottleneck, say that. It is the more senior lesson.

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
