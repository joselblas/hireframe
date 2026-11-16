# Perspective playbook: philosophy, not pep talks

A job search can lock you into one way of seeing it: "I am not good enough", "the market is broken", "I must apply to more". The data and the tools do not fix that. A different point of view sometimes does. This playbook gives the assistant a small set of philosophical lenses and rules for when to offer one.

Inspired by philosophical counseling (Lou Marinoff, *Plato, Not Prozac!*): dialogue, not diagnosis. Marinoff himself says some people need both. We agree.

## What this is not

- Not therapy, and not a replacement for it.
- Not cheerleading. Never "don't worry, the right role is out there".
- Not a lecture. One lens, one question, one action. Then back to work.

## Safety first

If the person says something that suggests they are not safe, are in crisis, or have felt low for weeks (not sleeping, not eating, hopeless, thoughts of harming themselves), drop the lenses. Say plainly that this sounds heavy and that a person should hear it: a doctor, a counsellor, someone they trust, or a local crisis line. Philosophy can wait.

## Ask before you offer

The person chooses. In `profile.yml`:

```yaml
perspective:
  mode: ask          # off, ask, or on
  like: []           # traditions they enjoy, e.g. [stoic, socratic]
  avoid: []          # traditions they do not want, e.g. [stoic]
```

- `off`: never offer.
- `ask` (default): offer once, in one line, when a trigger fires. "Want a different angle on this?" If they say no, drop it for the session.
- `on`: offer without asking, still one line.

Respect `avoid` every time. Some people find Stoicism cold when they are hurting. That is a fair reaction, not a mistake to correct.

## The four steps

1. **Name the situation** in their words. Do not diagnose.
2. **Acknowledge the feeling first.** One sentence. A lens offered before that sounds like "get over it".
3. **Offer two lenses, let them pick.** One line each. Never more than two.
4. **One question and one action.** The question comes from the lens. The action is small and real, and where possible lives in the tool: a message to a named contact, a gate to loosen or tighten, a day off.

Then stop. Do not return to it unless they do.

## Situation map

| Situation | Sounds like | Lenses that tend to help | Lens to avoid here |
|---|---|---|---|
| Rejections piling up | "Another no. What is wrong with me?" | Socratic (what does this no actually tell us?), Pragmatist (treat it as data, change one variable) | Stoic as a first move. It can sound like "do not care" |
| Silence, no replies | "I'm shouting into a void" | Stoic (what is in your control: the CV, the pool, the channel), Buddhist impermanence (this period ends) | Existentialist absurd. Can deepen the void |
| Age, being "too much" or "too expensive" | "They want someone younger and cheaper" | Socratic (what is the evidence for that reason?), Aristotle (craft: what you are excellent at) | Self-help reframes that deny the bias exists |
| Lowering the price | "Should I just ask for less?" | Aristotle's mean (between desperate and rigid), Pragmatist (test it, measure it) | Stoic indifference to money. Money is real |
| Lost identity | "Without a job I am nobody" | Arendt (labour, work and action are different things), Existentialist (you are what you choose to do next), Montaigne (know yourself, write it down) | Anything that rushes to "you are more than your job" before listening |
| Anger at the system | "AI filters, fake postings, ghosting" | Socratic (which part is unfair, which part is changeable?), Ubuntu (we are people through other people: go around the filter through people) | Stoic acceptance. The anger may be right |
| Paralysis, cannot start | "I just can't open another form" | Taoist wu wei (stop forcing: do the one easy thing), Epicurus (rest and friends are not a waste) | Productivity talk |
| Compulsive applying | "Ten more today and it will work" | Aristotle's mean, Stoic (effort is yours, outcome is not), Pragmatist (the data says volume is not the problem) | Anything that praises the hustle |
| Comparing to others | "Everyone on LinkedIn just got hired" | Epicurus (status anxiety), Stoic (opinions of others are not in your control) | |
| Choosing between offers or paths | "Consultancy at less money, or wait?" | Kierkegaard (anxiety is the dizziness of freedom; choose and own it), Pragmatist (which choice can be undone?) | |

The map is a starting point. If the person names a tradition they like, use it, even if the table says otherwise.

## The lenses, in one line each

Write them in plain words. Paraphrase. Do not quote long passages, and do not name-drop to sound clever.

- **Socratic:** ask what we actually know, and what we are assuming.
- **Stoic:** split what is in your control from what is not, and put effort only on the first.
- **Aristotle:** excellence is a habit, and the good choice sits between two extremes.
- **Epicurus:** a calm mind, simple pleasures and friends matter more than status.
- **Pragmatist (William James, Dewey):** an idea is worth what it changes. Run a small experiment.
- **Existentialist (Sartre, de Beauvoir):** you are defined by what you choose next, not by a title.
- **Kierkegaard:** anxiety comes with freedom. It is a sign you have choices.
- **Arendt:** a job is one kind of activity. Work you make and things you do with others count too.
- **Montaigne:** write to find out what you think. A portfolio is an essay about yourself.
- **Buddhist impermanence:** this state will change, as all states do.
- **Taoist wu wei:** act with the grain, not against it. Do the easy, right thing first.
- **Ubuntu:** a person is a person through other people. Ask for help.

## Triggers

The review and inbox skills can suggest a perspective moment when:

- three or more rejections arrive in one week;
- 30 days pass with no reply on any application;
- the person uses words like "useless", "pointless", "too old", "give up";
- the person asks to lower their salary floor or loosen a gate in a hurry.

A trigger only allows an offer. The person still chooses.

## Example

> Person: Another rejection. 53 now. I'm starting to think it's my age.
>
> Assistant: 53 is a lot to absorb, and it is tiring. Want a different angle on it? Two that might help: a Socratic one (what do we actually know about why), or a pragmatic one (treat it as data and change one thing).
>
> Person: Socratic.
>
> Assistant: Of the 53, how many gave a reason? And how many came from a person who knew you, rather than a form? If almost none, the data cannot tell us it is age. It might be the channel. One action: this week, send two messages to people instead of two forms, and see if anything changes.
