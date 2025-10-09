import { Helmet } from 'react-helmet-async';
import imageOg from '../../public/og-image.jpg';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    structuredData?: object;
}

export function SEO({
    title = "MEG Soluções Elétricas - Serviços Elétricos Profissionais",
    description = "Serviços elétricos profissionais, instalações residenciais e comerciais, manutenção elétrica, sistema de iluminação LED e infraestrutura elétrica completa.",
    keywords = "eletricista, serviços elétricos, instalação elétrica, manutenção elétrica, iluminação LED, infraestrutura elétrica, eletricista residencial, eletricista comercial, MEG Soluções Elétricas",
    image = imageOg,
    url = "https://megsolucoeseletricas.com.br/",
    type = "website",
    structuredData
}: SEOProps) {
    const fullTitle = title.includes("MEG") ? title : `${title} | MEG Soluções Elétricas`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}

// Componentes SEO específicos para cada seção
export function HomeSEO() {
    return (
        <SEO
            title="MEG Soluções Elétricas - Serviços Elétricos Profissionais | Instalações e Manutenção"
            description="MEG Soluções Elétricas oferece serviços elétricos profissionais, instalações residenciais e comerciais, manutenção elétrica, sistema de iluminação LED e infraestrutura elétrica completa. Atendimento especializado e seguro."
            keywords="eletricista, serviços elétricos, instalação elétrica, manutenção elétrica, iluminação LED, infraestrutura elétrica, eletricista residencial, eletricista comercial, MEG Soluções Elétricas"
        />
    );
}

export function ServicesSEO() {
    const servicesStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Serviços Elétricos MEG",
        "provider": {
            "@type": "LocalBusiness",
            "name": "MEG Soluções Elétricas"
        },
        "serviceType": "Serviços Elétricos",
        "description": "Serviços elétricos completos incluindo instalação, manutenção, iluminação LED e infraestrutura elétrica",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo de Serviços Elétricos",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Instalação Elétrica Residencial",
                    "description": "Instalação completa de sistema elétrico residencial com segurança e qualidade"
                },
                {
                    "@type": "Offer",
                    "name": "Manutenção Elétrica",
                    "description": "Serviços de manutenção preventiva e corretiva em sistemas elétricos"
                },
                {
                    "@type": "Offer",
                    "name": "Iluminação LED",
                    "description": "Instalação de sistemas de iluminação LED eficientes e econômicos"
                },
                {
                    "@type": "Offer",
                    "name": "Infraestrutura Elétrica",
                    "description": "Projetos e instalação de infraestrutura elétrica completa"
                }
            ]
        }
    };

    return (
        <SEO
            title="Serviços Elétricos Profissionais - Instalação, Manutenção e LED"
            description="Conheça nossos serviços elétricos: instalação residencial e comercial, manutenção preventiva, iluminação LED, infraestrutura elétrica e muito mais. Qualidade e segurança garantidas."
            keywords="serviços elétricos, instalação elétrica residencial, manutenção elétrica, iluminação LED, infraestrutura elétrica, eletricista profissional"
            url="https://megsolucoeseletricas.com.br/#servicos"
            structuredData={servicesStructuredData}
        />
    );
}

export function ContactSEO() {
    const contactStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "MEG Soluções Elétricas",
            "telephone": "+55-47-99647-1189",
            "url": "https://megsolucoeseletricas.com.br",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-47-99647-1189",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
            }
        }
    };

    return (
        <SEO
            title="MEG Soluções Elétricas | Orçamento Gratuito"
            description="Entre em contato com a MEG Soluções Elétricas para solicitar orçamento gratuito. WhatsApp (47) 99647-1189. Atendimento especializado em serviços elétricos."
            keywords="contato eletricista, orçamento elétrico, MEG Soluções Elétricas contato, WhatsApp eletricista"
            url="https://megsolucoeseletricas.com.br/#contato"
            structuredData={contactStructuredData}
        />
    );
}