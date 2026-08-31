export default function SmallIcon({ type }) {
  const icons = {
    sunny: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4.5" fill="#FCD34D" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d, i) => (
          <line
            key={i}
            x1={12 + 7 * Math.cos((d * Math.PI) / 180)}
            y1={12 + 7 * Math.sin((d * Math.PI) / 180)}
            x2={12 + 9.5 * Math.cos((d * Math.PI) / 180)}
            y2={12 + 9.5 * Math.sin((d * Math.PI) / 180)}
            stroke="#FCD34D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    ),
    "partly-cloudy": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="4" fill="#FCD34D" />
        <path
          d="M19 17H7a4 4 0 0 1 0-8 4 4 0 0 1 .9.1A5 5 0 0 1 18 12.2 3 3 0 0 1 19 17Z"
          fill="#CBD5E1"
        />
      </svg>
    ),
    cloudy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 16H6a5 5 0 0 1 0-10 5 5 0 0 1 1.1.12A6 6 0 0 1 17 10.5 4 4 0 0 1 18 16Z"
          fill="#94A3B8"
        />
        <path
          d="M20 19H8a4 4 0 0 1 0-8 4 4 0 0 1 .9.1A5 5 0 0 1 19 14.2 3 3 0 0 1 20 19Z"
          fill="#CBD5E1"
        />
      </svg>
    ),
    rainy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 14H6a5 5 0 0 1 0-10 5 5 0 0 1 1.1.12A6 6 0 0 1 17 8.5 4 4 0 0 1 18 14Z"
          fill="#64748B"
        />
        {[
          [7, 17],
          [12, 17],
          [17, 17],
          [9.5, 21],
          [14.5, 21],
        ].map(([x, y], i) => (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x - 1}
            y2={y + 3}
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    ),
    stormy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 13H6a5 5 0 0 1 0-10 5 5 0 0 1 1.1.12A6 6 0 0 1 17 7.5 4 4 0 0 1 18 13Z"
          fill="#475569"
        />
        <path d="M13 12 L10 18H13L10 24L17 16H13L15 12Z" fill="#FCD34D" />
      </svg>
    ),
    snowy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 14H6a5 5 0 0 1 0-10 5 5 0 0 1 1.1.12A6 6 0 0 1 17 8.5 4 4 0 0 1 18 14Z"
          fill="#94A3B8"
        />
        {[
          [7, 19],
          [12, 21],
          [17, 19],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#BAE6FD" />
        ))}
      </svg>
    ),
    windy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {[
          [4, 9, 16, 9],
          [4, 13, 14, 13],
          [4, 17, 12, 17],
        ].map(([x1, y, x2], i) => (
          <path
            key={i}
            d={`M${x1} ${y} Q${(x1 + x2) / 2} ${y - 3} ${x2} ${y}`}
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </svg>
    ),
  }
  return icons[type]
}
