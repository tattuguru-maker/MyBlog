interface Props {
  size: string;
  label: string;
  className?: string;
}

export default function AdZone({ size, label, className = "" }: Props) {
  return (
    <div className={`ad-zone ${className}`}>
      <div className="text-center p-4">
        <p className="text-text-muted/60 text-xs font-mono uppercase tracking-wider mb-1">Advertisement</p>
        <p className="text-text-muted/40 text-xs">{label}</p>
        <p className="text-text-muted/30 text-[10px] mt-1">{size}</p>
      </div>
    </div>
  );
}
