(function (root) {
  'use strict';
  // Workbook sheet 9: C6:C9 inventory (billions), C12/C17 speedups (days).
  // Healing uses G7:K7 / G20:K20 per 1,000; training G33:M33 per 4,000.
  function calculate(inventory, days, costs, batch, minutes) {
    if (inventory.length !== 4 || costs.length !== 4 || ![...inventory, days].every(n => Number.isFinite(n) && n >= 0) || ![...costs, batch, minutes].every(n => Number.isFinite(n) && n > 0)) return null;
    const limits = inventory.map((n, i) => n * 1e9 / costs[i] * batch);
    limits.push(days * 1440 / minutes * batch);
    if(!limits.every(Number.isFinite))return null;
    const capacity = Math.min(...limits);
    const troops = Math.floor(capacity);
    return {capacity, troops, limits, bottlenecks:limits.map((n,i) => Math.abs(n-capacity) <= Math.max(1,capacity)*1e-10 ? i : -1).filter(i=>i>=0), spent:costs.map(n=>troops*n/batch), days:troops*minutes/batch/1440};
  }
  root.GULGuideCalculator = {calculate};
})(typeof window === 'undefined' ? globalThis : window);
