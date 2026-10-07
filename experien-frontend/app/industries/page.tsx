"use client";

import { useState } from "react";
import { pathways } from "@/components/industries/pathways";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryPicker from "@/components/industries/IndustryPicker";
import SelectionSummary from "@/components/industries/SelectionSummary";
import MaterialsSection from "@/components/industries/MaterialsSection";
import CourseBanner from "@/components/industries/CourseBanner";

export default function IndustriesPage() {
  const [selectedId, setSelectedId] = useState("technology");
  const selected = pathways.find((p) => p.id === selectedId)!;

  return (
    <>
      <IndustriesHero />
      <IndustryPicker pathways={pathways} selectedId={selectedId} onSelect={setSelectedId} />
      <SelectionSummary selected={selected} />
      <MaterialsSection selected={selected} />
      <CourseBanner selected={selected} />
    </>
  );
}