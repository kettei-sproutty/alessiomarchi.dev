<script lang="ts">
    import "./layout.css";

    let { children } = $props();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Alessio Marchi",
        url: "https://alessiomarchi.dev",
        description:
            "Personal website of Alessio Marchi - Software Engineer and Developer",
        author: {
            "@type": "Person",
            name: "Alessio Marchi",
            url: "https://alessiomarchi.dev",
            sameAs: [
                "https://twitter.com/alessiom97",
                "https://github.com/kettei-sproutty",
                "https://linkedin.com/in/alessiomarchi",
            ],
        },
        inLanguage: "en",
    };
</script>

<svelte:head>
    <title>Coming Soon | Alessio Marchi</title>
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta
        name="description"
        content="Alessio Marchi's personal website - Coming Soon. Software Engineer and Developer."
    />
    <meta property="og:title" content="Coming Soon | Alessio Marchi" />
    <meta
        property="og:description"
        content="Alessio Marchi's personal website - Coming Soon. Software Engineer and Developer."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://alessiomarchi.dev" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@alessiom97" />
    <meta name="twitter:title" content="Coming Soon | Alessio Marchi" />
    <meta
        name="twitter:description"
        content="Alessio Marchi's personal website - Coming Soon. Software Engineer and Developer."
    />

    {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<main class="relative h-full w-full overflow-hidden">
    {@render children()}
</main>
