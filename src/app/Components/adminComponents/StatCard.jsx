const StatCard = ({
  icon: Icon,
  label,
  value,
  colorClass = "text-blue-500",
  bgColorClass = "bg-blue-500/10",
}) => {
  return (
    <div className="group relative overflow-hidden rounded border border-slate-800 bg-[#0F1720]/90 backdrop-blur-md p-6  transition-all duration-300 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/40">
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-slate-700/10 to-transparent blur-2xl" />
      </div>

      <div className="relative flex items-center gap-5">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColorClass} ${colorClass}`}>
          <Icon size={22} strokeWidth={2.2} />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            {label}
          </span>
          <h3 className="mt-1 text-3xl font-semibold text-white tracking-tight">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
