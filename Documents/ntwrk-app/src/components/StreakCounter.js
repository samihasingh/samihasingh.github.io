import React from 'react';
import { Box, Typography, SvgIcon, Tooltip } from '@mui/material';

const StreakMilestoneTree = ({ streak }) => {
  const milestones = [
    { days: 1, label: 'Seed' },
    { days: 7, label: 'Sprout' },
    { days: 14, label: 'Seedling' },
    { days: 21, label: 'Plant' },
    { days: 30, label: 'Sapling' },
    { days: 60, label: 'Young Tree' },
    { days: 90, label: 'Tree' },
    { days: 120, label: 'Strong Tree' },
    { days: 150, label: 'Tall Tree' },
    { days: 180, label: 'Mature Tree' },
    { days: 365, label: 'Mighty Oak' },
  ];

  const TreeIcon = ({ streak, currentMilestone, nextMilestone }) => {
    const isExactMilestone = milestones.some(m => m.days === streak);
    const progress = isExactMilestone ? 1 : (streak - currentMilestone.days) / (nextMilestone.days - currentMilestone.days);

    const stages = {
      'Seed': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <circle cx="32" cy="54" r="4" fill={progress > 0 ? 'brown' : 'gray'} />
        </SvgIcon>
      ),
      'Sprout': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 16} width="4" height={progress * 16} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Seedling': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 32} width="4" height={progress * 32} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Plant': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 48} width="4" height={progress * 48} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Sapling': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 64} width="4" height={progress * 64} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Young Tree': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 80} width="4" height={progress * 80} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Tree': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 96} width="4" height={progress * 96} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Strong Tree': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 112} width="4" height={progress * 112} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Tall Tree': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 128} width="4" height={progress * 128} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Mature Tree': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 144} width="4" height={progress * 144} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
      'Mighty Oak': (
        <SvgIcon viewBox="0 0 64 64" sx={{ fontSize: 200 }}>
          <rect x="30" y={54 - progress * 160} width="4" height={progress * 160} fill="green" />
          <circle cx="32" cy="54" r="4" fill="brown" />
        </SvgIcon>
      ),
    };
    
    return stages[currentMilestone.label] || null;
  };
  
  const currentMilestone = milestones.reduce((prev, curr) => (streak >= curr.days ? curr : prev));
  const nextMilestone = milestones.find(m => m.days > streak) || milestones[milestones.length - 1];

  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 4, mb: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>Streak: {streak} days</Typography>
      <TreeIcon streak={streak} currentMilestone={currentMilestone} nextMilestone={nextMilestone} />
      <Typography variant="body1">{currentMilestone.label}</Typography>
      <Typography variant="body2">
        {streak === nextMilestone.days 
          ? "Congratulations! You've reached a new milestone!" 
          : `Next milestone: ${nextMilestone.label} (${nextMilestone.days - streak} days to go)`
        }
      </Typography>
    </Box>
  );
};

export default StreakMilestoneTree;

// // Option #2: Streak wheel
// const InteractiveStreakWheel = ({ streak }) => {
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const sections = [
//     { days: 1, color: '#FFA07A', label: 'Beginner' },
//     { days: 7, color: '#98FB98', label: 'Novice' },
//     { days: 30, color: '#87CEFA', label: 'Intermediate' },
//     { days: 90, color: '#DDA0DD', label: 'Advanced' },
//     { days: 180, color: '#F0E68C', label: 'Expert' },
//     { days: 365, color: '#FF69B4', label: 'Master' },
//   ];

//   const radius = 80;
//   const strokeWidth = 20;
//   const viewBox = `0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`;
//   const center = radius + strokeWidth / 2;

//   const getArcPath = (startAngle, endAngle) => {
//     const start = polarToCartesian(center, center, radius, endAngle);
//     const end = polarToCartesian(center, center, radius, startAngle);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
//     return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
//   };

//   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 4, mb: 4, textAlign: 'center' }}>
//       <Typography variant="h4" gutterBottom>Streak: {streak} days</Typography>
//       <svg viewBox={viewBox} width="200" height="200">
//         {sections.map((section, index) => {
//           const startAngle = (index / sections.length) * 360;
//           const endAngle = ((index + 1) / sections.length) * 360;
//           const isActive = streak >= section.days;
//           return (
//             <Tooltip key={index} title={`${section.label}: ${section.days} days`} arrow>
//               <path
//                 d={getArcPath(startAngle, endAngle)}
//                 fill="none"
//                 stroke={isActive ? section.color : '#ddd'}
//                 strokeWidth={strokeWidth}
//                 onMouseEnter={() => setHoveredSection(section)}
//                 onMouseLeave={() => setHoveredSection(null)}
//                 style={{ cursor: 'pointer', transition: 'all 0.3s' }}
//                 strokeDasharray={isActive ? "none" : "5,5"}
//               />
//             </Tooltip>
//           );
//         })}
//         <text x={center} y={center} textAnchor="middle" dominantBaseline="middle" fontSize="20">
//           {hoveredSection ? hoveredSection.label : 'Streak'}
//         </text>
//       </svg>
//     </Box>
//   );
// };

// export { StreakMilestoneTree, InteractiveStreakWheel };