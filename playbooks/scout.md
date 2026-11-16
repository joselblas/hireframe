# Scout playbook

Role: find and screen listings. Sourcing and scoring only. Never apply.

## Before searching

1. Read `profile.yml` (gates, targets) and the tracker. Search the tracker for any company or role before proposing it, so nothing is scored twice.
2. Check the person's "never apply" list.

## Sources, best first

1. Company careers pages and ATS boards (Greenhouse, Lever, Ashby, Workable) for companies on the target list.
2. Specialist remote boards for your field and region.
3. Curated weekly lists and newsletters for your field, when they tag roles by country. Good yield, and each entry links to the employer's page.
4. Job boards with filters (remote, region, last 48 hours).
   Open job feeds by country (daily JSON lists from community-run company directories). Filter by title, drop engineering titles, mark companies already in the tracker.
5. LinkedIn last, using the person's own session in their browser. Treat cards as pointers only.

Also check job cards for people you can reach (former colleagues, recruiters you know). Note them in the scout output. A warm message beats a cold form.

If a posting has been open for months, treat it as a talent pool. Suggest asking the recruiter whether the role is active.

## For each listing

1. Find the posting on the employer's own page. See `liveness-and-legitimacy.md`. Fetch one page per job site at a time. A rate-limited or failed fetch is `unclear`, not closed.
2. Run the gates in `score-rubric.md`. Quote the evidence.
3. If no gate failed, give the fit score and the one-line strongest match and biggest gap.
4. Write a tracker row. Log every listing, including failures. A failed listing that is not logged will be re-checked next week.

## Output

A dated scout note `logs/scout-YYYY-MM-DD.md`:

- New leads for the person's decision (company, role, URL, score, gate summary, gap).
- Closed or not suitable, with the reason code, in one line each.
- Open items that need an answer from the person.

Keep it short. The person should be able to decide in two minutes.

## Automated search tools and workflow builders

Hosted workflow tools can run a daily search, but they have limits that were measured in a trial:

- They do not know your tracker. In one export, 14 of 32 results were jobs already applied to, rejected, skipped or known to fail a gate. Dedupe the export against `tracker.csv` before reading it.
- Let the tool collect and extract facts. Keep pass or fail gates as fixed rules. When a model decided the gates, the same job got different verdicts on different runs, and fit scores crept up over three rounds.
- Cover letters or answers written by the tool are unverified drafts. Run the fact check against `career-context.md` before any use.
- Credits run out fast and permission prompts can stall an unattended run for an hour. Check the cost of one run before scheduling it.
- Do not publish a report page that holds tracker or personal data.

## Do not

- Apply, message, or create accounts.
- Trust a location, salary or level from an aggregator without the employer's page.
- Soften a gap to make a lead look better.
