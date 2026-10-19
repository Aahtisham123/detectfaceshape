// Inline face-shape outline for interactive UI (results, cards). Static image files are built from lib/graphics/svg.ts.
import { SHAPE_SPECS, outline } from "@/lib/graphics/svg";

export default function ShapeIllustration({
  shape,
  size = 160,
  guides = false,
  title,
}: {
  shape: string;
  size?: number;
  guides?: boolean;
  title?: string;
}) {
  const spec = SHAPE_SPECS[shape] ?? SHAPE_SPECS.oval;
  const vb = 200;
  const height = 150;
  const half = height / spec.length / 2;
  const top = (vb - height) / 2;
  const cx = vb / 2;
  const y = (t: number) => top + t * height;
  const w = (i: number) => spec.hw[i] * half;
  return (
    <svg viewBox={`0 0 ${vb} ${vb}`} width={size} height={size} role="img" aria-label={title ?? `${shape} face shape outline`} className="shape-svg">
      <path d={outline(spec, cx, top, half, height)} className="shape-fill" />
      <circle cx={cx - half * 0.38} cy={y(0.43)} r={3.2} className="shape-feature" />
      <circle cx={cx + half * 0.38} cy={y(0.43)} r={3.2} className="shape-feature" />
      <path d={`M${cx - half * 0.25},${y(0.76)} Q${cx},${y(0.81)} ${cx + half * 0.25},${y(0.76)}`} className="shape-line" />
      {guides && (
        <g className="shape-guides">
          <line x1={cx - w(2)} x2={cx + w(2)} y1={y(0.28)} y2={y(0.28)} />
          <line x1={cx - w(3)} x2={cx + w(3)} y1={y(0.5)} y2={y(0.5)} />
          <line x1={cx - w(4)} x2={cx + w(4)} y1={y(0.75)} y2={y(0.75)} />
          <line x1={cx} x2={cx} y1={top} y2={top + height} strokeDasharray="4 4" />
        </g>
      )}
    </svg>
  );
}

