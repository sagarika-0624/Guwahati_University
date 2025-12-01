import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface PortalStatusBadgeProps {
    name: string;
    status: 'online' | 'maintenance' | 'offline';
    uptime: string;
}

const statusConfig = {
    online: { icon: CheckCircle, color: 'bg-green-100 text-green-700 hover:bg-green-200', iconColor: 'text-green-600' },
    maintenance: { icon: Clock, color: 'bg-amber-100 text-amber-700 hover:bg-amber-200', iconColor: 'text-amber-600' },
    offline: { icon: AlertCircle, color: 'bg-red-100 text-red-700 hover:bg-red-200', iconColor: 'text-red-600' }
};

export default function PortalStatusBadge({ name, status, uptime }: PortalStatusBadgeProps) {
    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <Badge variant="outline" className={`gap-2 ${config.color} border-transparent`}>
            <Icon className={`w-3 h-3 ${config.iconColor}`} />
            <span>{name}</span>
            <span className="opacity-60">|</span>
            <span className="text-xs font-normal">{uptime}</span>
        </Badge>
    );
}
