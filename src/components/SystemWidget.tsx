import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, HardDrive, ShieldCheck, Clock, Zap } from 'lucide-react';
import { ProfileData } from '../types';

interface SystemWidgetProps {
  widgetData: ProfileData['systemWidget'];
}

export const SystemWidget: React.FC<SystemWidgetProps> = ({ widgetData }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aero-gadget" style={{ maxWidth: '420px', width: '100%' }}>
      {/* Titlebar */}
      <div className="aero-gadget-titlebar">
        <div className="aero-gadget-window-dots">
          <span className="aero-gadget-dot aero-gadget-dot--green" />
          <span className="aero-gadget-dot aero-gadget-dot--cyan" />
          <span className="aero-gadget-dot aero-gadget-dot--amber" />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              color: 'var(--sky-900)',
              marginLeft: '0.35rem',
              letterSpacing: '0.05em'
            }}
          >
            AERO_STATUS.GADGET
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={13} color="var(--sky-700)" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--sky-900)'
            }}
          >
            {time || '--:--:--'}
          </span>
        </div>
      </div>

      {/* Widget Body */}
      <div style={{ padding: '1.25rem 1.4rem' }}>
        {/* Main Status Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.65rem 0.9rem',
            marginBottom: '1rem',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.9)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="aero-led-live" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {widgetData.status}
            </span>
          </div>
          <span
            className="aero-pill aero-pill--green"
            style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}
          >
            ONLINE
          </span>
        </div>

        {/* System Attributes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
          {/* Row 1: Ambiente */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.84rem',
              borderBottom: '1px dashed rgba(56, 189, 248, 0.3)',
              paddingBottom: '0.4rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
              <Cpu size={15} color="var(--sky-600)" />
              Ambiente:
            </span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
              {widgetData.os}
            </span>
          </div>

          {/* Row 2: Kernel / Shell */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.84rem',
              borderBottom: '1px dashed rgba(56, 189, 248, 0.3)',
              paddingBottom: '0.4rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
              <HardDrive size={15} color="var(--sky-600)" />
              Shell &amp; WM:
            </span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
              {widgetData.environment}
            </span>
          </div>

          {/* Row 3: Foco */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.84rem',
              borderBottom: '1px dashed rgba(56, 189, 248, 0.3)',
              paddingBottom: '0.4rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
              <Zap size={15} color="var(--sky-600)" />
              Foco Técnico:
            </span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
              {widgetData.focus}
            </span>
          </div>

          {/* Row 4: Ferramentas */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.84rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
              <Terminal size={15} color="var(--sky-600)" />
              Ferramentas:
            </span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
              {widgetData.tools}
            </span>
          </div>
        </div>

        {/* Footer Terminal Hint */}
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--sky-800)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ShieldCheck size={13} color="#16a34a" />
            <span>SysInfo: OK</span>
          </span>
          <span style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
            Arch x86_64
          </span>
        </div>
      </div>
    </div>
  );
};
