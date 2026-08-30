import React, { useState } from 'react';
import { X, Mail, Copy, Check, FileText, AlertCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './CVModal.css';

const CVModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const emailAddress = personalDetails.email || 'chanupadulnuwan@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="cv-modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="cv-modal-header" style={{ marginBottom: '20px' }}>
          <div className="cv-avatar-sm">
            <img src={meImg} alt="Chanupa Dulnuwan" />
          </div>
          <div>
            <h3>{personalDetails.fullName}</h3>
            <p>{personalDetails.degree}</p>
          </div>
        </div>

        {/* Notice Body Box */}
        <div className="cv-modal-body" style={{ textAlign: 'center', padding: '10px 0 20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(253, 111, 0, 0.12)', border: '1px solid rgba(253, 111, 0, 0.3)', marginBottom: '16px' }}>
            <AlertCircle size={28} color="#FD6F00" />
          </div>

          <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
            CV Currently Unavailable
          </h4>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px' }}>
            My Curriculum Vitae (CV) is currently being updated with my latest engineering projects, achievements, and certifications.
          </p>

          <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#FD6F00', fontWeight: '600', background: 'rgba(253, 111, 0, 0.08)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(253, 111, 0, 0.2)' }}>
            If it is urgent, please send me an email and I will be happy to forward my resume directly to you!
          </p>
        </div>

        {/* Modal Actions */}
        <div className="cv-modal-actions" style={{ flexDirection: 'column', gap: '10px' }}>
          <a
            href={`mailto:${emailAddress}?subject=CV%20Request%20-%20Chanupa%20Dulnuwan`}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', width: '100%' }}
          >
            <Mail size={18} />
            <span>Send Email ({emailAddress})</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px 20px', width: '100%' }}
          >
            {copied ? <Check size={16} color="#FD6F00" /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : `Copy Email: ${emailAddress}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
