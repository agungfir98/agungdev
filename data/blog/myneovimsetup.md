---
title: My Neovim Setup
createdAt: 1687787438976
draft: false
image: ""
---

# Intro

Recently I got no motivation to code, mainly because I got no projects idea while also struggling finding a new job in my city.
Then I stumble upon __[Takuya Matsuyama's](https://www.youtube.com/@devaslife)__ (craftzdog) vim setup. I've always like the aesthetic setup he has so I decided to try neovim and configure it for my self.
So this is my setup. 

# Ingredients
Here is the ingredients for my neovim setup right now, it will be update from time to time.

* [Neovim](https://neovim.io/) > = 0.7
* [wbthomason/packer.nvim](https://github.com/wbthomason/packer.nvim.git) a neovim plugin manager.
* [olimorris/onedarkpro.nvim](https://github.com/olimorris/onedarkpro.nvim.git) Theme for neovim that I use.
* [nvim-lualine/lualine.nvim](https://github.com/nvim-lualine/lualine.nvim.git) A blazing fast and easy to configure neovim statusline plugin written in pure lua.  
* [williamboman/mason.nvim](https://github.com/williamboman/mason.nvim.git) Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters.
* [williamboman/mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig.nvim.git) Extension to mason.nvim that makes it easier to use lspconfig with mason.nvim.
* [nvim/neovim-lspconfig](https://github.com/neovim/nvim-lspconfig.git) Quickstart configs for Nvim LSP.
* [hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp.git) A completion plugin for neovim coded in Lua.
* [hrsh7th/cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp.git) nvim-cmp source for neovim builtin LSP client.
* [L3MON4D3/LuaSnip](https://github.com/L3MON4D3/LuaSnip.git) Snippet Engine for Neovim written in Lua.
* [rafamadriz/friendly-snippets](https://github.com/rafamadriz/friendly-snippets.git) Set of preconfigured snippets for different languages.
* [saadparwaiz1/cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip.git) luasnip completion source for nvim-cmp.
* [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) is a highly extendable fuzzy finder over lists.
* [nvim-telescope/telescope-file-browser.nvim](https://github.com/nvim-telescope/telescope-file-browser.nvim.git) File browser extension for telescope.nvim.
* [lewis6991/gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim.git) Git intergration for buffer.
* [akinsho/bufferline.nvim](https://github.com/akinsho/bufferline.nvim.git) A snazzy bufferline for neovim.
* [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git) Nvim Treesitter configurations and abstraction layer.
* [windwp/nvim-autopairs](https://github.com/windwp/nvim-autopairs.git) Autopair for neovim written in lua.
* [windwp/nvim-autotag](https://github.com/windwp/nvim-ts-autotag.git) Use treesitter to auto close and auto rename html tag.
* [lukas-reineke/indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim.git) Indent guides for neovim.

You can see my dotfiles repo here on file on my [github repo](https://github.com/agungfir98/nvim.git)

Everything is in the repo, but I will compile and show some of my keybind setup here.

```lua

-- nvim tree mapping
km.set('n', '<c-n>', ':NvimTreeFindFileToggle<CR>')


-- Moving line mapping
km.set('n', 'J', ':m .+1<CR>')
km.set('n', 'K', ':m .-2<CR>')
-- moving multiple line mapping
km.set('v', 'K', ":m '<-2<CR>gv=gv")
km.set('v', 'J', ":m '>+1<CR>gv=gv")

-- bufferline mapping for navigate buffer
vim.keymap.set('n', '<Tab>', '<Cmd>BufferLineCycleNext<CR>')
vim.keymap.set('n', '<leader><Tab>', '<Cmd>bufferLIneCyclePrev<CR>')
```

I have been trying to adopt neovim since 2022, but since it is really hard i had to constantly switch back to vscode. And now since that I finally managed to at least geting comfortable with neovim, I can see an improvement in speed. I no longer need to touch my mouse when writing code and have super usefull plugins and keybinding that make things faster and easier.

One thing I missed though, I can't find my favorite theme called mayukai, I  will probably try to learn how to port it from vscode if I should.

~Dasvidaniya!
