let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/PycharmProjects/MyBlog
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +419 static/myJS/script.js
badd +234 static/myJS/color_theme.js
badd +66 common/templates/common/preview.html
badd +6 term://~/PycharmProjects/MyBlog//2200:cmd
badd +1 static/myJS/articles_anim.js
badd +1 templates/main.html
badd +76 ~/AppData/Local/nvim/init.vim
badd +118 term://~/PycharmProjects/MyBlog//12060:cmd
badd +15 term://~/PycharmProjects/MyBlog//8036:C:/Windows/system32/cmd.exe
badd +4 term://~/PycharmProjects/MyBlog//11968:C:/Windows/system32/cmd.exe
badd +0 term://~/PycharmProjects/MyBlog//8336:C:/Windows/system32/cmd.exe
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit static/myJS/color_theme.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 73) / 146)
exe '2resize ' . ((&lines * 22 + 16) / 33)
exe 'vert 2resize ' . ((&columns * 115 + 73) / 146)
exe '3resize ' . ((&lines * 7 + 16) / 33)
exe 'vert 3resize ' . ((&columns * 115 + 73) / 146)
argglobal
enew
file NERD_tree_1
balt static/myJS/color_theme.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
lcd ~/PycharmProjects/MyBlog
wincmd w
argglobal
balt term://~/PycharmProjects/MyBlog//12060:cmd
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 234 - ((10 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 234
normal! 042|
lcd ~/PycharmProjects/MyBlog
wincmd w
argglobal
if bufexists(fnamemodify("term://~/PycharmProjects/MyBlog//8336:C:/Windows/system32/cmd.exe", ":p")) | buffer term://~/PycharmProjects/MyBlog//8336:C:/Windows/system32/cmd.exe | else | edit term://~/PycharmProjects/MyBlog//8336:C:/Windows/system32/cmd.exe | endif
if &buftype ==# 'terminal'
  silent file term://~/PycharmProjects/MyBlog//8336:C:/Windows/system32/cmd.exe
endif
balt term://~/PycharmProjects/MyBlog//12060:cmd
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 4 - ((3 * winheight(0) + 3) / 7)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 041|
lcd ~/PycharmProjects/MyBlog
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 73) / 146)
exe '2resize ' . ((&lines * 22 + 16) / 33)
exe 'vert 2resize ' . ((&columns * 115 + 73) / 146)
exe '3resize ' . ((&lines * 7 + 16) / 33)
exe 'vert 3resize ' . ((&columns * 115 + 73) / 146)
tabnext
edit ~/PycharmProjects/MyBlog/static/myJS/script.js
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 419 - ((15 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 419
normal! 050|
tabnext
edit ~/PycharmProjects/MyBlog/templates/main.html
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 17 - ((0 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 031|
tabnext 1
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
