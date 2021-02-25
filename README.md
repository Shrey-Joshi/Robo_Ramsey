# Robo Ramsay Setup

For a code editor/IDE, I suggest everyone on the team use a lightweight one, like VS Code.

For anyone new to git, below is a short git tutorial explaining what common commands you'll be using. 
NOTE: This part of the read me is to help people with the git, the README contents will change once more of the project is complete.

## Git Setup

I also suggest having some kind of package manager on your system. Since we are using nodejs, `npm` can be installed along with it. Head over to "https://nodejs.org/en/download/" to install the LTS version for your specific system.

In addition to `npm`, you can install the `yarn` package manager as its typically faster and supports many packages as well.

Run `npm install -g yarn`.

When attempting to start, you'll want to have git installed on your PC. 

On Windows, Mac, and Linux you can head to the install page "https://git-scm.com/downloads".

You can also add git after installing yarn with `yarn add git`.

## Git Usage

When first downloading this project, move into a directory where you are comfortable with installing files to. Then run:

`git clone https://github.com/Dpmon1/Robo_Ramsey.git`

All files from the repository should be copied into your working directory.

From here on you can edit files like normal.

If you make changes to a file and want to confirm the changes locally, use

`git add -A` where the `-A` tag refers to ALL changes. You can also specify changes to save for a specific file, such as `git add app.js`.

To set up a commit to publish, use:

`git commit -m "message explaining what you changed"`.

Avoid `git commit` without the `-m` as it will open a multiline message editor in your terminal.

To then publish the above commit to the remote repository (upload to GitHub), use:

`git push`

So in summary, everytime changes are made, add them to be committed with a message explaining what you did, and then push the commit.

## Git Workflow

Other people will also be uploading their own versions of the code to the repository as well. Use:

`git pull` to update all files locally with changes made in the repository.

Sometimes code others wrote will contradict code you've written, this is known as a merge conflict.

Git normally informs you of this when a `git pull` or `git commit` is performed. You can resolve these manually on your end, or create a branch so two versions can exist and one can be merged later.

In git, all code for the final project is part of the `master` branch. You can create your own branch if you plan to make a series of commits for one aspect of the project. Use

`git branch branchname`, where `branchname` is the name of the branch you are creating. 

Any commits you make will only change `branchname` and not `master`. Once all development on `branchname` is done, you can merge it back into the `master` branch using:

`git merge branchname`. This step may require merge conflicts to be resolved if they exist.

Below is a representation of a merge:

```
     A---B---C branchname
    /         \
D---E---F---G---H---I master
```
