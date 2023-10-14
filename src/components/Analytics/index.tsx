import Script from 'next/script';

const GTM_ID = 'G-JBQ1WD21X0';

export default function Analytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTM_ID}');
                `}
            </Script>
        </>
    );
}
