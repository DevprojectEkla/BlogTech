Après ma découverte de <strong>Vim</strong> j'ai rapidement entendu parler de <a class="mybadge-orange text-decoration-none" href="https://neovim.io" target="_blank" rel="noopener noreferrer"><strong>Neovim</strong></a>. <strong>Vim</strong>, qui veut dire <strong>Vi</strong> <em><strong>IM</strong>prove</em> est déjà une amélioration d'un éditeur antérieur du nom de <strong>Vi</strong> (pour Visual). <strong>Vi</strong> était au départ un simple logiciel de présentation/visualisation de texte. <strong>Neovim</strong> vient donc à nouveau, après <strong>Vim</strong> pour encore améliorer les fonctionalités de ce qui était autrefois <strong>Vi</strong>. Je regrette un peu d'être passé trop rapidement à <strong>Neovim</strong> avant d'avoir vraiment exploité les potentialités de <em>'Vanilla'</em> <strong>Vim</strong> (= <strong>Vim</strong> pur, avant <strong>Neovim</strong>). La configuration du fichier<samp>&nbsp;.vimrc&nbsp;</samp>ainsi que les options natives de Vim permettent déjà de faire beaucoup de chose et il faut de toute façon s'y mettre pour utiliser Neovim (sur <em>'Vanilla'</em> <strong>Vim</strong> voyez <a class="mybadge-orange text-decoration-none" href="https://neovim.io" target="_blank" rel="noopener noreferrer">ce tuto</a> vraiment parfait pour sentir les choses). Neovim est, en effet, un clone (au sens de <em>git clone</em>, une <em>fork</em> du 'repo' <strong>Vim</strong>). <em>Anyway</em>...
Voici une copie d'un extrait de mon fichier<samp>&nbsp;.vimrc&nbsp;</samp>dans laquelle vous pouvez déjà entrevoir certaines fonctionnalités. Notez combien il est agréable de littéralement pouvoir programmer le logiciel qui vous sert à écrire des programmes:
<div class="accordion mx-5" id="myaccordion"><div class="accordion-item"><h2 class="accordion-header text-cyan-200" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Extrait de mon fichier <samp>&nbsp;.vimrc&nbsp;</samp>  ou plus exactement, dans Neovim, le fichier <samp>&nbsp;init.vim</samp>.</button></h2><div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#myaccordion"><div class="accordion-body"><code>&quot;======== Options & variables========</code><aside>Ces variables sont typiques d'un fichier<samp>&nbsp;.vrc&nbsp;</samp>, elles sont données dès le début dans les tutos et permettent une configuration de base qui ouvrent déjà de belles possibilités, comme l'auto-indentation, le numéro des lignes, la longueur d'une tabulation etc.</aside><code>
filetype on
filetype indent on
filetype plugin on
:set grepprg=grep\ -nH\ $*
:set number relativenumber
:set number
:set autoindent
:set smartindent
:set tabstop=4
:set expandtab
:set path+=**
[...]
:set exrc
:set complete-=i
if has('persistent_undo')         &quot;check if your vim version supports
  set undodir=$HOME/.vim/undo     &quot;directory where the undo files will be stored
  set undofile                    &quot;turn on the feature
endif
let $RTP=split(&runtimepath, ',')[0]
let $RC=$HOME.&quot;/Appdata/Local/nvim/init.vim&quot;
:set termguicolors
&quot; type 'zo' to open a fold , zf + (range) ex: zfn&lt;lt;CR&gt; will fold n+1 lines,
&quot; (because if you think a little you can't fold a single line)
&quot; in vmode select then type zf
&quot;==== my sourcing configfile option ============================
&quot; source custom config files that is present in cwd:</code><aside>J'ai créé le petit script qui suit en m'inspirant d'un script vim de base pour charger des fichiers de configuration<samp>&nbsp;.exrc&nbsp;</samp>spécifique à un projet.<br>Un tel fichier pourra contenir de nouveau <em>mapping</em> ou raccourcis clavier, spécifiques.<aside><code>if !empty(expand(glob(&quot;vimconfig.exrc&quot;)))   
    echo &quot;Specific vimconfig.exrc file exists. Sourcing now...&quot;
    echo &quot;new-command available for this project&quot;
    source vimconfig.exrc
else
    echo &quot;There is no specific vimconfig for this project, default init.vim file&quot;
endif
&quot;for more on this see:
&quot;https://stackoverflow.com/questions/46964475/how-can-i-source-files-relative-to-file
</code><br><aside>ci-dessous la sélection personnalisée d'un <strong>interpréteur python</strong>, on pourrait mettre cette ligne dans un fichier de config propre au projet pour obtenir l'<samp>&nbs;exe&nbs;</samp> de l'environnement virtuel correspondant</aside><code>
&quot; set a path for python.exe instead of letting vim searching for an interpreter
let g:python3_host_prog = 'C:\\Users\\boralevi\\AppData\\Local\\Programs\\Python\\Python39\\python.exe'
&quot;retour à la ligne automatique
nnoremap &lt;A-z&gt; :set wrap&lt;CR&gt;
nnoremap &lt;C-A-z&gt; :set nowrap&lt;CR&gt; 
</code><br><aside>Les plugins de <strong>Neovim</strong> sont chargés ici:<br>Le premier ajoute une barre d'état pour afficher tous les <strong>buffers</strong> (les &quot;tampons&quot;) des fichiers chargés en mémoire,<br>on a ensuite un plugin pour commenter des lignes de code en fonction du langage avec le raccourci <kbd>gcc</kbd><br>puis vous avez <strong>NerdTree</strong> qui permet d'afficher l'arborescence des fichiers de votre projet, etc.<br>Tout cela dans une fenêtre d'invite de commande. C'est plutôt pas mal, non?</aside><code>
call plug#begin()
Plug 'https://github.com/bling/vim-bufferline.git'
Plug 'https://github.com/tpope/vim-commentary.git'
Plug 'https://github.com/preservim/nerdtree.git'
Plug 'https://github.com/vim-airline/vim-airline.git'
Plug 'https://github.com/ap/vim-css-color'
Plug 'https://github.com/rafi/awesome-vim-colorschemes'
Plug 'https://github.com/tc50cal/vim-terminal'
Plug 'https://github.com/ryanoasis/vim-devicons'
Plug 'https://github.com/neoclide/coc.nvim'
Plug 'https://github.com/terryma/vim-multiple-cursors'
Plug 'https://github.com/preservim/tagbar'
Plug 'lewis6991/gitsigns.nvim' 
Plug 'https://github.com/MaskRay/ccls.git'
call plug#end()
&quot;il faut mettre cette variable après avoir charge les couleurs du plugin...&quot;
:colorscheme jellybeans
&quot;=========== My personal mappings ==========================
&quot;===========================================================
</code><aside><br>Ici commence le <em>mapping</em> des touches du claviers, <br>on peut définir des raccourcis pour tous les modes <code>i</code> pour <em>insert-mode</em>,<br> <code>n</code> pour <em>normal-mode</em>, etc.<br>Au début, vous avez les <em>mappings</em> de base...</aside><code>
&quot;enter in normal mode from Insert mode
:inoremap jk &lt;ESC&gt;
&quot;exchange the key 'j' and 'k' which by default are set to down and up resp.
&quot;now 'j' goes up and 'k' goes down which is more intuitive for me.
:noremap k j
:noremap j k
:nnoremap &lt;CR&gt; i&lt;CR&gt;&lt;ESC&gt;
:nnoremap &lt;BS&gt; i&lt;BS&gt;&lt;ESC&gt; 
&quot;show cwd
nnoremap &lt;Leader&gt;wd :pwd &lt;bar&gt; :sleep4&lt;CR&gt;
&quot;move to cwd
nnoremap &lt;Leader&gt;cwd :cd %:p:h&lt;CR&gt;&lt;bar&gt;:pwd &lt;bar&gt; :sleep4&lt;CR&gt;
&quot;source current file
nnoremap &lt;Leader&gt;src :w&lt;CR&gt;&lt;bar&gt;:so %&lt;CR&gt;
&quot;find a file and open it in a new tab
</code><aside>Celui-là me plaît particulièrement. <br>Un raccourci <kbd>Ctrl-p</kbd> me permet de faire une recherche pour ouvrir un fichier de mon projet dans un nouvel onglet.<br>On a l'équivalent sur VSCode mais c'était tellement facile à faire avec Vim<br></aside><code>
nnoremap &lt;C-p&gt; :tabfind 
&quot;switch the focus cursor to the left, bottom, top,left window
nnoremap &lt;A-h&gt; &lt;C-w&gt;h
nnoremap &lt;A-j&gt; &lt;C-w&gt;k
nnoremap &lt;A-k&gt; &lt;C-w&gt;j
nnoremap &lt;A-l&gt; &lt;C-w&gt;l
&quot;switch between tabs only in normal mode because i have autocompletion in
&quot;insert mode
nnoremap &lt;space&gt;&lt;Tab&gt; &lt;C-S-Up&gt;
nnoremap &lt;Tab&gt; &lt;C-S-Down&gt;
&quot;move the tab's position left or right in the list using alt+left/right arrow
nnoremap &lt;A-Left&gt; :-tabm &lt;CR&gt;
nnoremap &lt;A-Right&gt; :+tabm &lt;CR&gt;
&quot;====== Pairs in insert mode ===========================================
&quot;=======================================================================
&quot;inoremap &lt; &lt;&gt;&lt;Esc&gt;i this one is for html completion but we use html.vim
&quot;ftplugin instead..
&quot;surround a word with a pair of: (beware the cmd is Alt + &quot;, ', (... )
&quot;... double quotes &quot;&quot;:
nnoremap &lt;A-&quot;&gt; ciw&quot;&quot;&lt;ESC&gt;P
&quot;... simple quotes '':
nnoremap &lt;A-'&gt; ciw''&lt;ESC&gt;P
&quot;...brackets []:
nnoremap &lt;A-b&gt; ciw[]&lt;ESC&gt;P
&quot;...curly brace {}:
nnoremap &lt;A-c&gt; ciw{}&lt;ESC&gt;P
&quot;...parenthesis :
nnoremap &lt;A-(&gt; ciw()&lt;ESC&gt;P
&quot;visualmode mapping same as above:
&quot;... double quotes &quot;&quot;:
vnoremap &lt;A-&quot;&gt; c&quot;&quot;&lt;ESC&gt;P
vnoremap &lt;A-'&gt; c''&lt;ESC&gt;P
vnoremap &lt;A-b&gt; c[]&lt;ESC&gt;P
vnoremap &lt;A-c&gt; c{}&lt;ESC&gt;P
vnoremap &lt;A-(&gt; c()&lt;ESC&gt;P
&quot;======== HTML COMPLETION ========
&quot;get html autocompletion tags one &quot; only because I have paired quotes
&quot;:function HTMLcompletion()
[...]
&quot;:endfunction
&quot;autocmd FileType html :call HTMLcompletion() 
&quot;&quot;adjust the size of the splits&lt;button class=&quot;&quot;&gt;&lt;/button&gt; 
noremap &lt;silent&gt; &lt;C-Left&gt; :vertical resize +3 &lt;CR&gt;
noremap &lt;silent&gt; &lt;C-Right&gt; :vertical resize -3 &lt;CR&gt;
noremap &lt;silent&gt; &lt;C-Up&gt; :resize -3 &lt;CR&gt;
noremap &lt;silent&gt; &lt;C-Down&gt; :resize +3 &lt;CR&gt;
&quot;change 2 split windows from vertical to horizontal
map &lt;Leader&gt;th &lt;C-w&gt;t&lt;C-w&gt;H 
map &lt;Leader&gt;tk &lt;C-w&gt;t&lt;C-w&gt;K 
</code><aside>Le raccourci <kbd>&#92qS</kbd> me permet d'enregistrer une session<br>selon que le <code>s</code> est majuscule ou non je peux quitter la session en l'entregistrant</aside><code>
&quot;sauvegarder une session
nnoremap &lt;Leader&gt;qs :call CloseHiddenBuffers()&lt;bar&gt;:mksession! my_project.vim &lt;CR&gt;
&quot;sauvegarder et quitter la session
nnoremap &lt;Leader&gt;qS :call CloseHiddenBuffers()&lt;bar&gt;:mksession! my_project.vim&lt;CR&gt;:qa&lt;CR&gt;
</code><aside>Sans doute le plus puissant de tout, <br>les raccourcis de commandes dans le terminal.<br>J'ouvre un terminal avec <kbd>sh</kbd></aside><code>
&quot;create a term cmd in a new split window:
nmap &lt;Leader&gt;sh :new term:&#47;&#47;cmd&lt;CR&gt;i
map &lt;Leader&gt;sv &lt;C-w&gt;v&lt;C-w&gt;p&lt;ESC&gt;:vert &lt;bar&gt;term&lt;CR&gt;i
<br></code><aside>Ici je crée un <em>split</em> de ma fenêtre, horizontal avec un interpréteur python en ligne de commande avec <kbd>\tp</kbd></aside><code>&quot;========================PYTHON==============
&quot; open a python console: 
nmap &lt;Leader&gt;tp :new term:&#47;&#47;cmd&lt;CR&gt;ipython&lt;CR&gt;
</code><aside>Pour mes programmes en C voici toutes mes commandes pour compiler et lancer mes<samp>&nbs;exe&nbs;</samp> :</aside><code>
&quot;======= C PROGRAMMING ===========================
&quot;envoi une commande de compilation gcc du fichier et execute le programme.
map TC :w&lt;CR&gt;&lt;bar&gt;:new term:&#47;&#47;gcc &#37;:t -o &#37;:r&lt;CR&gt;&lt;bar&gt;:sleep 5 &lt;bar&gt;:q&lt;bar&gt;:new term:&#47;&#47;&#37;:r.exe&lt;CR&gt;
&quot;envoi une commande de compilation gcc de tous les fichiers .c et execute main.exe
map FC :w&lt;CR&gt;&lt;bar&gt;:new term:&#47;&#47;gcc *.c -o main&lt;CR&gt;&lt;bar&gt;:sleep 3 &lt;bar&gt;:q&lt;bar&gt;:new term:&#47;&#47;main.exe&lt;CR&gt;
&quot;simple compilation d'un fichier .c avec print du code source
map CC :w&lt;CR&gt;&lt;bar&gt;:new term:&#47;&#47;type &#37;:t && gcc &#37;:t -o &#37;:r&lt;CR&gt;
&quot; avec symbole de déboggage:
map &lt;A-d&gt; :w&lt;CR&gt;&lt;bar&gt;:new term:&#47;&#47;type &#37;:t && gcc -Og &#37;:t -o dbg&lt;CR&gt;
&quot; executer le fichier dont on a deja compile le code avec CC...
map &lt;A-x&gt; :new term:&#47;&#47;&#37;:r.exe&lt;CR&gt;
&quot;obtenir le code assembleur d'un fichier à débogguer du nom de dbg.exe
map &lt;Leader&gt;dbg :new term:&#47;&#47;cmd&lt;CR&gt;igdb&lt;CR&gt;&lt;CR&gt;&lt;CR&gt;file dbg.exe&lt;CR&gt;break main&lt;CR&gt;run&lt;CR&gt;disas&lt;CR&gt;
&quot;nmap &lt;A-g&gt; :Termdebug &#37;p:r.exe&lt;CR&gt; 
</code><aside>Toutes les commandes <strong>git</strong> en simple raccourci clavier, le pied !</aside><code>
&quot;=============== GIT COMMAND ===================
&quot;show all git commands:
map &lt;leader&gt;git? :&lt;Leader&gt; + &quot;gt, gitadd, gitc, gitcm, gitac, gitamend, pushheroku, pullheroku"
&quot; open a terminal to perform a git command
map &lt;Leader&gt;gt :new term:&#47;&#47;cmd git&lt;CR&gt;igit 
&quot;stage files to commit
map &lt;Leader&gt;gitadd :new term:&#47;&#47;git add -A & echo 'git add ok'&lt;CR&gt;
&quot;commit (open a vim editor to type commit message)
map &lt;Leader&gt;gitc :new term:&#47;&#47;git commit&lt;CR&gt;
&quot;commit but allows you to type a message directly in cmd
map &lt;Leader&gt;gitcm :new term:&#47;&#47;cmd&lt;CR&gt;igit commit -m &quot;"&lt;Left&gt;
&quot;add and commit
map &lt;Leader&gt;gitac :new term:&#47;&#47;git commit -a&lt;CR&gt;
&quot;commit --amend
map &lt;Leader&gt;gitamend :new term:&#47;&#47;git commit --amend&lt;CR&gt;
&quot;==== GIT Remote actions =======
&quot;git push to heroku
map &lt;Leader&gt;pushheroku :new term:&#47;&#47;git push heroku main&lt;CR&gt;
&quot;pull from heroku when the branch is behind...
map &lt;Leader&gt;pullheroku :new term:&#47;&#47;git pull heroku main&lt;CR&gt;
</code></div></div></div></div><div><p class="lead px-5 text-justify text-cyan-800 fw-weight-normal pt-5 pb-3"><strong>Neovim</strong> permet d'installer des <em>plugins</em> ce qui permet d'optimiser rapidement <strong>Vim</strong> et d'en faire un éditeur de texte complet, avec de l'autocomplétion (grâce au plugin coc), une barre d'état, des highlights en fonction de votre langage de programmation (déjà présent dans <strong>Vim</strong>) un peu plus stylisé, etc. Mais là encore, il est difficile de voir ce que fait <strong>Neovim</strong> que ne faisait pas déjà <strong>Vim</strong> (les différences sont détaillés <a class="text-decoration-none mybadge-blue" href="https://neovim.io/doc/user/nvim.html#nvim-from-vim" target="_blank" rel="noopener noreferrer">ici</a>. On peut en effet écrire des scripts à l'extension .vim utilisable par les deux logiciels. Mais <strong>Neovim</strong> possède une syntaxe un peu améliorée et des fonctionnalités un peu plus souple et mieux adaptées à nos interfaces modernes. L'écriture de <em>plugins</em> étant ainsi facilité c'est l'usage des nouveaux <em>plugins</em> disponibles pour <strong>Neovim</strong> et non tous compatibles avec <strong>Vim</strong> qui peut justifier le passage de l'un à l'autre. 
Cependant, l'usage intempestif de <em>plugins</em> peut vite devenir un peu déroutant. Les <em>plugins</em> ont un effet boite noire au début qui éteigne un peu l'enthousiasme (pourquoi troquer une boite noire pour une autre ?).
Vous prendrez vraiment la pleine mesure de <strong>Vim</strong>/<strong>Neovim</strong> après vous être un peu familiarisé avec la personnalisation du fichier init.vim qui est le fichier de configuration dans lequel vous pouvez ajouter tous vos raccourcis personnalisé.
Après quelques <a class="text-decoration-none mybadge-blue" href="https://youtu.be/RZ4p-saaQkc" target="_blank" rel="noopener noreferrer">tutos</a> et un peu de sueur on arrive ainsi à batir un éditeur avec autant de fonctionnalités que VSCode, l'effet boite noire en moins. 
Un exemple tout simple. Pour compiler des fichiers au format scss il suffit d'installer une extension dans VScode, et ça marche tout de suite. Il faut un peu de temps pour paramétrer l'équivalent sur <strong>Neovim</strong>. Il faut installer le compilateur soit même. Mais à la fin vous avez en récompense, la satisfaction d'avoir construit vous même votre compilateur de fichier scss. Vous pouvez plus facilement utiliser ses différentes fonctionnalités et c'est plus rapide que de laisser tourner l'extension SASS watch sous VSCode.</p></div>
