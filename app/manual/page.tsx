"use client";

import { useState } from "react";

interface Module {
  id: number;
  name: string;
  type: string;
  td?: number;
  tp?: number;
  exam?: number;
  percentage?: number;
  coefficient?: number;
}

const ManualPage = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const semester = "Semester :";

  const addModule = () => {
    setModules([
      ...modules,
      {
        id: modules.length + 1,
        name: "",
        type: "TD/TP/EXAM",
        td: 0,
        tp: 0,
        exam: 0,
        percentage: 0,
        coefficient: 0,
      },
    ]);
  };

  const updateModule = (
    id: number,
    field: keyof Module,
    value: string | number
  ) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === id ? { ...module, [field]: value } : module
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={addModule}
        className="mb-4 px-4 py-2 bg-[#79B552] text-white rounded hover:bg-[#9de46d3a] transition duration-300 ease-in-out"
      >
        Add Module
      </button>

      {modules.map((module) => (
        <div
          key={module.id}
          className="flex flex-wrap gap-5 mb-4 border p-4 rounded text-white"
        >
          <input
            type="text"
            placeholder="Name Module"
            value={module.name}
            onChange={(e) => updateModule(module.id, "name", e.target.value)}
            className="rounded-md border p-2 w-40 bg-[#9de46d3a] text-white"
          />

          <input
            type="number"
            placeholder="Coef"
            value={module.coefficient || ""}
            onChange={(e) =>
              updateModule(module.id, "coefficient", Number(e.target.value))
            }
            className="rounded-md border p-2 w-20 bg-[#9de46d3a] text-white"
          />
          <select
            value={module.type}
            onChange={(e) => {
              const newType = e.target.value;
              updateModule(module.id, "type", newType);
              if (newType === "EXAM") {
                updateModule(module.id, "percentage", 100);
              } else {
                updateModule(module.id, "percentage", 0);
              }
            }}
            className="rounded-md border p-2 w-25 bg-[#9de46d3a] text-white"
          >
            <option value="TD/TP/EXAM">TD/TP/EXAM</option>
            <option value="TD/EXAM">TD/EXAM</option>
            <option value="TP/EXAM">TP/EXAM</option>
            <option value="EXAM">EXAM</option>
          </select>

          {(module.type === "TD/TP/EXAM" || module.type === "TD/EXAM") && (
            <input
              type="number"
              placeholder="TD"
              value={module.td || ""}
              onChange={(e) =>
                updateModule(module.id, "td", Number(e.target.value))
              }
              className="rounded-md border p-2 w-16 bg-[#9de46d3a] text-white"
            />
          )}

          {(module.type === "TD/TP/EXAM" || module.type === "TP/EXAM") && (
            <input
              type="number"
              placeholder="TP"
              value={module.tp || ""}
              onChange={(e) =>
                updateModule(module.id, "tp", Number(e.target.value))
              }
              className="rounded-md border p-2 w-16 bg-[#9de46d3a] text-white"
            />
          )}

          <input
            type="number"
            placeholder="Exam"
            value={module.exam || ""}
            onChange={(e) =>
              updateModule(module.id, "exam", Number(e.target.value))
            }
            className="rounded-md border p-2 w-[75px] bg-[#9de46d3a] text-white"
          />

          <select
            value={module.percentage ?? ""}
            onChange={(e) => {
              const newPercentage = Number(e.target.value);
              updateModule(module.id, "percentage", newPercentage);
              if (newPercentage === 100) {
                updateModule(module.id, "type", "EXAM");
              }
            }}
            disabled={module.type === "EXAM"}
            className={`rounded-md border p-2 w-24 text-white ${
              module.type === "EXAM"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#9de46d3a]"
            }`}
          >
            <option value="50">50/50</option>
            <option value="60">60/40</option>
            <option value="100">100</option>
          </select>
        </div>
      ))}

      <div className="flex gap-4 mt-6 items-center">
        <span className="text-lg font-semibold text-white">{semester}</span>
        <button className="px-4 py-2 bg-[#79B552] text-white rounded hover:bg-[#9de46d3a] transition duration-300 ease-in-out">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default ManualPage;
