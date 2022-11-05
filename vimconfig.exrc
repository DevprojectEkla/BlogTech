"démarrer le server et ouvrir le site dans firefox
nnoremap <leader>serv :new term://cmd<CR>istart_server.bat<CR>
nnoremap <leader>mig :new term://cmd<CR>imigrate.bat<CR>exit<CR><CR>

"compilateur sass. Permet de générer les fichiers style.css et style.min.css
nmap <Leader>wmsass :new term://cmd<CR>isass --watch style.scss static\\css\\style.min.css --style compressed <CR>
nmap <Leader>sass :new term://cmd<CR>isass style.scss static\\css\\style.css
nmap <Leader>wsass :new term://cmd<CR>isass --watch style.scss static\\css\\style.css
 
