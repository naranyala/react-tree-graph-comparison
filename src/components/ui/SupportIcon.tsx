import type React from 'react';

interface SupportIconProps {
  status: string;
}

export const SupportIcon: React.FC<SupportIconProps> = ({ status }) => {
  switch (status) {
    case 'full':
      return (
        <span className="support-icon full" title="Fully Supported">
          ✅
        </span>
      );
    case 'partial':
      return (
        <span className="support-icon partial" title="Half Supported">
          ⚠️
        </span>
      );
    case 'none':
      return (
        <span className="support-icon none" title="Lacks Feature">
          ❌
        </span>
      );
    default:
      return (
        <span className="support-icon unclear" title="Unclear/Variable">
          ❓
        </span>
      );
  }
};
