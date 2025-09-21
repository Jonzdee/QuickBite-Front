import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

export default function StatCard({
  title,
  value,
  trend = null, // e.g. "+12.5%" or "-8%"
  trendUp = true, // boolean for arrow direction
  subtitle = null, // e.g. "Trending up this month"
  description = null, // e.g. "Visitors for the last 6 months"
}) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
      {/* Title + Value + Badge */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold text-gray-900 tabular-nums">
            {value}
          </h3>
        </div>
        {trend && (
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded border 
            ${trendUp ? "text-green-600 border-green-200" : "text-red-600 border-red-200"}`}
          >
            {trendUp ? (
              <ArrowTrendingUpIcon className="w-4 h-4" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4" />
            )}
            {trend}
          </span>
        )}
      </div>

      {/* Footer text */}
      {(subtitle || description) && (
        <div className="mt-3 text-sm">
          {subtitle && (
            <div className="flex items-center gap-1 font-medium text-gray-700">
              {subtitle}
              {trendUp ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-600" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-600" />
              )}
            </div>
          )}
          {description && (
            <p className="text-gray-500 text-sm">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
