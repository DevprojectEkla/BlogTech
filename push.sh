eval $(ssh-agent)

ssh-add /home/ekla/.ssh/id_rsa_github

git add -A
git commit -m "auto push"
git push origin main
