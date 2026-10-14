import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.15); // Suave e sutil (15%)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Caminho do áudio relativo para funcionar perfeitamente em qualquer ambiente/base
  const audioUrl = `${import.meta.env.BASE_URL || './'}audio/beginning-of-infinity.mp3`;

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    // Tentativa de autoplay suave imediato
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Bloqueio de autoplay do navegador: inicia suavemente no primeiro clique/toque
          const startOnInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {});
            }
            window.removeEventListener('pointerdown', startOnInteraction);
            window.removeEventListener('keydown', startOnInteraction);
          };

          window.addEventListener('pointerdown', startOnInteraction, { once: true });
          window.addEventListener('keydown', startOnInteraction, { once: true });
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <aside
      aria-label="Controle de Trilha Sonora Ambiente"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 90,
        pointerEvents: 'auto'
      }}
    >
      <div
        className="aero-glass aero-glass--prominent"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.45rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 8px 24px rgba(2, 132, 199, 0.25), inset 0 1px 1px #ffffff',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar música ambiente' : 'Tocar música ambiente'}
          title={isPlaying ? 'Pausar' : 'Tocar'}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: isPlaying ? 'var(--btn-primary-grad)' : 'var(--btn-secondary-grad)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 2px 6px rgba(2, 132, 199, 0.25), inset 0 1px 1px #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isPlaying ? '#ffffff' : 'var(--text-main)',
            transition: 'all 0.2s ease',
            padding: 0
          }}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Track Info & Equalizer visualizer */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          title="Clique para expandir o controle de volume"
        >
          <Music size={14} color="var(--sky-700)" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.1,
                maxWidth: isExpanded ? '180px' : '130px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              Beginning of Infinity
            </span>
            <span
              style={{
                fontSize: '0.64rem',
                color: 'var(--sky-800)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {isPlaying ? 'Música Ambiente' : 'Pausado'}
            </span>
          </div>

          {/* Mini Equalizer Bars Animation */}
          {isPlaying && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '2px',
                height: '14px',
                marginLeft: '0.2rem'
              }}
              aria-hidden="true"
            >
              <span
                style={{
                  width: '2.5px',
                  height: '100%',
                  background: 'var(--sky-500)',
                  borderRadius: '1px',
                  animation: 'eqBar1 0.8s ease-in-out infinite alternate'
                }}
              />
              <span
                style={{
                  width: '2.5px',
                  height: '60%',
                  background: 'var(--sky-600)',
                  borderRadius: '1px',
                  animation: 'eqBar2 0.6s ease-in-out infinite alternate'
                }}
              />
              <span
                style={{
                  width: '2.5px',
                  height: '80%',
                  background: 'var(--sky-400)',
                  borderRadius: '1px',
                  animation: 'eqBar3 0.9s ease-in-out infinite alternate'
                }}
              />
            </div>
          )}
        </div>

        {/* Mute Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Desativar mudo' : 'Ativar mudo'}
          title={isMuted ? 'Desmutar' : 'Mutar'}
          style={{
            background: 'none',
            border: 'none',
            color: isMuted ? 'var(--text-muted)' : 'var(--sky-700)',
            cursor: 'pointer',
            padding: '0.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        {/* Expandable Volume Slider */}
        {isExpanded && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            aria-label="Ajustar volume da música ambiente"
            style={{
              width: '60px',
              accentColor: 'var(--sky-600)',
              cursor: 'pointer'
            }}
          />
        )}
      </div>

      {/* Equalizer animation styles */}
      <style>{`
        @keyframes eqBar1 {
          0% { height: 25%; }
          100% { height: 100%; }
        }
        @keyframes eqBar2 {
          0% { height: 100%; }
          100% { height: 35%; }
        }
        @keyframes eqBar3 {
          0% { height: 40%; }
          100% { height: 90%; }
        }
      `}</style>
    </aside>
  );
};
