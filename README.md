# Robo Ramsay Setup

> NOTE: This part of the README is to help people with the git, the README contents will change once more of the project is complete.

For a code editor/IDE, I suggest everyone on the team use a lightweight one, like VS Code, you can download it here https://code.visualstudio.com/.

## 💻 WSL Setup (Not Necessary for Linux and Mac Users)

For anyone using a **Windows OS**, you will need to install a linux distribution so we can utilize docker containers in the future. Below are instructions for setting up a linux kernel using Windows Subsystem for Linux (WSL).

First, enable WSL by searching for **Turn Windows features on or off** in your Windows Search bar, and select the link to the Control Panel. A tab should open up. Scroll to the bottom and check the folder **Windows Subsystem for Linux**, then press OK. Restart your computer if asked.

After that open up **Microsoft Store**, and search for and install **Ubuntu 20.04 LTS**. After it's installed, open up **Ubuntu 20.04 LTS** from your Windows Search bar. A terminal should open up, intially setting up Ubuntu. After setup is done, the shell should request for a password to set for root (I suggest putting your Windows admin/account password).

🎉 Congratulations 🎉, you now have Linux on your system!

### Link VS Code to WSL

To open up directories in WSL in VS Code, you can download an extension. Simply go to the extensions tab (CTRL+SHIFT+X) in VS Code and search for **Remote - WSL** and install.

When in Ubuntu, you can open your current directory as a VS code workspace with the command `code .`.

## 🛠 Git Setup

#### On WSL/Linux

Update your WSL/Linux repositories using:

```
sudo apt-get update
sudo apt-get upgrade
```

On WSL and Linux, you can install npm and node with:

```
sudo apt-get install npm
```

#### On Mac

On Mac, you'll need to install Homebrew first, since Macs don't come with a default package manager. Paste the command below and run in terminal.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Update Homebrew's available packages and install node/npm by running the commands below.

```
brew update
brew install node
```

#### Verify installation

Check if Node and NPM are installed by checking the version numbers:

```
node -v
npm -v
```

In addition to `npm`, you can install the `yarn` package manager as it's typically faster and supports many packages as well.

Run `npm install -g yarn` AFTER installing NPM.

Linux comes with git by default, but for Mac you may need to install it unless you already have XCode on your system.

If you need to install/update git, you can do so after installing yarn with `yarn add git`.

After you have git setup, it would be good to set your global login credentials for the remote repository we are using. In this case we are using GitHub, so simply put in your associated GitHub user name and email (so you don't need to login all the time when using git) in the commands below:

```
git config -g user.name "username"
git config -g user.email "username@emailprovider.com"
```

## Git Usage

When first downloading this project, move into a directory where you are comfortable with downloading files to. Then run:

`git clone https://github.com/Dpmon1/Robo_Ramsey.git`

All files from the repository should be copied into your current working directory, under the folder `Robo_Ramsey`.

From here on you can edit files like normal.

If you make changes to a file and want to confirm the changes locally, use

`git add -A` where the `-A` tag refers to ALL changes. You can also specify changes to save for a specific file, such as `git add app.js`.

To set up a commit to publish, use:

`git commit -m "message explaining what you changed"`.

Avoid `git commit` without the `-m` as it will open a multiline message editor in your terminal.

To then publish the above commit to the remote repository (upload to GitHub), use:

`git push`

So in summary, everytime changes are made, add them to be committed with a message explaining what you did, and then push the commit.

You can also push to a specific branch using:

`git push -u origin <branchname>`, the term `origin` is shorthand for the cloned repository, which in this case would be `Dpmon1/Robo_Ramsey`.

## Git Workflow

Other people will also be uploading their own versions of the code to the repository as well. Use:

`git pull` to update all files locally with changes made in the repository (default is master branch).

Sometimes code others wrote will contradict code you've written, this is known as a merge conflict.

Git normally informs you of this when a `git pull` or `git commit` is performed. You can resolve these manually on your end, or create a branch so two versions can exist and one can be merged later.

In git, all code for the final project is part of the `master` branch. You can create your own branch if you plan to make a series of commits for one aspect of the project. Use

`git branch <branchname>`, where `branchname` is the name of the branch you are creating.

To enter a branch, use `git checkout <branchname>`, you can also simultaneously create and enter a branch with `git checkout -b <branchname>`.

Any commits/pushes you make will only change `branchname` and not `master`. Once all development on `branchname` is done, you can merge it back into the `master` branch using:

`git merge branchname`. This step may require merge conflicts to be resolved if they exist.

You could also just reenter the `master` branch using `git checkout master`. This avoids a merger.

REMEMBER: `checkout` moves you from one branch to another, `merge` closes one branch and combines code between the two branches.

Below is a representation of a merge:

```
     A---B---C branchname
    /         \
D---E---F---G---H---I master
```
