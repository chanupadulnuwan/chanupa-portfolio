import React from 'react';
import { X, Mail, AlertCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './CVModal.css';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const emailAddress = personalDetails.email || 'chanupadulnuwan@gmail.com';

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
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

          <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
            CV Currently Unavailable
          </h4>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#FD6F00', fontWeight: '600', background: 'rgba(253, 111, 0, 0.08)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(253, 111, 0, 0.25)', margin: 0 }}>
            If it is urgent, please send me an email and I will be happy to forward my resume directly to you!
          </p>
        </div>

        {/* Modal Action - Send Email */}
        <div className="cv-modal-actions" style={{ justifyContent: 'center', paddingTop: '10px' }}>
          <a
            href={`mailto:${emailAddress}?subject=CV%20Request%20-%20Chanupa%20Dulnuwan`}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 24px', width: '100%' }}
          >
            <Mail size={18} />
            <span>Send Email ({emailAddress})</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
