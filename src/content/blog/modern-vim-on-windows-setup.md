---
title: "Modern Vim on Windows Setup"
description: "A comprehensive guide to setting up Vim on Windows for modern web development workflows."
pubDatetime: 2025-01-18
---

Hey there! Let me tell you about my journey into the world of minimalist (yet powerful) web development with Vim on Windows. If you think this is just another boring setup guide, think again! This is about nostalgia meeting practicality, with a modern twist.

### My Dotfiles: The Secret Sauce

Before we dive into the specifics, let me point you to the heart of my setup: [my dotfiles](https://github.com/bgcicca/dotfiles). These guys have configs for everything—Windows Terminal, `.bashrc`, Neovim, Emacs, WezTerm, you name it. It’s basically my entire development environment in one neat repository. If you’re curious about how I tie all these tools together, that’s the place to check out. Feel free to fork or steal ideas for your own setup!

### Why Vim?

First off, why am I even using Vim in 2025 when there are IDEs like VSCode that come with all the bells and whistles? Simple: **speed** and **focus**. Vim is like that old reliable friend who’s always there for you, doesn’t crash, and doesn’t hog your RAM. Sure, it takes some time to get used to, but once you do, there’s no going back.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r90nnz79r7q0v3gptinn.jpg)

### The Terminal: Enter WezTerm

Before we dive into my Vim config, let me introduce you to my terminal emulator of choice: **WezTerm**. This is hands-down the best terminal I’ve used on Windows. It’s fast, super customizable, and feels snappy as hell. No disrespect to Windows Terminal or other options, but WezTerm just _clicked_ for me. It’s perfect for running Vim, Git, Node.js, and whatever else I throw at it.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ct5h93qxrtpnq6bhhf5r.jpg)

### The Vim Setup

Okay, now for the main event: my Vim config. I’ve kept it clean and focused on what I actually need for web development—none of those bloated plugin setups or endless configs. It’s all about keeping things efficient while still being powerful.

Here’s the core of my `.vimrc`:

```vim
set runtimepath+=C:\Users\Usuario\.vim\bundle\Vundle.vim
set runtimepath+=%USERPROFILE%\.vim\bundle\YouCompleteMe

syntax on
set nocompatible
set number
set expandtab
set shiftwidth=4
set tabstop=4
set autoindent
set smartindent
set mouse=a
set cursorline
set clipboard=unnamedplus
set guicursor=n-v-c:block,i:block,r-cr:hor20,o:hor50
set history=500

call vundle#begin('C:\Users\Usuario\.vim\bundle\')
Plugin 'VundleVim/Vundle.vim'
Plugin 'neko-night/Vim'
Plugin 'tpope/vim-commentary'
Plugin 'preservim/nerdtree'
Plugin 'jiangmiao/auto-pairs'
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'
Plugin 'dense-analysis/ale'
Plugin 'prettier/vim-prettier', {'do': 'npm install'}
call vundle#end()

let mapleader = "\\"

set backspace=indent,eol,start
set termguicolors

inoremap jk <ESC>
nnoremap <C-c> :%y+<CR>
nnoremap <C-s> :w<CR>
nnoremap <Leader>t :terminal<CR>
nnoremap <C-v> "+p
nnoremap <C-z> u
vnoremap <C-v> "+p
nnoremap <C-f> :NERDTreeFind<CR>
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <Leader>p :Prettier<CR>
inoremap <C-v> <Esc>"+pa
inoremap <A-Up> <Esc>:m-2<CR>a
inoremap <A-Down> <Esc>:m+<CR>a
inoremap <C-Up> <Esc>v<Up>
inoremap <C-Down> <Esc>v<Down>

colorscheme nekonight-night

let g:ycm_global_ycm_extra_conf = '%USERPROFILE%\.vim\bundle\YouCompleteMe\third_party\ycmd\examples\ycm_extra_conf.py'
set completeopt=menuone,noinsert,noselect

let g:ale_linters = {
\   'javascript': ['eslint'],
\   'javascriptreact': ['eslint'],
\}
let g:ale_fixers = {
\   'javascript': ['prettier'],
\   'javascriptreact': ['prettier'],
\}
let g:ale_fix_on_save = 1

let g:prettier#exec_cmd_async = 1
let g:prettier#autoformat = 1
let g:prettier#autoformat_require_pragma = 0
```

### Highlights of the Config

- **Vundle**: Keeping plugins minimal and organized. Vundle just works.
- **NERDTree**: Because sometimes you _do_ need a file explorer.
- **ALE**: My linter and fixer of choice. ESLint + Prettier integration for JavaScript.
- **YouCompleteMe**: Powerful autocomplete for coding efficiency.
- **Prettier**: Auto-formatting on save keeps my code looking sharp.

### Why No Live Server?

That’s right—no live server here. I’m rocking it old-school. I’ll manually refresh the browser, thank you very much. There’s something oddly satisfying about coding this way—it forces me to focus on writing good code instead of relying on instant feedback.

### Key Mappings to Love

One of my favorite things about this setup is the key mappings:

- **`jk` to escape insert mode**: No more reaching for `Esc`!
- **`<C-s>` to save**: Muscle memory from modern editors.
- **`<C-c>` to copy the entire file**: Instant sharing.
- **`<Leader>t` for terminal**: Integrated terminal goodness.
- **`<C-n>` and `<C-t>` for NERDTree**: Toggling the file explorer couldn’t be easier.

### The Retro Experience

Developing in Vim on Windows feels nostalgic yet modern. Sure, I don’t have all the fancy tools like live servers or extensions popping up every other second, but that’s the point. It’s a distraction-free environment where I can actually focus on coding.

### Closing Thoughts

If you’re looking for a lightweight, snappy development setup on Windows, give this a shot. Pairing Vim with WezTerm gives you a robust environment that’s both efficient and fun to use. It’s a bit of a throwback, sure, but it’s got all the modern tools you need to get the job done. Happy coding!
