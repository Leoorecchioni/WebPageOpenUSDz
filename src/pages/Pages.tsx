import React, { useState, useRef } from 'react';
import { ModelContainer } from '../components/ModelContainer';

// Importation des assets
import fenderUSDZ from '../assets/models/fender_stratocaster.usdz';
import fenderGLB from '../assets/models/fender_stratocaster.glb';
import fenderPoster from '../assets/images/stratocaster.jpg';

import chameleonUSDZ from '../assets/models/chameleon_anim_mtl_variant.usdz';
import chameleonGLB from '../assets/models/chameleon_anim_mtl_variant.glb';
import chameleonPoster from '../assets/images/chameleon-thumb_2x.png';

export const Home: React.FC = () => (
  <div className="page-container">
    <section className="hero-section">
      <h1 className="hero-title">Experience Spatial Design.</h1>
      <p className="hero-subtitle">High-fidelity 3D assets optimized for Apple Vision Pro & spatial computing.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="/gallery" className="upload-button" style={{ textDecoration: 'none', padding: '12px 32px', fontSize: '17px' }}>Explore Gallery</a>
      </div>
    </section>
    
    <div className="section-grid">
      <div className="pro-card">
        <h2 className="card-title">Crafted for VisionOS</h2>
        <p className="card-desc">Interact with assets natively using the &lt;model&gt; tag on Vision Pro.</p>
        <div className="viewer-wrapper">
          <ModelContainer srcUSDZ={fenderUSDZ} srcGLB={fenderGLB} poster={fenderPoster} />
        </div>
      </div>
    </div>
  </div>
);

export const Gallery: React.FC = () => (
  <div className="page-container">
    <div className="section-grid" style={{ paddingTop: '80px' }}>
      <div className="pro-card">
        <h2 className="card-title">Fender Stratocaster</h2>
        <p className="card-desc">Premium guitar rendered in spatial reality.</p>
        <div className="viewer-wrapper">
          <ModelContainer srcUSDZ={fenderUSDZ} srcGLB={fenderGLB} poster={fenderPoster} />
        </div>
      </div>
      <div className="pro-card">
        <h2 className="card-title">Chameleon</h2>
        <p className="card-desc">Animated creature with variant textures.</p>
        <div className="viewer-wrapper">
          <ModelContainer srcUSDZ={chameleonUSDZ} srcGLB={chameleonGLB} poster={chameleonPoster} autoplay />
        </div>
      </div>
    </div>
  </div>
);

export const Lab: React.FC = () => {
  const [userModel, setUserModel] = useState<{ srcUSDZ: string; srcGLB: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const url = URL.createObjectURL(file);
    
    // CORRECTION : On passe l'URL au bon champ selon l'extension
    if (ext === 'usdz') {
        setUserModel({ srcUSDZ: url, srcGLB: '' });
    } else if (ext === 'glb' || ext === 'gltf') {
        setUserModel({ srcUSDZ: '', srcGLB: url });
    } else {
        alert("Unsupported format. Use .usdz or .glb");
    }
  };

  return (
    <div className="page-container">
      <div className="hero-section" style={{ paddingBottom: '20px' }}>
        <h1 className="hero-title" style={{ fontSize: '48px' }}>OpenUSDZ Lab</h1>
        <p className="hero-subtitle">Test your own creations in a native spatial environment.</p>
      </div>
      
      <div className="section-grid" style={{ paddingTop: '0' }}>
        <div className="pro-card" style={{ gridColumn: '1 / -1', minHeight: '600px' }}>
          {!userModel ? (
            <div className="upload-hero" onClick={() => fileInputRef.current?.click()}>
              <div style={{ fontSize: '48px' }}>📦</div>
              <p style={{ fontWeight: 600 }}>Drop .usdz or .glb here</p>
              <button className="upload-button">Select File</button>
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".usdz,.glb" onChange={(e) => handleFiles(e.target.files)} />
            </div>
          ) : (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <div className="viewer-wrapper">
                <ModelContainer 
                  srcUSDZ={userModel.srcUSDZ} 
                  srcGLB={userModel.srcGLB} 
                />
              </div>
              <button className="upload-button" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }} onClick={() => setUserModel(null)}>
                Change Model
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
