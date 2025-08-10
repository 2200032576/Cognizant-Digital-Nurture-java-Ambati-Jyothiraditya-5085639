# Git Branching and Merging Lab – Personal Work

## Goal
Understand how to create and work with branches, and how to merge them back into the main branch.

---

## Steps I Followed

### 1. Preparation
- Verified Git was installed and configured on my system.
- Installed **P4Merge** on Windows to view changes visually.
- Set up a Git repository locally and linked it to my remote repository on GitHub.

### 2. Creating and Working in a New Branch
- Created a branch named `GitNewBranch`:

  ```bash
  git branch GitNewBranch
  ```

- Listed all local and remote branches:

  ```bash
  git branch -a
  ```
  *(The branch with `*` is the one I’m currently on.)*

- Switched to `GitNewBranch`:

  ```bash
  git checkout GitNewBranch
  ```

- Added new files with some content and staged them:

  ```bash
  git add filename.txt
  git commit -m "Added new file in GitNewBranch"
  ```

- Checked the branch status:

  ```bash
  git status
  ```

### 3. Merging the Branch into Main
- Switched back to the main branch:

  ```bash
  git checkout main
  ```

- Compared differences between the main branch and `GitNewBranch`:

  ```bash
  git diff GitNewBranch
  ```

- Used P4Merge to visually check changes.

- Merged the branch into main:

  ```bash
  git merge GitNewBranch
  ```

- Viewed merge history:

  ```bash
  git log --oneline --graph --decorate
  ```

- Deleted the merged branch:

  ```bash
  git branch -d GitNewBranch
  ```

- Confirmed cleanup with:

  ```bash
  git status
  ```

---

## Key Takeaways
- Branching allows safe experimentation without affecting the main codebase.
- Merging integrates changes from a branch into another branch.
- Visual merge tools like **P4Merge** make conflict resolution easier.
