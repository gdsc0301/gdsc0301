import '@fortawesome/fontawesome-free/css/all.css';
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default function Icon({ type = 'brands', name, className = ''}: { type?: 'solid'|'regular'|'brands', name: IconName, className?: string }) {
  return <i className={`fa-${type} fa-${name} ${className}`}></i>;
}