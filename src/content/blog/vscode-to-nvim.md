---
title: "Migrating from VSCode to Neovim: A Journey of Learning, Confusion, and Triumph! 🚀"
description: "Making the leap from **VSCode** to **Neovim** has been a ride! If you're reading this, maybe you're curious about what it's like to ditch the familiar comforts of **VSCode** and dive into the strange, keyboard-centric world of **Neovim**. Here's a peek into how it’s going for me, the learning curve, and a few of the basics I’ve picked up to survive in the land of Vim. 😉"
pubDatetime: 2024-11-13T15:40:00Z
tags: ["go", "typescript", "nvim", "vim"]
author: "Bruno Ciccarino"
featured: false
draft: false
---

Making the leap from **VSCode** to **Neovim** has been a ride! If you're reading this, maybe you're curious about what it's like to ditch the familiar comforts of **VSCode** and dive into the strange, keyboard-centric world of **Neovim**. Here's a peek into how it’s going for me, the learning curve, and a few of the basics I’ve picked up to survive in the land of Vim. 😉


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bohw7vluishy4cckf6i3.jpg)
[My personal config](https://github.com/BrunoCiccarino/Dotfiles/)

### Day 1: Total Confusion but Small Wins 😵

Opening **Neovim** for the first time felt like stepping into a foreign land. The interface was bare – no icons, no panels – just me and an empty black screen. I thought, “Okay, how hard can it be?” Well, pretty hard, as it turned out! I was lost without the usual **VSCode** comforts, like buttons to save, close, or rename files. All I knew was how to enter "insert mode" with i to start typing, but beyond that, I was completely in the dark.

The first thing I had to conquer was simply saving and quitting. Even those basics felt like a mini-victory at this point. Here’s what I quickly added to my arsenal:

Save: `:w`
Quit: `:q`
Save and Quit: `:wq`
But after getting these basics down, I realized I’d need to learn how to name files, so I didn’t end up with a bunch of untitled buffers. Turns out, naming a file as you save it is as easy as `:w` filename. This way, I could start to keep track of my work without feeling lost. Just knowing how to save with a filename helped make Neovim feel a tiny bit more familiar!

Plugin Manager Installation: Enter **lazy.nvim**
After a few hours of fidgeting, I realized that adding a plugin manager was a top priority. I’d read that plugins can make Neovim infinitely more functional, so I installed **lazy.nvim**, a plugin manager. **Lazy.nvim** makes it much easier to manage plugins in Neovim, and I liked the flexibility of controlling everything from a configuration file. Once installed, I was excited to try out some basic plugins and make my **Neovim** experience a little more user-friendly – but that would come later.

### Days 2-3: Getting the Hang of It 🔄

By the second day, I got serious about configuring Neovim for Go programming. Neovim is amazing because it’s so customizable, but that also means you have to set up pretty much everything yourself. I spent hours tinkering with my configuration file, **nvim** (later switching to init.lua for **Neovim**). Eventually, I got some features working, like syntax highlighting and code completion. Slowly but surely, I started understanding what each setting was doing.

It felt rewarding, like assembling my own setup from scratch. I could make it exactly how I wanted it, without any unnecessary fluff. Here’s what I learned about moving around and selecting text without a mouse:

Navigate by character: Arrow keys or `h, j, k, l`
Move between words: w (next word), b (back one word)
Copy (yank): `y` (then select with v or move to the line/word you want)
Paste: `p`

### Days 4-5: Custom Config Achieved! 🎉

Fast-forward to day four, and I had my own Go development environment up and running! I installed gopls (the Go language server) and configured it with Neovim’s built-in Language Server Protocol (LSP). There was a learning curve here, but it’s awesome knowing I built it all. Now, I have everything I need right at my fingertips. And let me tell you, nothing feels as satisfying as creating a setup that works exactly how you want it.

Learning the Basics: Commands that Saved Me 🛠️
If you’re new to Neovim or just curious, here are some essential commands that’ll make your life easier:

Basic Navigation (no plugins needed):

Move to next/previous file in a directory: :e <filename> or :e . to open file explorer
Switch buffers: `:bn` (next buffer), `:bp` (previous buffer)
Working with Text:

Select multiple lines: `V` and use `j` or `k` to expand up or down
Cut (delete): `d` (then move to where you want it cut)
Copy (yank): `y` (use yw for a word or yy for a line)
Undo/Redo: `u` for undo, Ctrl + r for redo
Split Screen: Super useful for coding!

Horizontal split: `:split` <filename> (or :sp)
Vertical split: `:vsplit` <filename> (or :vsp)
Navigating splits: `Ctrl + w` and then arrow keys (or h, j, k, l)
File Navigation (No Mouse!):

File Explorer: :e . then navigate with arrows
Jump to matching parentheses/brackets: %

### Days 6-7: Entering the World of Plugins 🚀

Once I got comfortable with the basics, it was time to spice things up a bit. Neovim on its own is powerful, but plugins take it to another level. They’re like superpowers that make editing and navigation faster, prettier, and much more tailored to your needs. I installed a few essentials like telescope.nvim for fuzzy finding files and nvim-tree as a file explorer. Figuring out how to install and configure plugins took some trial and error, especially since there are different ways to manage plugins (I went with lazy.nvim). But once I had everything in place, it was like a lightbulb went off. I realized how limitless Neovim could be with the right setup.

Here’s the lowdown on plugins that really changed the game:

* Telescope: Think of it as a supercharged file search tool. Type :Telescope find_files to search files quickly. It’s perfect when I don’t want to navigate folders manually.
* nvim-lspconfig: Sets up the Language Server Protocol (LSP) for various languages, providing code completion and diagnostics. With a few lines of configuration, I had autocompletion, inline diagnostics, and even function signatures popping up as I typed.
* Lualine: A customizable status line that makes Neovim look more modern and gives you useful info at a glance, like your current position in the file and the Git branch.

If you’re thinking about plugins, definitely take your time setting them up. It’s all about making Neovim feel like “home” and fitting your workflow like a glove.

### Days 8-9: Vim Motions and Macros – My New Best Friends ⚡

One of the best discoveries in my Neovim journey was getting into Vim motions and macros. Vim motions are the secret sauce for navigating code super quickly without a mouse. Learning to move by paragraphs, sentences, and even specific patterns made me feel like I had full control of my text, and it’s way faster than using arrow keys.

And then there are macros. Imagine recording a sequence of actions you repeat often and then replaying them with a single keystroke. This blew my mind! I used to repeat so many edits manually in VSCode, but with macros in Neovim, I could automate everything. Just press q followed by a letter to start recording, do your actions, and press q again to stop. Then, whenever you need to repeat, just type @ followed by the letter you used to record.

### Days 10-14: Getting in the Flow 🌊

Now, after about two weeks, I'm really feeling the rhythm. I know most of the commands by heart, and switching between files, navigating, and editing feels smoother. I’m also getting more into the habit of using buffers, which let you open multiple files without actually splitting the screen. Switching between buffers with :bn and :bp makes multitasking easier than ever, and it’s satisfying to know exactly where everything is in my setup.

It’s also awesome not needing the mouse at all. At first, it felt unnatural, but now it’s second nature. I’d honestly say it’s made me faster and more focused because I’m not constantly moving my hand away from the keyboard. Everything I need is right at my fingertips.

Bonus Tips for Newcomers 🔥

* Learn the Leader Key: It’s a shortcut you can set up for quick access to custom commands. Mine’s mapped to the spacebar, so I can do things like save all files with <leader>w or close a buffer with <leader>q.
* Embrace Command Mode: Get used to using : commands. It’s like having a powerful terminal built into your editor.
* Stay Patient: The learning curve is real, but it's worth it. Every little thing you learn sticks with you and becomes part of your editing “muscle memory.”

### Final Thoughts: The Neovim Life

Moving to Neovim has been like switching from driving an automatic car to a manual one. Sure, it takes more effort, but once you get the hang of it, it’s so much more rewarding and empowering. I’m still learning, but now I feel like Neovim is an ally rather than an obstacle. If you want total control over your editor and you’re up for the adventure, Neovim is an amazing place to be.

Who knows what I’ll discover next? If you want me to do it with emacs too, comment there. 