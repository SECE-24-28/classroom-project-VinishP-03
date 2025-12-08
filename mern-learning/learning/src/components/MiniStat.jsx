import React from 'react';
export default function MiniStat({ label, value }) {
    return (
        <div className="bg-[#07101a] border border-[#10202a] rounded-lg p-3 shadow-sm text-sm text-[#cbd5e1]">
            <div className="text-xs text-[#9fb3c4]">{label}</div>
            <div className="font-semibold text-white">{value}</div>
        </div>
    )
}