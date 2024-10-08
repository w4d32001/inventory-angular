import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface cardSumary{
  icon: IconDefinition
  total: string
  bg: string
  average: number
  averageText: string
  title: string
  tooltipText: string
}