export default function WeatherIllustration({ type, size = 120 }) {
  const s = size
  if (type === "sunny")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="28" fill="#FCD34D" opacity="0.95" />
        <circle cx="60" cy="60" r="22" fill="#FDE68A" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1={60 + 34 * Math.cos((deg * Math.PI) / 180)}
            y1={60 + 34 * Math.sin((deg * Math.PI) / 180)}
            x2={60 + 48 * Math.cos((deg * Math.PI) / 180)}
            y2={60 + 48 * Math.sin((deg * Math.PI) / 180)}
            stroke="#FCD34D"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        <circle cx="60" cy="60" r="36" fill="rgba(252,211,77,0.08)" />
      </svg>
    )
  if (type === "partly-cloudy")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="42" cy="44" r="20" fill="#FCD34D" opacity="0.9" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <line
            key={i}
            x1={42 + 24 * Math.cos((deg * Math.PI) / 180)}
            y1={44 + 24 * Math.sin((deg * Math.PI) / 180)}
            x2={42 + 33 * Math.cos((deg * Math.PI) / 180)}
            y2={44 + 33 * Math.sin((deg * Math.PI) / 180)}
            stroke="#FCD34D"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        ))}
        <path
          d="M88 78H40a18 18 0 0 1 0-36 17.8 17.8 0 0 1 4 .45A21 21 0 0 1 84 54.9 14 14 0 0 1 88 78Z"
          fill="#E2E8F0"
        />
        <path
          d="M96 85H48a14 14 0 0 1 0-28 14 14 0 0 1 3.2.36A16 16 0 0 1 92 67 11 11 0 0 1 96 85Z"
          fill="white"
          opacity="0.95"
        />
      </svg>
    )
  if (type === "cloudy")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 65H32a20 20 0 0 1 0-40 19.8 19.8 0 0 1 4.4.5A24 24 0 0 1 86 38.8 16 16 0 0 1 90 65Z"
          fill="#94A3B8"
          opacity="0.7"
        />
        <path
          d="M96 80H38a18 18 0 0 1 0-36 18 18 0 0 1 4 .4A20 20 0 0 1 92 57 13 13 0 0 1 96 80Z"
          fill="#CBD5E1"
        />
        <path
          d="M82 88H28a12 12 0 0 1 0-24 12 12 0 0 1 2.6.3A13 13 0 0 1 78 74 9 9 0 0 1 82 88Z"
          fill="#E2E8F0"
        />
      </svg>
    )
  if (type === "rainy")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 58H32a18 18 0 0 1 0-36 17.8 17.8 0 0 1 4 .45A21 21 0 0 1 84 34.9 14 14 0 0 1 90 58Z"
          fill="#64748B"
          opacity="0.8"
        />
        <path
          d="M96 68H36a16 16 0 0 1 0-32 16 16 0 0 1 3.6.36A18 18 0 0 1 92 50 12 12 0 0 1 96 68Z"
          fill="#94A3B8"
        />
        {[
          [35, 80],
          [50, 78],
          [65, 80],
          [80, 78],
          [42, 92],
          [58, 90],
          [74, 92],
        ].map(([x, y], i) => (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x - 5}
            y2={y + 12}
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}
      </svg>
    )
  if (type === "stormy")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88 55H30a20 20 0 0 1 0-40 19.8 19.8 0 0 1 4.4.5A24 24 0 0 1 84 28.8 16 16 0 0 1 88 55Z"
          fill="#475569"
          opacity="0.9"
        />
        <path
          d="M96 66H36a16 16 0 0 1 0-32 16 16 0 0 1 3.6.36A18 18 0 0 1 92 48 12 12 0 0 1 96 66Z"
          fill="#334155"
        />
        {[
          [38, 74],
          [50, 72],
          [64, 74],
        ].map(([x, y], i) => (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x - 4}
            y2={y + 10}
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
        ))}
        <path
          d="M62 62 L52 82 H60 L48 102 L72 76 H62 L70 62Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  if (type === "snowy")
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88 58H30a18 18 0 0 1 0-36 17.8 17.8 0 0 1 4 .45A21 21 0 0 1 84 34.9 14 14 0 0 1 88 58Z"
          fill="#94A3B8"
          opacity="0.7"
        />
        <path
          d="M96 68H36a16 16 0 0 1 0-32 16 16 0 0 1 3.6.36A18 18 0 0 1 92 50 12 12 0 0 1 96 68Z"
          fill="#CBD5E1"
        />
        {[
          [36, 82],
          [50, 90],
          [64, 82],
          [78, 90],
          [43, 100],
          [71, 100],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3.5" fill="#BAE6FD" opacity="0.9" />
            <line
              x1={x - 5}
              y1={y}
              x2={x + 5}
              y2={y}
              stroke="#E0F2FE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1={x}
              y1={y - 5}
              x2={x}
              y2={y + 5}
              stroke="#E0F2FE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    )
  // windy default
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="38" cy="38" r="18" fill="#FCD34D" opacity="0.85" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <line
          key={i}
          x1={38 + 22 * Math.cos((deg * Math.PI) / 180)}
          y1={38 + 22 * Math.sin((deg * Math.PI) / 180)}
          x2={38 + 30 * Math.cos((deg * Math.PI) / 180)}
          y2={38 + 30 * Math.sin((deg * Math.PI) / 180)}
          stroke="#FCD34D"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {[
        [18, 56, 88, 56],
        [14, 70, 80, 70],
        [22, 84, 74, 84],
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 - 10} ${x2} ${y1}`}
          stroke="#7DD3FC"
          strokeWidth={3 - i * 0.5}
          strokeLinecap="round"
          fill="none"
          opacity={0.9 - i * 0.15}
        />
      ))}
    </svg>
  )
}
