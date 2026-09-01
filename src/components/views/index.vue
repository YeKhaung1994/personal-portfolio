<template>
    <div id="portfolio">
        <header class="header">
            <a href="#home" class="logo" aria-label="yekhaung — home">
                <img class="logo-img" :src="logoSrc" alt="ye_khaung" width="421" height="135">
            </a>
            <nav class="navbar" id="navbar">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
            <div class="header-actions">
                <button class="theme-toggle" :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggleTheme">
                    <box-icon v-if="theme === 'dark'" name="sun" color="currentColor" size="20px"></box-icon>
                    <box-icon v-else name="moon" color="currentColor" size="20px"></box-icon>
                </button>
                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                    <box-icon name="menu" color="currentColor"></box-icon>
                </button>
            </div>
        </header>

        <main>
            <section class="home" id="home">
                <div class="home-content">
                    <p class="kicker">// software developer</p>
                    <h1>Hi, I'm Ye Khaung.</h1>
                    <p class="home-tagline">I turn complex problems into clean, fast web applications.</p>
                    <p class="home-intro">
                        Full-stack developer with seven years of shipping products end to end —
                        Vue and React on the front, C# and ASP.NET Core behind the scenes.
                    </p>
                    <div class="home-actions">
                        <a href="#projects" class="btn btn-primary">View projects</a>
                        <a href="#contact" class="btn btn-ghost">Contact me</a>
                    </div>
                    <div class="home-sci">
                        <a href="https://github.com/YeKhaung1994" target="_blank" rel="noopener" aria-label="GitHub">
                            <box-icon type="logo" name="github" color="currentColor"></box-icon>
                        </a>
                        <a href="mailto:yk.yekhaung29@gmail.com" aria-label="Email">
                            <box-icon name="envelope" color="currentColor"></box-icon>
                        </a>
                    </div>
                </div>

                <aside class="home-visual">
                    <div class="avatar-wrap">
                        <!-- blank profile-image slot — swap the div for an <img class="avatar"> when a photo is ready -->
                        <div class="avatar avatar-blank" aria-hidden="true"></div>
                        <svg class="avatar-ring-text" viewBox="0 0 180 180" aria-hidden="true">
                            <defs>
                                <path id="ring-path" d="M90,90 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
                            </defs>
                            <text><textPath href="#ring-path" textLength="476">OPEN TO OPPORTUNITIES • OPEN TO OPPORTUNITIES • </textPath></text>
                        </svg>
                        <span class="sr-only">Open to opportunities</span>
                    </div>
                    <div class="terminal">
                        <div class="terminal-bar">
                            <span class="win-btn win-close" aria-hidden="true">
                                <svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8"/></svg>
                            </span>
                            <span class="win-btn win-min" aria-hidden="true">
                                <svg viewBox="0 0 10 10"><path d="M1 5h8"/></svg>
                            </span>
                            <button class="win-btn win-max" aria-label="Expand profile.json in a dialog" @click="openDialog('profile')">
                                <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1v8M1 5h8"/></svg>
                            </button>
                            <span class="terminal-title">profile.json</span>
                        </div>
                        <pre class="terminal-body"><code>{
  <span class="tk">"name"</span>: <span class="tv">"Ye Khaung"</span>,
  <span class="tk">"role"</span>: <span class="tv">"Software Developer"</span>,
  <span class="tk">"experience"</span>: <span class="tv">"7+ years"</span>,
  <span class="tk">"focus"</span>: [<span class="tv">"frontend"</span>, <span class="tv">"backend"</span>],
  <span class="tk">"status"</span>: <span class="ts">"open_to_work"</span>
}<span class="caret" aria-hidden="true"></span></code></pre>
                    </div>
                </aside>
            </section>

            <section class="section projects" id="projects">
                <p class="kicker">// projects</p>
                <h2>Things I've built</h2>
                <div class="window">
                    <div class="window-bar">
                        <span class="win-btn win-close" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8"/></svg>
                        </span>
                        <span class="win-btn win-min" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 5h8"/></svg>
                        </span>
                        <button class="win-btn win-max" aria-label="Expand projects.json in a dialog" @click="openDialog('projects')">
                            <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1v8M1 5h8"/></svg>
                        </button>
                        <span class="terminal-title">projects.json</span>
                    </div>
                    <div class="window-body">
                <div class="projects-container">
                    <article class="project-card">
                        <div class="card-icon">
                            <box-icon name="folder" color="currentColor" size="26px"></box-icon>
                        </div>
                        <h3>Portfolio Website</h3>
                        <p>This site — a single-page developer portfolio with scroll-spy
                            navigation, a token-based design system, and zero UI frameworks.</p>
                        <ul class="tags">
                            <li>Vue 3</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <a href="https://github.com/YeKhaung1994/vue-protfolio" target="_blank" rel="noopener" class="card-link">
                            View source <box-icon name="right-arrow-alt" color="currentColor" size="18px"></box-icon>
                        </a>
                    </article>

                    <!-- Add real project cards here — title, 1–2 sentence description,
                         tech tags, and a link. See .claude/skills/portfolio-design. -->

                    <article class="project-card project-card-more">
                        <div class="card-icon">
                            <box-icon type="logo" name="github" color="currentColor" size="26px"></box-icon>
                        </div>
                        <h3>More on GitHub</h3>
                        <p>Explore the rest of my work, experiments, and contributions.</p>
                        <a href="https://github.com/YeKhaung1994" target="_blank" rel="noopener" class="card-link">
                            github.com/YeKhaung1994 <box-icon name="right-arrow-alt" color="currentColor" size="18px"></box-icon>
                        </a>
                    </article>
                </div>
                    </div>
                </div>
            </section>

            <section class="section about" id="about">
                <p class="kicker">// about</p>
                <h2>About me</h2>
                <div class="window">
                    <div class="window-bar">
                        <span class="win-btn win-close" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8"/></svg>
                        </span>
                        <span class="win-btn win-min" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 5h8"/></svg>
                        </span>
                        <button class="win-btn win-max" aria-label="Expand about.json in a dialog" @click="openDialog('about')">
                            <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1v8M1 5h8"/></svg>
                        </button>
                        <span class="terminal-title">about.json</span>
                    </div>
                    <div class="window-body">
                        <p>
                            I'm Ye Khaung, a full-stack developer who cares as much about how
                            software feels to use as how it's built. The best products are the
                            ones nobody has to think about — fast, clear, and reliable — and
                            that's the standard I build to.
                        </p>
                        <p>
                            Over the past seven years I've taken products from first idea to
                            production: single-page apps in Vue, React, and Angular; APIs in
                            C# and ASP.NET Core; and the SQL Server and PostgreSQL databases
                            underneath. I ship in small, tested steps and leave every codebase
                            clearer than I found it.
                        </p>
                        <p>
                            Away from the keyboard, I'm usually chasing new music, a football,
                            or whatever technology is about to change how we build.
                        </p>
                        <div class="skill-groups">
                            <div class="skill-group">
                                <h3 class="json-key">"frontend": [</h3>
                                <ul class="tags">
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Vue</li>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>Ionic</li>
                                </ul>
                                <p class="json-close">],</p>
                            </div>
                            <div class="skill-group">
                                <h3 class="json-key">"backend": [</h3>
                                <ul class="tags">
                                    <li>C#</li>
                                    <li>ASP.NET Core</li>
                                    <li>PHP</li>
                                </ul>
                                <p class="json-close">],</p>
                            </div>
                            <div class="skill-group">
                                <h3 class="json-key">"data_devops": [</h3>
                                <ul class="tags">
                                    <li>MS SQL Server</li>
                                    <li>PostgreSQL</li>
                                    <li>Azure DevOps</li>
                                    <li>Git</li>
                                </ul>
                                <p class="json-close">]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section contact" id="contact">
                <p class="kicker">// contact</p>
                <h2>Let's build something great</h2>
                <div class="window">
                    <div class="window-bar">
                        <span class="win-btn win-close" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8"/></svg>
                        </span>
                        <span class="win-btn win-min" aria-hidden="true">
                            <svg viewBox="0 0 10 10"><path d="M1 5h8"/></svg>
                        </span>
                        <button class="win-btn win-max" aria-label="Expand contact.json in a dialog" @click="openDialog('contact')">
                            <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1v8M1 5h8"/></svg>
                        </button>
                        <span class="terminal-title">contact.json</span>
                    </div>
                    <div class="window-body">
                        <p>
                            Whether you're looking to collaborate on a project, have a question,
                            or just want to chat — my inbox is always open.
                        </p>
                        <a href="mailto:yk.yekhaung29@gmail.com" class="btn btn-primary">
                            <box-icon name="paper-plane" type="solid" color="currentColor" size="18px"></box-icon>
                            Say hello
                        </a>
                        <p class="contact-email"><span class="tk">"email"</span>: <span class="tv">"yk.yekhaung29@gmail.com"</span></p>
                        <p class="eof">// EOF</p>
                    </div>
                </div>
            </section>
        </main>

        <button class="to-top" :class="{ show: showTop }" aria-label="Back to top" @click="scrollToTop">
            <svg class="to-top-ring" viewBox="0 0 52 52" aria-hidden="true">
                <circle class="ring-track" cx="26" cy="26" r="24" />
                <circle class="ring-fill" cx="26" cy="26" r="24"
                    :style="{ strokeDashoffset: ringOffset }" />
            </svg>
            <box-icon name="chevron-up" color="currentColor" size="22px"></box-icon>
        </button>

        <footer class="footer">
            <p>© 2026 Ye Khaung · Built with Vue</p>
            <nav class="footer-links">
                <a href="https://github.com/YeKhaung1994" target="_blank" rel="noopener">GitHub</a>
                <a href="#home">Back to top ↑</a>
            </nav>
        </footer>

        <div v-if="dialogOpen" class="dialog-backdrop" :class="{ closing: dialogClosing }" @click.self="closeDialog">
            <div class="terminal dialog" role="dialog" aria-modal="true" :aria-label="dialogFile + ' — expanded'" ref="dialog" tabindex="-1">
                <div class="terminal-bar">
                    <span class="win-btn win-close" aria-hidden="true">
                        <svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8"/></svg>
                    </span>
                    <button class="win-btn win-min" aria-label="Minimize dialog" @click="closeDialog">
                        <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 5h8"/></svg>
                    </button>
                    <span class="win-btn win-max" aria-hidden="true">
                        <svg viewBox="0 0 10 10"><path d="M5 1v8M1 5h8"/></svg>
                    </span>
                    <span class="terminal-title">{{ dialogFile }} — expanded</span>
                </div>
                <pre v-if="dialogView === 'profile'" class="terminal-body"><code>{
  <span class="tk">"name"</span>: <span class="tv">"Ye Khaung"</span>,
  <span class="tk">"role"</span>: <span class="tv">"Software Developer"</span>,
  <span class="tk">"experience"</span>: <span class="tv">"7+ years"</span>,
  <span class="tk">"focus"</span>: [<span class="tv">"frontend"</span>, <span class="tv">"backend"</span>],
  <span class="tk">"stack"</span>: {
    <span class="tk">"frontend"</span>: [<span class="tv">"Vue"</span>, <span class="tv">"React"</span>, <span class="tv">"Angular"</span>, <span class="tv">"Ionic"</span>],
    <span class="tk">"backend"</span>: [<span class="tv">"C#"</span>, <span class="tv">"ASP.NET Core"</span>, <span class="tv">"PHP"</span>],
    <span class="tk">"data"</span>: [<span class="tv">"MS SQL Server"</span>, <span class="tv">"PostgreSQL"</span>]
  },
  <span class="tk">"links"</span>: {
    <span class="tk">"github"</span>: <a class="tv" href="https://github.com/YeKhaung1994" target="_blank" rel="noopener">"github.com/YeKhaung1994"</a>,
    <span class="tk">"email"</span>: <a class="tv" href="mailto:yk.yekhaung29@gmail.com">"yk.yekhaung29@gmail.com"</a>
  },
  <span class="tk">"status"</span>: <span class="ts">"open_to_work"</span>
}<span class="caret" aria-hidden="true"></span></code></pre>

                <pre v-else-if="dialogView === 'projects'" class="terminal-body"><code>{
  <span class="tk">"projects"</span>: [
    {
      <span class="tk">"name"</span>: <span class="tv">"Portfolio Website"</span>,
      <span class="tk">"summary"</span>: <span class="tv">"This site — JSON-view design, no UI frameworks."</span>,
      <span class="tk">"stack"</span>: [<span class="tv">"Vue 3"</span>, <span class="tv">"CSS"</span>, <span class="tv">"JavaScript"</span>],
      <span class="tk">"source"</span>: <a class="tv" href="https://github.com/YeKhaung1994/vue-protfolio" target="_blank" rel="noopener">"github.com/YeKhaung1994/vue-protfolio"</a>,
      <span class="tk">"live"</span>: <a class="tv" href="https://vue-protfolio.vercel.app" target="_blank" rel="noopener">"vue-protfolio.vercel.app"</a>
    },
    {
      <span class="tk">"name"</span>: <span class="tv">"More on GitHub"</span>,
      <span class="tk">"summary"</span>: <span class="tv">"Experiments, side projects, and contributions."</span>,
      <span class="tk">"url"</span>: <a class="tv" href="https://github.com/YeKhaung1994" target="_blank" rel="noopener">"github.com/YeKhaung1994"</a>
    }
  ]
}<span class="caret" aria-hidden="true"></span></code></pre>

                <pre v-else-if="dialogView === 'about'" class="terminal-body"><code>{
  <span class="tk">"bio"</span>: [
    <span class="tv">"Full-stack developer — builds software people don't have to think about."</span>,
    <span class="tv">"Seven years taking products from first idea to production."</span>,
    <span class="tv">"Off duty: new music, football, emerging tech."</span>
  ],
  <span class="tk">"skills"</span>: {
    <span class="tk">"frontend"</span>: [<span class="tv">"JavaScript"</span>, <span class="tv">"TypeScript"</span>, <span class="tv">"Vue"</span>,
                 <span class="tv">"React"</span>, <span class="tv">"Angular"</span>, <span class="tv">"Ionic"</span>],
    <span class="tk">"backend"</span>: [<span class="tv">"C#"</span>, <span class="tv">"ASP.NET Core"</span>, <span class="tv">"PHP"</span>],
    <span class="tk">"data_devops"</span>: [<span class="tv">"MS SQL Server"</span>, <span class="tv">"PostgreSQL"</span>,
                    <span class="tv">"Azure DevOps"</span>, <span class="tv">"Git"</span>]
  },
  <span class="tk">"currently"</span>: <span class="ts">"open_to_collaborations"</span>
}<span class="caret" aria-hidden="true"></span></code></pre>

                <pre v-else-if="dialogView === 'contact'" class="terminal-body"><code>{
  <span class="tk">"email"</span>: <a class="tv" href="mailto:yk.yekhaung29@gmail.com">"yk.yekhaung29@gmail.com"</a>,
  <span class="tk">"github"</span>: <a class="tv" href="https://github.com/YeKhaung1994" target="_blank" rel="noopener">"github.com/YeKhaung1994"</a>,
  <span class="tk">"open_to"</span>: [<span class="tv">"collaborations"</span>, <span class="tv">"questions"</span>, <span class="tv">"a good chat"</span>],
  <span class="tk">"status"</span>: <span class="ts">"open_to_work"</span>
}<span class="caret" aria-hidden="true"></span></code></pre>
            </div>
        </div>

    </div>
</template>

<script>
import { setupNavLinks, setupMenuToggle, setupReveals } from '../js/script';
import 'boxicons';
import logoDark from '../../assets/files/ye-khaung-logo-transparent-dark.svg';
import logoLight from '../../assets/files/ye-khaung-logo-transparent.svg';

export default {
    name: 'HomePage',
    data() {
        return {
            theme: document.documentElement.dataset.theme || 'dark',
            dialogOpen: false,
            dialogClosing: false,
            dialogView: 'profile',
            showTop: false,
            scrollProgress: 0
        };
    },
    computed: {
        // ring circumference is 2π × 24 ≈ 150.8
        ringOffset() {
            return 150.8 * (1 - this.scrollProgress);
        },
        dialogFile() {
            return { profile: 'profile.json', projects: 'projects.json', about: 'about.json', contact: 'contact.json' }[this.dialogView];
        },
        logoSrc() {
            return this.theme === 'dark' ? logoDark : logoLight;
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = this.theme;
            try {
                localStorage.setItem('theme', this.theme);
            } catch (e) { /* private mode: theme just won't persist */ }
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.content = this.theme === 'dark' ? '#0b1120' : '#f7faf9';
        },
        openDialog(view = 'profile') {
            this.dialogView = view;
            this.prevFocus = document.activeElement;
            this.dialogOpen = true;
            document.documentElement.classList.add('no-scroll');
            document.addEventListener('keydown', this.onDialogKey);
            this.$nextTick(() => {
                if (this.$refs.dialog) this.$refs.dialog.focus();
            });
        },
        closeDialog() {
            if (this.dialogClosing) return;
            this.dialogClosing = true;
            document.removeEventListener('keydown', this.onDialogKey);
            setTimeout(() => {
                this.dialogOpen = false;
                this.dialogClosing = false;
                document.documentElement.classList.remove('no-scroll');
                if (this.prevFocus) this.prevFocus.focus();
            }, 240);
        },
        onDialogKey(e) {
            if (e.key === 'Escape') this.closeDialog();
        },
        scrollToTop() {
            window.scrollTo({ top: 0 });
        },
        onScroll() {
            if (this.ticking) return;
            this.ticking = true;
            requestAnimationFrame(() => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                this.scrollProgress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
                this.showTop = window.scrollY > 400;
                this.ticking = false;
            });
        }
    },
    mounted() {
        setupNavLinks();
        setupMenuToggle();
        setupReveals();
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        document.removeEventListener('keydown', this.onDialogKey);
        document.documentElement.classList.remove('no-scroll');
    }
}
</script>
