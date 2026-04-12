import React, { useEffect, useState } from 'react';

interface ModelContainerProps {
  srcUSDZ: string;
  srcGLB?: string;
  poster?: string;
  autoplay?: boolean;
}

const useVisionOS = () => {
  const [isVisionOS, setIsVisionOS] = useState(false);

  useEffect(() => {
    // Détection robuste pour Apple Vision Pro
    const check = 
      navigator.userAgent.includes("Vision") || 
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsVisionOS(check);
  }, []);

  return isVisionOS;
};

export const ModelContainer: React.FC<ModelContainerProps> = ({ 
  srcUSDZ, 
  srcGLB, 
  poster,
  autoplay 
}) => {
  const isVisionOS = useVisionOS();

  // VISION PRO : Rendu natif pur via le tag <model>
  // C'est le SEUL moyen de pouvoir glisser l'objet en dehors de la page.
  if (isVisionOS) {
    if (!srcUSDZ) return <div className="no-model">Format USDZ requis pour Vision Pro</div>;
    return (
      <model 
        src={srcUSDZ} 
        interactive 
        style={{ width: '100%', height: '100%', display: 'block' }} 
      />
    );
  }

  // NAVIGATEUR CLASSIQUE (Desktop, Android, iPhone)
  // On utilise <model-viewer> pour le rendu inline (GLB) + bouton AR (USDZ)
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {srcGLB ? (
        <model-viewer
          src={srcGLB}
          ios-src={srcUSDZ}
          poster={poster}
          camera-controls
          ar
          auto-rotate
          shadow-intensity="1"
          autoplay={autoplay}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div className="no-model-msg" style={{ padding: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#86868b' }}>
            {srcUSDZ ? 
              "Format USDZ détecté. Pour le visualiser nativement, utilisez Apple Vision Pro ou un appareil iOS." : 
              "Aucun modèle GLB disponible pour cet aperçu."}
          </p>
        </div>
      )}
    </div>
  );
};
