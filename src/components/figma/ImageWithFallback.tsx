"use client"

import React, { useState, useEffect } from 'react'
import imageError from '../../assets/no-image.png'

// Usando múltiplas estratégias de fallback
const FALLBACK_STRATEGIES = [
    imageError,           // Asset importado
    '/no-image.jpg',          // Arquivo público
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBuw6NvIGRpc3BvbsOtdmVsPC90ZXh0Pgo8L3N2Zz4K' // SVG inline como data URI
]

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [currentSrc, setCurrentSrc] = useState(props.src)
    const [fallbackIndex, setFallbackIndex] = useState(-1)
    const [showPlaceholder, setShowPlaceholder] = useState(false)

    // Reset states when src prop changes
    useEffect(() => {
        setCurrentSrc(props.src)
        setFallbackIndex(-1)
        setShowPlaceholder(false)
    }, [props.src])

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.log('Erro ao carregar imagem:', currentSrc)

        // Try next fallback strategy
        const nextIndex = fallbackIndex + 1

        if (nextIndex < FALLBACK_STRATEGIES.length) {
            console.log('Tentando fallback:', FALLBACK_STRATEGIES[nextIndex])
            setFallbackIndex(nextIndex)
            setCurrentSrc(FALLBACK_STRATEGIES[nextIndex])
        } else {
            console.log('Todos os fallbacks falharam, mostrando placeholder')
            setShowPlaceholder(true)
        }
    }

    const { src, alt, style, className, onError, ...rest } = props

    // Se todos os fallbacks falharam, mostra placeholder
    if (showPlaceholder) {
        return (
            <div
                className={`flex items-center justify-center bg-gray-200 text-gray-500 text-sm ${className ?? ''}`}
                style={{
                    minHeight: '100px',
                    minWidth: '100px',
                    ...style
                }}
                {...rest}
            >
                Imagem não disponível
            </div>
        )
    }

    // Mostra a imagem (original ou fallback)
    return (
        <img
            src={currentSrc}
            alt={alt || "Imagem"}
            className={className}
            style={style}
            {...rest}
            data-original-url={src}
            data-fallback-index={fallbackIndex}
            onError={handleError}
        />
    )
}
