---
title: Press Releases
layout: press
---

<h1 class="mdl-typography--font-light">Press Releases</h1>

<h4>Contact Us</h4>
<p>
    If you'd like to write a story about Rime, please get in touch!
    Are you a journalist? Let us know if you're interested in getting occasional press-related news. <a href="mailto:press@rime.co?subject=Press">press@rime.co</a>
</p>

{% for article in site.data.articles %}
<h4 class="mdl-typography--font-light">{{ article.title }}</h4>
<p>
    <a href="{{ article.url }}" target="_blank">{{ article.published | date: "%A %d %b '%y" }}</a>
    {{ article.author }}, {{ article.org }}
</p>
{% endfor %}