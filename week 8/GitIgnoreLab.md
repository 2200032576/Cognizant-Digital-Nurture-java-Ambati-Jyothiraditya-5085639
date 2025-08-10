# Git Ignore Lab – Personal Work

## Goal
Learn how to configure `.gitignore` so that certain files and folders are excluded from version control.

---

## Steps I Followed

### 1. Preparation
- Made sure Git was installed and configured on my machine.
- Set Notepad++ as my default Git editor for convenience.
- Created a fresh local Git repository and linked it to my remote repository on GitHub.

### 2. Creating Files to Ignore
- Inside my working directory, I created:
  - A folder named `logs/`
  - A file named `debug.log`
- Added some sample text inside both so they weren't empty.

### 3. Setting Up `.gitignore`
- In the root of my repository, I created a `.gitignore` file.
- Added the following rules:

  ```gitignore
  # Ignore all log files
  *.log
  
  # Ignore entire logs folder
  logs/
  ```

### 4. Verifying the Ignore Rules
- Ran `git status` and confirmed that:
  - `debug.log` was **not** listed as an untracked file.
  - `logs/` folder was also not tracked.
- Added and committed `.gitignore` to the repository:

  ```bash
  git add .gitignore
  git commit -m "Added .gitignore to ignore log files and log folder"
  ```

- Pushed my changes to the remote repository:

  ```bash
  git push origin main
  ```

---

## Key Takeaways
- `.gitignore` helps keep unwanted or temporary files out of version control.
- Patterns can be used to ignore file types (`*.log`) or specific folders (`logs/`).
- Always commit `.gitignore` early in the project to avoid tracking unnecessary files.
