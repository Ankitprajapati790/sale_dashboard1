'use client';
import React, { useState } from 'react';
import { SalesChart } from '@/components/organisms/SalesChart';
import { ChartTypeSwitcher } from '@/components/molecules/ChartTypeSwitcher';
import { FilterInput } from '@/components/atoms/FilterInput';
import salesData from '@/data/salesData';

export default function DashboardPage() {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      <FilterInput threshold={threshold} setThreshold={setThreshold} />
      <ChartTypeSwitcher chartType={chartType} setChartType={setChartType} />
      <SalesChart data={salesData} threshold={threshold} chartType={chartType} />
    </main>
  );
}