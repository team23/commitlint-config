# 🛠️ Deployment Guide

## Overview

This repository contains a **single package** located at the root level.  
Deployments are handled through version tagging — each release is created by updating the package version and pushing a corresponding **Git tag** to the repository.

A GitHub Actions workflow monitors new tags and automatically deploys the package after an **admin review**.

---

## 🚀 Deployment Process

### 1. Update the Version

Run the `npm version` command at the root of the repository to bump the version according to [Semantic Versioning](https://semver.org/):

```bash
npm version <major|minor|patch>
```

This command will:
- Update the `version` field in `package.json`
- Create a new Git commit with the version bump
- Create a corresponding **Git tag** (e.g., `v1.2.3`)

> 💡 Example:
> ```bash
> npm version minor
> ```
> This creates a commit like `v1.3.0` and a tag `v1.3.0`.

---

### 2. Update the Changelog

Open the `CHANGELOG.md` file in the repository root and:
- Add an entry for the new version if it doesn’t already exist.
- Include a summary of notable changes, fixes, or additions.

Example entry:

```markdown
### v1.3.0
- Added new API endpoints for theme management
- Improved caching behavior
```

Commit the changelog update if necessary:

```bash
git add CHANGELOG.md
git commit --amend --no-edit
```

---

### 3. Push Changes and Tag

Push both the commit and the new tag to the remote repository:

```bash
git push origin main --follow-tags
```

> ⚠️ **Important:** The deployment pipeline is triggered only when a **new tag** is pushed.

---

### 4. GitHub Actions Review & Deployment

Once the tag is pushed:
1. The **GitHub Actions workflow** detects the new tag.
2. It runs the deployment pipeline for the corresponding version.
3. Deployment pauses for **admin review** before being published.
4. Upon approval, the package is deployed automatically.

---

## 🧩 Summary

| Step | Action                                  | Description |
|------|-----------------------------------------|-------------|
| 1 | `npm version <major \| minor \| patch>` | Bump the version and create a Git tag |
| 2 | Update `CHANGELOG.md`                   | Add release notes |
| 3 | `git push --follow-tags`                | Push commit and tag to remote |
| 4 | GitHub Action                           | Deploys automatically after admin approval |

---

## 🧾 Notes & Recommendations

- Always run tests before creating a release tag.
- Each release is uniquely identified by its Git tag (e.g., `v1.4.2`).
- Ensure the changelog accurately reflects the release changes.
- Only **admins** can approve the deployment after the tag push.
- Avoid manually editing tags — use `npm version` to ensure consistency.
