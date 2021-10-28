import React from 'react';
import SvgContainer from '../styled/DirectionCompass.styled';

const DirectionCompassSVG = props => {
  const { size, direction, theme } = props;

  const center = { x: size / 2, y: size / 2 };
  const radius = size / 2 - 3;
  const majorScaleLength = size / 12;
  const minorScaleLength = size / 24;
  const needleLength = radius * 0.85;

  const getPointAtAngle = ({ cx, cy, angle, radius }) => {
    angle = (angle * Math.PI) / 180;
    let x = Math.ceil(cx + radius * Math.cos(angle));
    let y = Math.ceil(cy + radius * Math.sin(angle));
    return { x, y, angle };
  };

  const linePointsAtAngle = ({ cx, cy, angle, radius, lineLength }) => {
    angle = (angle * Math.PI) / 180;
    let x = cx + radius * Math.cos(angle);
    let y = cy + radius * Math.sin(angle);

    let x1 = Math.round(x);
    let y1 = Math.round(y);

    let x2 = Math.round(x - lineLength * Math.cos(angle));
    let y2 = Math.round(y - lineLength * Math.sin(angle));
    return { x1, y1, x2, y2 };
  };

  const lines = [
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 0,
      radius: radius,
      lineLength: majorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 90,
      radius: radius,
      lineLength: majorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 180,
      radius: radius,
      lineLength: majorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 270,
      radius: radius,
      lineLength: majorScaleLength
    }),

    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 45,
      radius: radius,
      lineLength: minorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 135,
      radius: radius,
      lineLength: minorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 225,
      radius: radius,
      lineLength: minorScaleLength
    }),
    linePointsAtAngle({
      cx: center.x,
      cy: center.y,
      angle: 315,
      radius: radius,
      lineLength: minorScaleLength
    })
  ];

  const texts = [
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 270,
        radius: radius - majorScaleLength - 0.1 * size
      }),
      text: 'N'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 0,
        radius: radius - majorScaleLength - 0.1 * size
      }),
      text: 'E'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 90,
        radius: radius - majorScaleLength - 0.1 * size
      }),
      text: 'S'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 180,
        radius: radius - majorScaleLength - 0.1 * size
      }),
      text: 'W'
    },

    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 315,
        radius: radius - minorScaleLength - 0.1 * size
      }),
      text: 'NE'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 45,
        radius: radius - minorScaleLength - 0.1 * size
      }),
      text: 'SE'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 135,
        radius: radius - minorScaleLength - 0.1 * size
      }),
      text: 'SW'
    },
    {
      ...getPointAtAngle({
        cx: center.x,
        cy: center.y,
        angle: 225,
        radius: radius - minorScaleLength - 0.1 * size
      }),
      text: 'NW'
    }
  ];

  return (
    <SvgContainer scaleTextSize={size * 0.05} theme={theme}>
      <svg width={size} height={size}>
        <g>
          <circle
            cx={center.x}
            cy={center.y}
            r={radius}
            fill="none"
            strokeWidth={5}
            stroke={theme.primary}
          />
        </g>
        <g>
          {lines.map((obj, index) => {
            return (
              <line key={index} {...obj} stroke={theme.primary} strokeWidth={1.5} fill="none" />
            );
          })}
        </g>
        <g>
          {texts.map((obj, index) => {
            return (
              <text
                key={index}
                className="scale-text"
                x={obj.x}
                y={obj.y}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {obj.text}
              </text>
            );
          })}
        </g>
        <g style={{ transformOrigin: 'center', transform: `rotateZ(${direction}deg)` }}>
          <path
            d={`M${center.x} ${center.y} L${center.x + needleLength / 8} ${center.y} L${
              center.x
            } ${center.y - needleLength / 2} L${center.x - needleLength / 8} ${center.y} Z`}
            fill={'#f03e3e'}
          />
          <path
            d={`M${center.x} ${center.y} L${center.x + needleLength / 8} ${center.y} L${
              center.x
            } ${center.y + needleLength / 2} L${center.x - needleLength / 8} ${center.y} Z`}
            fill={'#9E9E9E'}
          />
        </g>
      </svg>
    </SvgContainer>
  );
};

DirectionCompassSVG.defaultProps = {};

DirectionCompassSVG.propTypes = {};

export default DirectionCompassSVG;
