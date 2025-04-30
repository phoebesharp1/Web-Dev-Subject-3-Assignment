

# 2025.04.30 – Recap of Monday Night

Last class, we learned how to:

1. **Create a GitHub account**  
   → Everyone now has a personal GitHub account (or should!).

2. **Fork the Master Assignment Repo**  
   → You visited the original Assignment repo (in the *Velodata* GitHub account)  
   → Then you clicked **Fork** to copy that repo into *your own* GitHub account.

3. **Clone your Forked Repo into VS Code**  
   → You opened VS Code  
   → Then you **cloned** your fork using the GitHub URL  
   → That gave you a local working folder on your computer.

4. **Edit the Project in VS Code**  
   → You made changes to the HTML, CSS, or JavaScript files in your cloned repo.

5. **Push Changes Back to GitHub**  
   → You used Git (via terminal or VS Code UI) to:
   - **Commit** your changes
   - **Push** them to your forked repo on GitHub

✅ So now:  
- You have your *own* copy of the assignment  
- You can make changes on your computer  
- You can **publish** those changes back to your GitHub repo

---

&nbsp;
&nbsp;

# 2025.04.30 – Tonight's Agenda

Tonight, we are moving beyond GitHub and learning how to **publish your Assignment live on the internet** using a platform called **Vercel**.

If we do what we need to do successfully, we will be able to demonstrate our Assignment as a fully deployed working website which you can use to record your *walk-through* video.

---

&nbsp;
&nbsp;

## 1️⃣ Create a Vercel Account (using GitHub)

To keep things smooth and beginner-friendly, we will all create our Vercel accounts **using our existing GitHub accounts**.

✅ **Steps:**
- Go to [https://vercel.com/signup](https://vercel.com/signup)
- You will see a screen like this:

  *(screenshot shown in class)*

- Click the **first button** that says:  
  `Continue with GitHub`

- Log into GitHub (if prompted)

- GitHub will show an **OAuth permissions screen** asking if you want to allow Vercel to access your GitHub account

  > 🟩 Click the green **"Authorize Vercel"** button  
  > This is **safe** and required so that Vercel can see your repositories and deploy your code  
  > You can revoke this permission later via GitHub settings

---

&nbsp;
&nbsp;

# ⚠️ Heads-Up: New Onboarding Process (April 2025)

> In the past, Vercel only required 1 or 2 steps to create an account.  
> As of **April 30, 2025**, students now face **4 or 5 different onboarding screens**.  
> It’s tedious, but necessary — just follow each step exactly.

---

&nbsp;
&nbsp;

✅ **Step 2: Red Error Message**

You might see:

> ❗ "Git Account is not yet connected to any Vercel user. Sign up?"

If this happens:

- Click the **“Sign up?”** link in that red message  
  *(or use the “Sign Up” button at the top-right corner)*

---

&nbsp;
&nbsp;

✅ **Step 3: Plan Type Selection**

You’ll then see:

> **"Your first deploy is just a sign-up away."**

Choose:
- `I'm working on personal projects` (this is the free **Hobby** plan)

Click the **Continue** button.

📌 *Important:* If the screen still says “Log In” in the top right, you are **not fully signed in** yet.  
Clicking **Continue** completes your account setup.

---

&nbsp;
&nbsp;

✅ **Step 4: Connect Git Provider**

You may now see this:

> **"Let's connect your Git provider"**

Click:
- `Continue with GitHub` ✅

> ❌ Do **not** choose GitLab, Bitbucket, or Email

This final step allows Vercel to **see your GitHub repositories**, which is required to deploy your Assignment project.

---

&nbsp;
&nbsp;

✅ **Possible Step 5: Phone Number Verification (Not Always Shown)**

Some users — particularly if they’ve signed up multiple times or are on a shared internet connection — may be asked to verify their identity with a phone number.

You’ll see a screen like this:

&nbsp;
&nbsp;

> **"Verification – Please enter your phone number to verify your login."**

- Enter your mobile number including country code (e.g., +61 for Australia)
- Vercel will send you a **single-use verification code via SMS**
- Enter the code to continue

> 🔒 **Vercel will not message you for marketing.** This is only for identity verification.

📌 **Not all students will see this screen.** If you don’t — that’s fine. Just continue with the process as normal.

---

&nbsp;
&nbsp;

✅ **Account Settings Screen**

Once signed in, students will land on their **Account Settings** page. From here they can:
- Set a **Display Name** (friendly name shown in team views)
- Confirm or note their **Username**  
  → This determines their live project URLs, e.g. `https://project-name.vercel.app`

---

&nbsp;
&nbsp;

✅ **First Dashboard Experience: May Vary**

Some students will see this screen:

> **"Deploy your first project"** with an **Import Project** button and template options like “Next.js Boilerplate” or “AI Chatbot.”

Other students (with only 1 or 2 GitHub repos) might **skip this screen entirely** and go straight to the list of GitHub repos.

🟢 If you see the **Import Project** screen:
- Click the **Import** button (top of the list)

🟡 If you’re taken straight to a GitHub repo selector:
- Just choose your **Assignment repository** and continue

> ✅ Either path is fine. As long as you reach a screen showing your GitHub repos, you're in the right place.

---

&nbsp;
&nbsp;

✅ **GitHub App Installation**

When you select a Git namespace or try to import, you may be asked to **Install the Vercel GitHub App**.

Click:
- `Add GitHub Account`
- Choose **“Only select repositories”**
- Select your Assignment repo
- Scroll down and click **Install**

> This allows Vercel to read and deploy your GitHub repo.

---

&nbsp;
&nbsp;

# 🎉 Final Step – Deployment Success!

You’ll eventually reach a screen that says:

> **Congratulations! You just deployed a new project to [Your Name]’s projects.**

You’ll see:
- A live preview of your deployed site
- A working link to your public Vercel URL
- A **Continue to Dashboard** button

---

&nbsp;
&nbsp;

# 🧭 Understanding Vercel Projects and the Overview Screen

Once your first deployment is live, Vercel will return you to a screen called the **Overview**. This is your main dashboard — the control centre for all your web projects.

But here's the thing:

> 🔍 **You won’t see much detail until you open a specific project.**

## 💡 What *is* a Vercel Project?

A **Vercel Project** is a live website that's linked to one specific GitHub repository.  
Every time you push changes to that repo, Vercel updates the project automatically.

&nbsp;
&nbsp;

## 📂 Opening a Project from the Overview

1. You’ll see a list of your projects (starting with the one you just deployed)
2. Click on the **project name** (e.g., `subject-3-app`) to open it

Once inside, you’ll get access to:
- **Deployment history**
- **Production URL**
- **Preview URLs**
- **Settings**

&nbsp;
&nbsp;

## ⚠️ Why You MUST Open a Project First

> 🧠 **Deployment history, live links, and settings are all inside the project view — not on the Overview.**

---

&nbsp;
&nbsp;

# 🔗 How to Get the Link to Your Live Vercel Website

You’ll need this for your walk-through video or assignment submission.

&nbsp;
&nbsp;

## 1️⃣ Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)

&nbsp;
&nbsp;

## 2️⃣ Click your project name (e.g., `subject-3-app`)

&nbsp;
&nbsp;

## 3️⃣ Copy the **Production URL** (e.g., `https://subject-3-app-username.vercel.app`)

---

&nbsp;
&nbsp;

# 🔁 Making Ongoing Changes – VS Code → GitHub → Vercel

&nbsp;
&nbsp;

## 1️⃣ Edit your code in VS Code

&nbsp;
&nbsp;

## 2️⃣ Run:

```bash
git add .
git commit -m "Describe what you changed"
git push origin main
```

&nbsp;
&nbsp;

## 3️⃣ Vercel auto-deploys your update!

No need to log in again — pushing to GitHub triggers the new deployment automatically.
