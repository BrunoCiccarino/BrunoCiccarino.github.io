---
title: "From Astro.js Rookie to a Successful GitHub Pages Build"
description: "A detailed guide on my journey to building and deploying a website with Astro.js and GitHub Pages."
pubDatetime: 2025-01-18T06:40:00Z
tags: ["Astro.js", "GitHub Pages", "Build"]
author: "Bruno Ciccarino"
featured: false
draft: false
---

# From Astro.js Rookie to a Successful GitHub Pages Build: My Journey

Hey there! Let me tell you about my wild ride of getting my first build deployed with Astro.js and GitHub Pages. It’s a story of trial, error, a few facepalms, and a lot of perseverance. If you're into web development or just like hearing about someone else's learning curve, stick around. You might even learn from my mistakes (or at least have a good laugh).

## The Beginning: Editing the Template

So, it all started when I decided to use Astro.js for my project. I went with the "Astro Paper" template because, why not? It looked cool and seemed like a good starting point. Editing the template? Easy peasy. I made it look exactly the way I wanted. Confidence level: 100. Little did I know what awaited me.

## First Deploy Attempt: Workflow Woes

Feeling pumped, I tried deploying my project to GitHub Pages. Boom. It didn’t work. Turns out, I had the wrong workflow set up. The “`dist`” folder, which contains all the built files, wasn’t loading. Rookie mistake, but hey, we’re here to learn, right?

## Second Deploy Attempt: Workflow Strike Two

Okay, so I went back and fixed the workflow. At least, I _thought_ I did. Nope. Still didn’t work. I double-checked everything, but something was off. At this point, frustration was creeping in.

## The Subtree Push Fiasco

I decided to try another approach. I moved all the files to the root directory of my repo. Then I hit another wall. Git’s `subtree push` command wasn’t cooperating. It’s like the universe was conspiring against me. Why did it have to be this hard?

## Accidental Branch Deletion

While juggling branches, I managed to delete the deploy branch by accident. Yay for clumsiness! I stared at the screen for a moment, considering whether to laugh or cry. Ultimately, I decided to just keep going.

## Merge Madness

Finally, I managed to get a branch in decent shape—or so I thought. But then I merged the deploy branch with my testing branch, and surprise, surprise: everything broke again. At this point, I was questioning all my life choices.

## A Glimmer of Hope

After yet another sleepless night, I finally got a working build. Or so I thought (yes, again). The site loaded, but the CSS was MIA. It’s like a website showing up to a party without its outfit. Embarrassing.

## The Missing Line:

By this point, I was running on fumes, coffee, and sheer determination. I combed through everything and finally found the culprit: my `astro.config.ts` file. It was missing this one crucial line:

```ts
base: "/",
```

That was it. That one line fixed everything. The CSS loaded perfectly, and my site was finally looking as it should.

## Lessons Learned

Here’s what I took away from this whole ordeal:

1. **Double-check your workflows**: GitHub Pages has specific requirements, and it’s worth triple-checking them before deploying.
2. **Understand your tools**: Git commands like `subtree push` can be tricky if you’re not familiar with them. Read the docs!
3. **Don’t panic**: Accidental branch deletions and broken builds happen to the best of us. Stay calm and keep going.
4. **Configs matter**: Missing or incorrect configuration files can be the root of your problems. In my case, it was a single line in `astro.config.ts`.

## Wrapping Up

In the end, I learned a ton about Astro.js, GitHub Pages, and myself. The journey wasn’t smooth, but the satisfaction of seeing my site live and functional made it all worth it. If you’re struggling with a similar process, don’t give up. You’ve got this.

And hey, if I can figure this out at 3 AM with an empty stomach and a lot of anxiety, so can you!

## GitHub Pages: The Final Troll  

Just when I thought I had it all figured out, GitHub Pages decided to troll me. For some reason, it just wouldn’t recognize my deploy branch. Now, I’ll be the first to admit that this was *very* likely a skill issue on my part. But still, it completely derailed my progress and ate up even more hours of trial and error.  

I tried everything. First, I went the manual route, filtering files by hand and pushing them to the deploy branch. Nope. Then, I gave GitHub Actions a shot—because automation, right? Well, turns out I’m apparently too incompetent to make that work. Finally, I resorted to the `gh-pages` CLI. Even that didn’t cooperate. It was like GitHub Pages was sitting back, laughing at my misery.  

After 40 straight hours awake (powered by caffeine and sheer stubbornness), I finally threw in the towel. My patience was gone, my hair was turning gray, and I felt like GitHub Pages had won. So, I migrated to Vercel. Let me tell you, deploying with Vercel was like walking into an air-conditioned room after running a marathon in the desert—it just worked. It was simple, quick, and exactly what I needed after the chaos.  

## A Silver Lining  

Despite the madness, I have to say, this journey was oddly fun in hindsight. Sure, it was exhausting, but I learned *a lot*—not just about Astro.js and deployment workflows, but also about resilience. If there’s one thing this experience taught me, it’s that sometimes the best way forward is to step back, laugh at your own stubbornness, and take a simpler path.  

So, shoutout to GitHub Pages for the lessons (and the trolling), and to Vercel for being my saving grace. This was one wild ride I’ll never forget.  

## Another Update: The GitHub Pages Miracle

After 44 hours of battling with deployment, I finally managed to get it working on GitHub Pages. Miraculously, once I got it working on Vercel, I was able to successfully deploy it to GitHub Pages in just 30 minutes after tweaking the workflow. It was like everything finally fell into place!