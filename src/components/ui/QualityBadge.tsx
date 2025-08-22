import React from 'react';
import { Star, Globe, Award, BadgeCheck } from 'lucide-react';

type BadgeType = 'iso' | 'global' | 'quality' | 'iatf';

interface QualityBadgeProps {
  type: BadgeType;
  className?: string;
}

const QualityBadge = ({ type, className = '' }: QualityBadgeProps) => {
  const getBadgeContent = () => {
    switch (type) {
      case 'iso':
        return {
          icon: <Award className="w-4 h-4 text-green-500" />,
          text: 'ISO Certified',
          color: 'bg-green-500'
        };
      case 'global':
        return {
          icon: <Globe className="w-4 h-4 text-blue-500" />,
          text: 'Global Standards',
          color: 'bg-blue-500'
        };
      case 'quality':
        return {
          icon: <BadgeCheck className="w-4 h-4 text-amber-500" />,
          text: 'Quality Assured',
          color: 'bg-amber-500'
        };
      case 'iatf':
        return {
          icon: <Award className="w-4 h-4 text-purple-500" />,
          text: 'IATF 16949:2016',
          color: 'bg-purple-500'
        };
      default:
        return {
          icon: <Star className="w-4 h-4 text-primary" />,
          text: 'Quality',
          color: 'bg-primary'
        };
    }
  };

  const { icon, text, color } = getBadgeContent();

  return (
    <div className={`flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-border-light ${className}`}>
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default QualityBadge;