import { useEffect } from 'react';

/**
 * SEO component that updates document head dynamically per page.
 * Sets title, meta description, canonical URL and optional JSON-LD.
 */
export default function SEOHead({ title, description, canonical, jsonLd }) {
    useEffect(() => {
        // Title
        if (title) document.title = title;

        // Meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && description) {
            metaDesc.setAttribute('content', description);
        }

        // Canonical
        const link = document.querySelector('link[rel="canonical"]');
        if (link && canonical) {
            link.setAttribute('href', canonical);
        }

        // OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        const twDesc = document.querySelector('meta[name="twitter:description"]');

        if (ogTitle && title) ogTitle.setAttribute('content', title);
        if (ogDesc && description) ogDesc.setAttribute('content', description);
        if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
        if (twTitle && title) twTitle.setAttribute('content', title);
        if (twDesc && description) twDesc.setAttribute('content', description);

        // JSON-LD
        let scriptEl = document.getElementById('page-jsonld');
        if (jsonLd) {
            if (!scriptEl) {
                scriptEl = document.createElement('script');
                scriptEl.id = 'page-jsonld';
                scriptEl.type = 'application/ld+json';
                document.head.appendChild(scriptEl);
            }
            scriptEl.textContent = JSON.stringify(jsonLd);
        }

        return () => {
            // Cleanup page-specific JSON-LD on unmount
            const el = document.getElementById('page-jsonld');
            if (el) el.remove();
        };
    }, [title, description, canonical, jsonLd]);

    return null;
}
