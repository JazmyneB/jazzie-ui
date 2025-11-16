import React from "react";
import PropTypes from "prop-types";
import "./DashboardWidget.css";

const DashboardWidget = ({ title, value, trend, icon, variant = "soft" }) => {
  const trendColor = trend?.direction === "up" ? "positive" : "negative";

  return (
    <div className={`dashboard-widget ${variant}`}>
      {icon && <div className="widget-icon">{icon}</div>}
      <div className="widget-info">
        <span className="widget-title">{title}</span>
        <span className="widget-value">{value}</span>
        {trend && (
          <span className={`widget-trend ${trendColor}`}>
            {trend.direction === "up" ? "↑" : "↓"} {trend.percentage}%
          </span>
        )}
      </div>
    </div>
  );
};

DashboardWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.shape({
    direction: PropTypes.oneOf(["up", "down"]),
    percentage: PropTypes.number,
  }),
  icon: PropTypes.node,
  variant: PropTypes.oneOf(["soft", "elevated", "dark"]),
};

export default DashboardWidget;
