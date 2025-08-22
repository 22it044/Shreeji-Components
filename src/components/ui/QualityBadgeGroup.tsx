import React from 'react';
import QualityBadge from './QualityBadge';

type BadgeType = 'iso' | 'global' | 'quality' | 'iatf';

interface QualityBadgeGroupProps {
  badges: BadgeType[];
  className?: string;
  badgeClassName?: string;
}

const QualityBadgeGroup = ({ 
  badges = ['iso', 'global', 'quality'], 
  className = '', 
  badgeClassName = '' 
}: QualityBadgeGroupProps) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <QualityBadge key={index} type={badge} className={badgeClassName} />
      ))}
    </div>
  );
};

export default QualityBadgeGroup;