---
# layout: ../../layouts/MDLayout.astro
title: "About:"
---

<div class="intro-text">
    ^^
</div>
<div class="centered-links">
    <span class="text-home-project">For technical and non-technical projects:<a href="/projects/">Projects</a><br></span>
    <span class="text-home-project">For recommendation letters, my résumé and contact info: <a href="/about/">About</a></span><br>
</div>

<style>
    .centered-links {
        /* display: flex; */
        justify-content: center;
        align-items: center;
        height: 15vh;
    }

    .centered-links a {
        color: #333;
        margin: 0 10px;
    }
    .text-home-project {
            font-family: 'Roboto', sans-serif;
            font-style: italic;
            font-size: 15px;
    }
    .intro-text {
            font-family: 'DM Serif Display', serif;
            font-size: 20px;
    }
</style>