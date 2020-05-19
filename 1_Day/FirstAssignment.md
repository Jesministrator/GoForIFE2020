后端菜鸡的前端学习之旅。
Let's go !!!
what's new:
1. 下载了vs code这个神器，真香
2. 下载了git，了解了git 和GitHub 区别，真香
3. 了解了怎么在vs code上clone GitHub的repository并且将changes push回master branch
4. commit是将代码提交到本地库中，而push 是将changes同步到远程库中

        git clone <远程库地址>：克隆远程库

        　　功能：①完整的克隆远程库为本地库，②为本地库新建origin别名，③初始化本地库

        git remote -v：查看远程库地址别名

        git remote add <别名> <远程库地址>：新建远程库地址别名

        git remote rm <别名>：删除本地中远程库别名

        git push <别名> <分支名>：本地库某个分支推送到远程库，分支必须指定

        git pull <别名> <分支名>：把远程库的修改拉取到本地

        　　tip：该命令包括git fetch，git merge

        git fetch <远程库别名> <远程库分支名>：抓取远程库的指定分支到本地，但没有合并

        git merge <远程库别名/远程库分支名>：将抓取下来的远程的分支，跟当前所在分支进行合并

        git fork：复制远程库

        　　tip：一般是外面团队的开发人员fork本团队项目，然后进行开发，之后外面团队发起pull request，然后本团队进行审核，如无问题本团队进行merge（合并）到团队自己的远程库，整个流程就是本团队跟外面团队的协同开发流程，Linux的团队开发成员即为这种工作方式。