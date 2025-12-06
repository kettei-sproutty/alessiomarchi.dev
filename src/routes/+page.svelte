<script lang="ts">
    import { onMount } from "svelte";
    import Twitter from "$lib/icons/Twitter.svelte";
    import GitHub from "$lib/icons/GitHub.svelte";
    import LinkedIn from "$lib/icons/LinkedIn.svelte";

    let mouseX = $state(0);
    let mouseY = $state(0);

    onMount(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });
</script>

<div class="gradient-bg absolute inset-0 opacity-[0.03]"></div>

<div
    class="orb absolute left-[10%] top-[10%] size-[400px] rounded-full bg-primary opacity-15 blur-[60px]"
></div>
<div
    class="orb absolute right-[10%] top-[60%] size-[300px] rounded-full bg-chart-2 opacity-15 blur-[60px]"
    style="animation-delay: -7s"
></div>
<div
    class="orb absolute bottom-[10%] left-[30%] size-[350px] rounded-full bg-chart-3 opacity-15 blur-[60px]"
    style="animation-delay: -14s"
></div>

<div
    class="pointer-events-none fixed z-10 size-96 rounded-full opacity-20 blur-3xl"
    style="background: radial-gradient(circle, var(--primary) 0%, transparent 70%); transform: translate3d({mouseX -
        192}px, {mouseY - 192}px, 0); transition: transform 0.3s ease-out;"
></div>

<section
    class="relative z-20 flex min-h-screen flex-col items-center justify-center px-6"
>
    <div class="max-w-4xl text-center">
        <div class="mx-auto mb-12 w-64 md:w-80">
            <div class="logo-container">
                <img
                    src="/logo.svg"
                    alt="Alessio Marchi Logo"
                    class="h-auto w-full select-none"
                    width="320"
                    height="320"
                    loading="eager"
                    decoding="async"
                />
            </div>
        </div>
        <h1 class="sr-only">Alessio Marchi</h1>
        <h2
            class="mb-8 flex flex-col space-y-4 text-7xl font-bold tracking-tight text-foreground md:text-9xl"
        >
            <span class="fade-in-up gradient-text" style="animation-delay: 0.2s"
                >Coming</span
            >
            <span class="fade-in-up gradient-text" style="animation-delay: 0.4s"
                >Soon</span
            >
        </h2>

        <div class="fade-in-up flex justify-center gap-6">
            <a
                href="https://x.com/alessiom97"
                class="social-link flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300"
                aria-label="Twitter"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Twitter />
            </a>
            <a
                href="https://github.com/kettei-sproutty/"
                class="social-link flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300"
                aria-label="GitHub"
                rel="noopener noreferrer"
                target="_blank"
            >
                <GitHub />
            </a>
            <a
                href="https://linkedin.com/in/alessiomarchi"
                class="social-link flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
            >
                <LinkedIn />
            </a>
        </div>
    </div>
</section>

<style scoped>
    .gradient-bg {
        background: linear-gradient(
            125deg,
            var(--primary) 0%,
            var(--chart-2) 25%,
            var(--chart-3) 50%,
            var(--chart-4) 75%,
            var(--chart-5) 100%
        );
        background-size: 200% 200%;
        animation: gradient-shift 15s ease infinite;
    }

    @keyframes gradient-shift {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .orb {
        animation: float 20s ease-in-out infinite;
    }

    @keyframes float {
        0%,
        100% {
            transform: translate3d(0, 0, 0) scale(1);
        }
        33% {
            transform: translate3d(30px, -50px, 0) scale(1.1);
        }
        66% {
            transform: translate3d(-20px, 30px, 0) scale(0.9);
        }
    }

    .logo-container {
        animation: logo-float 6s ease-in-out infinite;
        filter: drop-shadow(0 10px 30px rgba(124, 53, 241, 0.3));
    }

    @keyframes logo-float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .gradient-text {
        background: linear-gradient(
            135deg,
            var(--primary) 0%,
            var(--chart-2) 50%,
            var(--chart-3) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradient-text-shift 8s ease infinite;
    }

    @keyframes gradient-text-shift {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.6s ease-out both;
        opacity: 0;
        transform: translateY(20px);
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in-scale {
        animation: fadeInScale 0.8s ease-out both;
        opacity: 0;
        transform: scale(0.9);
    }

    @keyframes fadeInScale {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .social-link:hover {
        background: var(--primary);
        color: var(--primary-foreground);
        border-color: var(--primary);
        transform: translateY(-4px) scale(1.1);
        box-shadow: 0 10px 25px -5px rgba(124, 53, 241, 0.4);
    }

    .social-link:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }

    @media (max-width: 640px) {
        .orb {
            filter: blur(40px);
            width: 250px !important;
            height: 250px !important;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .gradient-bg,
        .orb,
        .logo-container,
        .gradient-text {
            animation: none;
        }

        .fade-in-up,
        .fade-in-scale {
            animation: none;
            opacity: 1;
            transform: none;
        }

        .social-link {
            transition: none;
        }
    }
</style>
