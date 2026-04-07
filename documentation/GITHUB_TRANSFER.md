# GitHub Repository Transfer Guide

This guide explains how to transfer the Lifeline Canada App repository from the current owner to the new owner.

## Overview

GitHub allows you to transfer repositories to another user or organization. All issues, pull requests, stars, forks, and wiki pages transfer with the repository.

---

## Step 1: Current Owner Transfers the Repository

1. Navigate to your repository on GitHub
2. Click **Settings** (tab on the right)
3. Scroll down to the **Danger Zone** (bottom of the page)
4. Click **Transfer ownership**
5. Enter the new owner's GitHub username or organization name
6. Type the repository name to confirm
7. Click **I understand, transfer this repository**

### Important Notes for Current Owner:
- The transfer invitation expires in **24 hours**
- You will lose admin access after transfer (you become a collaborator)
- Webhooks, secrets, and deploy keys remain configured
- Make sure all team members know about the transfer

---

## Step 2: New Owner Accepts the Transfer

1. Check your email for the transfer invitation
2. OR check GitHub notifications (bell icon → "Repository transfer")
3. Click the invitation link
4. Review the repository details
5. Click **Accept transfer**

### Important Notes for New Owner:
- You have 24 hours to accept (otherwise the transfer expires)
- After accepting, you are the new owner with full permissions
- The previous owner becomes a collaborator (can be removed)

---

## Step 3: Post-Transfer Actions for New Owner

After accepting the transfer, complete these actions:

### Update Local Clones
Anyone with local clones needs to update the remote URL:
```bash
git remote set-url origin https://github.com/new-owner/lifeline-canada.git